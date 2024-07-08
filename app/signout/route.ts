import { NextRequest } from 'next/server'
import { signOut } from '@/auth'

export async function GET(req: NextRequest) {
  await signOut({ redirectTo: '/', redirect: true })
}