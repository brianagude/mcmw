import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "@/styles/main.scss"

const dmSans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dmSans',
})

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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={dmSans.className}>{children}</body>
    </html>
  );
}
