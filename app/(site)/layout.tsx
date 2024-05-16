import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import GsapContainer from "@/components/GsapContainer"
import "@/styles/main.scss"

// FONT STUFF
const dmSans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dmSans',
})

// META STUFF
export const metadata: Metadata = {
  metadataBase: new URL('https://www.dianthe.studio'),
  alternates: {
    canonical: '/',
    languages: { 'en-US': '/en-US', },
  },
  title: 'Dianthe Studio | Client Starter App',
  description: 'a starter template for all dianthe studio clients',
  icons: { icon: '/favicon.ico' },
  openGraph: {
    title: 'Dianthe Studio | Client Starter App',
    description: 'a starter template for all dianthe studio clients',
    url: '<https://www.dianthe.studio>',
    siteName: 'Client Starter App',
    images: [
      {
        url: '/card.jpg',
        width: 1200,
        height: 600,
      }
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable}`}>
        <GsapContainer>{children}</GsapContainer>
      </body>
    </html>
  )
}