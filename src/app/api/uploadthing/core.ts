import { PLANS } from "@/config/stripe";
import { db } from "@/db";
import { getUserSubscriptionPlan } from "@/lib/stripe";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { PDFLoader } from "langchain/document_loaders/fs/pdf";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { PineconeStore } from "@langchain/pinecone";
import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

const middleware = async () => {
  const { getUser } = getKindeServerSession();
  const user = getUser();
  if (!user || !user.id) {
    throw new Error("Unauthorized");
  }

  const subscriptionPlan = await getUserSubscriptionPlan();

  return { subscriptionPlan, userId: user.id };
};

const onUploadComplete = async ({
  metadata,
  file,
}: {
  metadata: Awaited<ReturnType<typeof middleware>>;
  file: {
    key: string;
    name: string;
    url: string;
  };
}) => {
  const isFileExists = await db.file.findFirst({
    where: {
      key: file.key,
    },
  });

  if (isFileExists) return;

  const createdFile = await db.file.create({
    data: {
      key: file.key,
      userId: metadata.userId,
      url: `https://utfs.io/f/${file.key}`,
      name: file.name,
      uploadStatus: "PROCESSING",
    },
  });

  try {
    const response = await fetch(
      `https://utfs.io/f/${file.key}`
    );
  
    if (!response.ok) {
      throw new Error(`Error fetching PDF: ${response.statusText}`);
    }
  
    const blob = await response.blob();
  
    const loader = new PDFLoader(blob);

    const pageLevelDocs = (await loader.load()).map((doc) => ({
      ...doc,
      metadata: {
        ...doc.metadata,
        "file.id": createdFile.id,
      },
    }));
  
    const pagesAmt = pageLevelDocs.length;
    const { subscriptionPlan } = metadata;
    const { isSubscribed } = subscriptionPlan;
  
    const isProExceeded =
      pagesAmt > PLANS.find((plan) => plan.name === "Pro")!.pagesPerPdf;
    const isFreeExceeded =
      pagesAmt > PLANS.find((plan) => plan.name === "Free")!.pagesPerPdf;

  
    if ((isSubscribed && isProExceeded) || (!isSubscribed && isFreeExceeded)) {
      await db.file.update({
        data: {
          uploadStatus: "FAILED",
        },
        where: {
          id: createdFile.id,
        },
      });
    } else {
      // const pineconeIndex = await pinecone
      //   .Index("coneapp")
      //   .namespace(metadata.userId);

      // console.log("pineconeIndex: ", pineconeIndex);
  
      const embeddings = new OpenAIEmbeddings({
        openAIApiKey: process.env.OPENAI_API_KEY,
      });

      console.log("embeddings: ", embeddings);
  
      // await PineconeStore.fromDocuments(pageLevelDocs, embeddings, {
      //   pineconeIndex
      // });

      await PineconeStore.fromDocuments(pageLevelDocs, embeddings, {
        pineconeConfig: {
          config: {
            apiKey: process.env.PINECONE_API_KEY!,
          },
          indexName: "coneapp",
          indexHostUrl: process.env.PINECONE_HOST,
          namespace: metadata.userId,
        },
      });
  
      await db.file.update({
        data: {
          uploadStatus: "SUCCESS",
        },
        where: {
          id: createdFile.id,
        },
      });
    }
  } catch (error) {
    console.error("Error during PDF processing:", error);
    await db.file.update({
      data: {
        uploadStatus: "FAILED",
      },
      where: {
        id: createdFile.id,
      },
    });
  }  
};

export const ourFileRouter = {
  freePlanUploader: f({ pdf: { maxFileSize: "1GB" } })
    .middleware(middleware)
    .onUploadComplete(onUploadComplete),
  proPlanUploader: f({ pdf: { maxFileSize: "1GB" } })
    .middleware(middleware)
    .onUploadComplete(onUploadComplete),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
