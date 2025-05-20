import type { Metadata } from 'next'
import { FontITC } from '@/fonts/FontUtils'
import "@/styles/main.scss"
import { fetchMetadata } from '@/components/FetchMetadata'
import { GoogleAnalytics } from '@next/third-parties/google'

// META STUFF
export const metadata: Metadata = await fetchMetadata();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={`${FontITC.variable}`}>
       {children}
       <GoogleAnalytics gaId="G-Q0MQPRB730" />
      </body>
    </html>
  )
}