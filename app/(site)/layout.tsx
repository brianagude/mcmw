import type { Metadata } from 'next'
import { FontITC } from '@/fonts/FontUtils'
import { groq } from "next-sanity"
import { client } from "@/sanity/client"
import { SiteHeader } from "@/components/Header"
import { SiteFooter } from "@/components/Footer"
import "@/styles/main.scss"

// META STUFF
export const metadata: Metadata = {
  metadataBase: new URL('https://www.dianthe.studio'),
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
    url: '<https://www.dianthe.studio>',
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

const query = groq`
  *[_type == "settings"][0]{
    "headerLogo": headerLogo.asset._ref,
    "footerLogo": footerLogo.asset._ref,
    finePrint,
    footer
  }
`

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const settings = await client.fetch(query);
  return (
    <html lang="en">
      <body className={`${FontITC.variable}`}>
        <SiteHeader logo={settings.headerLogo}/>
       {children}
        <SiteFooter settings={settings}/>
      </body>
    </html>
  )
}