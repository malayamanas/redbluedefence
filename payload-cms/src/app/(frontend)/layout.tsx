import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { AOSInit } from '@/components/AOSInit'
import './globals.css'

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'RedBlueDefence | Advanced Cybersecurity Solutions',
    template: '%s | RedBlueDefence',
  },
  description:
    'RedBlueDefence provides enterprise-grade cybersecurity services, training, and consulting to protect your organization.',
  openGraph: {
    siteName: 'RedBlueDefence',
    type: 'website',
  },
}

export default function FrontendLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={manrope.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Rethink+Sans:ital,wght@0,400..800;1,400..800&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="https://unpkg.com/aos@2.3.1/dist/aos.css" />
      </head>
      <body className="bg-[#0a0a0f] text-gray-200 antialiased">
        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
        <AOSInit />
      </body>
    </html>
  )
}
