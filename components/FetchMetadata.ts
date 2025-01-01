import { client } from '../sanity/client'; // Import the existing client
import { Metadata } from 'next';

export async function fetchMetadata(): Promise<Metadata> {
  const settings = await client.fetch(`*[_type == "settings"][0]{
    metaTitle,
    metaDescription,
    metaImage {
      asset-> {
        url
      }
    }
  }`);

  console.log(settings)

  return {
    metadataBase: new URL('https://www.mcmw.global'),
    alternates: {
      canonical: '/',
      languages: { 'en-US': '/en-US' },
    },
    title: settings?.metaTitle || 'MCMW',
    description: settings?.metaDescription || 'MILK & COOKIES MUSIC WEEK 2024',
    icons: { icon: '/favicon.ico' },
    openGraph: {
      title: settings?.metaTitle || 'MCMW',
      description: settings?.metaDescription || 'MILK & COOKIES MUSIC WEEK 2024',
      url: '<https://www.mcmw.global>',
      siteName: 'MCMW',
      images: [
        settings?.metaImage?.asset?.url ? { url: settings.metaImage.asset.url, width: 1200, height: 600 } : { url: '/card.jpg', width: 1200, height: 600 },
      ],
    },
  };
}