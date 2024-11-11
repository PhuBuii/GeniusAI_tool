import { CrispProvider } from '@/components/crisp-provider'
import ModalProvider from '@/components/modal-provider'
import { ToasterProvider } from '@/components/toaster-provider'
import { ClerkProvider } from '@clerk/nextjs'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.scss'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export const metadata: Metadata = {
  title: 'Genius',
  description: 'AI flatform',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <head>
          <link rel='icon' href='/logo.svg' sizes='16' />
        </head>
        <CrispProvider />
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <ToasterProvider />
          <ModalProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
