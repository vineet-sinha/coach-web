import { useSession } from 'next-auth/react'
import { User } from 'next-auth'
import { useEffect, useState } from 'react'

export const useAuth = () => {
  const session = useSession()

  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    if (!session) {
      setIsAuthenticated(false)
      setIsLoading(true)
      setUser(null)
    } else if (session.status === 'loading') {
      setIsAuthenticated(false)
      setIsLoading(true)
      setUser(null)
    } else if (session.status === 'authenticated') {
      setIsAuthenticated(true)
      setIsLoading(false)
      setUser(session.data.user as User)
    } else {
      setIsAuthenticated(false)
      setIsLoading(false)
      setUser(null)
    }
  }, [session])

  return { isAuthenticated, isLoading, user }
}
