import type { Metadata } from 'next'
import { FontITC } from '@/fonts/FontUtils'
import "@/styles/main.scss"

// META STUFF
export const metadata: Metadata = {
  metadataBase: new URL('https://www.mcmw.online'),
  alternates: {
    canonical: '/',
    languages: { 'en-US': '/en-US', },
  },
  title: 'MCMW',
  description: 'MILK & COOKIES MUSIC WEEK 2024',
  icons: { icon: '/favicon.ico' },
  openGraph: {
    title: 'MCMW',
    description: 'MILK & COOKIES MUSIC WEEK 2024',
    url: '<https://www.mcmw.online>',
    siteName: 'MCMW',
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
      <body className={`${FontITC.variable}`}>
       {children}
      </body>
    </html>
  )
}