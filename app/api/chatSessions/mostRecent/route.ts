import { NextRequest } from 'next/server'
import prisma from '@/lib/db'

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams
  const userId = searchParams.get('userId')

  if (!userId) {
    return Response.json(
      { message: 'Cannot find Chat Sessions without userId' },
      { status: 400 }
    )
  }
try {
    const session = await prisma.chatSession.findFirst({
      where: { userId: userId },
      orderBy: { createdAt: 'desc' },
    });

    if (!session) {
      return Response.json(
        { message: `Chat Sessions not found for user with id ${userId}` },
        { status: 400 }
      )
    }

    return Response.json(session);
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

