import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import ScrollProgress from '@/components/global/scroll-progress'
import Loading from '@/components/global/loading'
import { LoadingProvider } from '@/contexts/loading-context'
import { Toaster } from '@/components/ui/sonner'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rupanjan De',
  description: 'Full stack web developer dedicated to turning ideas into creative solutions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <LoadingProvider>
          <Loading />
          <ScrollProgress />
          <Header />
          <main>{children}</main>
          <Toaster />
          <Footer />
        </LoadingProvider>
      </body>
    </html>
  )
}
