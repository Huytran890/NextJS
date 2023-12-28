import type { Metadata } from 'next'
import { Urbanist } from 'next/font/google'
import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import ToastProvider from '@/providers/ToastProvider'
import './globals.css'

const font = Urbanist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Coolmate',
  description: 'Coolmate shop',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={font.className}>
        <ToastProvider />
        <Navbar />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  )
}
