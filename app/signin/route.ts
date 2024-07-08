import { NextRequest } from 'next/server'
import { signIn } from '@/auth'

export async function GET(req: NextRequest) {
  await signIn('google', { redirectTo: '/chat', redirect: true })
}