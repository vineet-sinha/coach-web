import NextAuth from "next-auth"
import { PrismaAdapter } from '@auth/prisma-adapter'
import Google from 'next-auth/providers/google'
import prisma from './lib/db'

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [Google],
  callbacks: {
    session({ session /*, user, token */ }) {
      // By default only a subset of the token is returned for increased security
      // We are expanding for development, etc.
      // more info: https://next-auth.js.org/configuration/callbacks#session-callback
      return session
    },
  },
})
