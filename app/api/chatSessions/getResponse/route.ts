import { NextRequest } from 'next/server'
import { OpenAI } from 'openai'
import prisma from '@/lib/db'
import Typed, { Prisma, MessageRole } from '@prisma/client';

let openAIApi: OpenAI
if (process.env.OPENAI_API_KEY) {
  openAIApi = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
}

const systemPrompt = `You are Cone.ai, a highly empathetic coach, based on the GPT-3.5 architecture. Knowledge cutoff: 2021-09`

async function callOpenAI(messages: Typed.Message[], message: string) {
  const msgsForLLM: OpenAI.ChatCompletionMessageParam[] = [
    { role: 'system', content: systemPrompt },
    ...messages,
    { role: 'user', content: message },
  ]
  const response = await openAIApi.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: msgsForLLM,
  })

  if (
    response &&
    response.choices &&
    response.choices.length > 0 &&
    response.choices[0].message &&
    response.choices[0].message.content
  ) {
    return response.choices[0].message.content
  } else {
    return `Sorry, didn't hear back from LLM!`
  }
}

export async function POST(req: NextRequest) {
  const { userId, chatSessionId, message } = await req.json();

  try {
    if (chatSessionId) {
      const chatSession = await prisma.chatSession.findUnique({
        where: { id: chatSessionId }
      })
      if (!chatSession) {
        return Response.json(
          { message: `Failed to find chat sessions: ${chatSessionId}` },
          { status: 500 }
        )
      }
      const response = await callOpenAI(chatSession.messages, message);
      chatSession.messages.push({
        role: MessageRole.user,
        content: message,
        createdAt: new Date()
      }, {
        role: MessageRole.assistant,
        content: response,
        createdAt: new Date(),
      })
      await prisma.chatSession.update({
        where: { id: chatSessionId },
        data: { messages: chatSession.messages },
      });

      return Response.json({
        success: true,
        message: response
      });
    } else {
      // create new chat session
      const response = await callOpenAI([], message);
      const createInp:Prisma.ChatSessionUncheckedCreateInput = {
        userId,
        messages: [{
          role: MessageRole.user,
          content: message,
        }, {
          role: MessageRole.assistant,
          content: response,
        }]
      };
      await prisma.chatSession.create({
        data: createInp
      });

      return Response.json({
        success: true,
        message: response
      });
    }

  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Error fetching chat sessions:', error.message)
      return Response.json(
        { message: `Failed to fetch chat sessions: ${error.message}` },
        { status: 500 }
      )
    } else {
      console.error('Unknown error fetching chat sessions:', error)
      return Response.json(
        { message: `Failed to fetch chat sessions: Unknown error` },
        { status: 500 }
      )
    }
  }
}

