import { NextRequest } from 'next/server'
import prisma from '@/lib/db'

export async function POST(req: NextRequest) {
  const { userId, chatSessionId, message } = await req.json();

  try {
    // provide a dummy response for now
    // no need for saving messages
    return Response.json({
      success: true,
      message: 'Lets do it!'
    });
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

