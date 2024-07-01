'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useSession } from 'next-auth/react'
import { Button, Navbar } from 'flowbite-react'
import '@/app/globals.css'


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const session = useSession()

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [profilePic, setProfilePic] = useState<string | null>(null)

  useEffect(() => {
    setIsLoggedIn(session.status === 'authenticated')
    if (session.status === 'authenticated') {
      if (session.data.user?.image) {
        setProfilePic(session.data.user?.image)
      } else {
        setProfilePic('/favicon.ico')
      }
    } else {
      setProfilePic(null)
    }
  }, [session])

  return (
    <div className="dark flex flex-col min-h-screen">
      <header className="sticky top-0 left-0 w-full justify-between items-center p-4 bg-stone-900 text-slate-50 z-10">
        <Navbar fluid className="w-full">
          <Navbar.Brand href="/">
            <span className="self-center whitespace-nowrap text-xl font-semibold">
              Cone.ai
            </span>
          </Navbar.Brand>
          {/* <Navbar.Toggle />
          <Navbar.Collapse>
            <Navbar.Link href="/" as={Link} active={pathname === '/'}>
              Home
            </Navbar.Link>
            {isLoggedIn && (
              <Navbar.Link
                href="/join-course"
                as={Link}
                active={pathname === '/join-course'}
              >
                Join Course
              </Navbar.Link>
            )}
          </Navbar.Collapse> */}
          {isLoggedIn && profilePic? (
            <Link href="/signout">
              <Image
                src={profilePic}
                alt={'User'}
                className="rounded-full"
                width="32"
                height="32"
              />
            </Link>
          ) : (
            <Button as={Link} href="/signin">
              Sign In
            </Button>
          )}
        </Navbar>
      </header>
      <div className="flex-1">{children}</div>
    </div>
  )
}
