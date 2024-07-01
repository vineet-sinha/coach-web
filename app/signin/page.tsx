import { Button } from 'flowbite-react'
import { FaGoogle } from "react-icons/fa";
import { signIn } from '@/auth'

export default function SigninPage() {
  return (
    <div className="h-screen w-full flex flex-col place-content-center items-center">
      <form
        action={async () => {
          'use server'
          await signIn('google', { redirectTo: '/', redirect: true })
        }}
      >
        <Button type="submit" className="!bg-stone-500">
          <FaGoogle className="mr-4 self-center"/>
          Signin with Google
        </Button>
      </form>
    </div>
  )
}
