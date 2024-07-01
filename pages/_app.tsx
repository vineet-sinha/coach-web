import { AppProps } from 'next/app'
import '@/app/globals.css'
import { ReactElement, ReactNode } from 'react'
import { NextPage } from 'next'
import { SessionProvider } from 'next-auth/react'
import AppLayout from '@/components/AppLayout'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function defaultLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>
}

function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? defaultLayout

  return (
    <SessionProvider session={session}>
      {getLayout(<Component {...pageProps} />)}
    </SessionProvider>
  )
}

export default App
