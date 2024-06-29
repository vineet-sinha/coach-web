import { Button } from 'flowbite-react'
import { FaGoogle } from "react-icons/fa";
import { signOut } from '@/auth'

export default function SignoutPage() {
  return (
    <div className="h-96 w-full flex flex-col place-content-center items-center">
      <form
        action={async () => {
          'use server'
          await signOut({ redirectTo: '/', redirect: true })
        }}
      >
        <Button type="submit" className="!bg-stone-500">
          <FaGoogle />
          Sign out
        </Button>
      </form>
    </div>
  )
}
