'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { useSession } from 'next-auth/react'
import { Avatar, Button, Dropdown, Navbar } from 'flowbite-react'
import type { CustomFlowbiteTheme } from 'flowbite-react'
import { signIn } from '@/auth'
import '@/app/globals.css'

const navbarTheme: CustomFlowbiteTheme['navbar'] = {
  root: {
    base: "px-2 py-2.5 dark:border-gray-700 dark:bg-gray-800 sm:px-4",
  },
  collapse: {
    list: "items-center mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-bold"
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const pathname = usePathname()
  const session = useSession()
  const router = useRouter()

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
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 left-0 w-full justify-between items-center p-4 z-10">
        <Navbar fluid theme={navbarTheme} className="w-full">
          <Navbar.Brand href="/">
            <Image src="/cone-ai-192x192.png" className="mr-3 h-6 sm:h-9" width="24" height="24" alt="Cone.ai Logo" />
            <span className="self-center whitespace-nowrap text-xl font-semibold">
              Cone.ai
            </span>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Navbar.Link href="/" as={Link} active={pathname === '/'}>
              Home
            </Navbar.Link>
            {isLoggedIn && (
              <Navbar.Link
                href="/chat"
                as={Link}
                active={pathname === '/chat'}
              >
                Chat
              </Navbar.Link>
            )}
            {!isLoggedIn && <Button onClick={() => router.push('/signin')}>Get started</Button>}
            {isLoggedIn && profilePic && <Dropdown
              arrowIcon={false}
              inline
              label={
                <Avatar alt="User settings" img={profilePic} rounded />
              }
            >
              <Dropdown.Header>
                <span className="block text-sm">{session.data!.user!.name}</span>
                <span className="block truncate text-sm font-medium">{session.data!.user!.email}</span>
              </Dropdown.Header>
              {/* <Dropdown.Item>Dashboard</Dropdown.Item> */}
              {/* <Dropdown.Item>Settings</Dropdown.Item> */}
              {/* <Dropdown.Divider /> */}
              <Dropdown.Item onClick={() => router.push('/signout')}>Sign out</Dropdown.Item>
            </Dropdown>}
          </Navbar.Collapse>
        </Navbar>
      </header>
      <div className="flex flex-1">{children}</div>
    </div>
  )
}
