import type { Metadata } from 'next';

export const siteConfig = {
  name: 'VetCare Clinic',
  description: 'Professional veterinary care for your beloved pets. Experienced vets, modern facilities, and compassionate service.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  ogImage: '/og-image.jpg',
  keywords: [
    'veterinary',
    'pet care',
    'animal clinic',
    'vet services',
    'pet health',
    'animal hospital',
    'pet grooming',
    'vaccination',
  ] as string[],
  author: 'VetCare Team',
  locale: 'id-ID',
} as const;

export function generateMetadata(): Metadata {
  return {
    title: {
      default: siteConfig.name,
      template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    keywords: siteConfig.keywords,
    authors: [{ name: siteConfig.author }],
    creator: siteConfig.author,
    openGraph: {
      type: 'website',
      locale: siteConfig.locale,
      url: siteConfig.url,
      title: siteConfig.name,
      description: siteConfig.description,
      siteName: siteConfig.name,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: siteConfig.name,
      description: siteConfig.description,
      images: [siteConfig.ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}
