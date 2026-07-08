import { Metadata } from 'next'

interface MetadataProps {
  title: string
  description: string
  canonicalPath?: string
  keywords?: string | string[]
  ogImage?: string
  noIndex?: boolean
}

export function constructMetadata({
  title,
  description,
  canonicalPath = '',
  keywords = [],
  ogImage = '/og-image.png',
  noIndex = false,
}: MetadataProps): Metadata {
  const siteUrl = 'https://auswidecleaners.com'
  const cleanPath = canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`
  const canonicalUrl = `${siteUrl}${cleanPath === '/' ? '' : cleanPath}`
  
  const formattedKeywords = Array.isArray(keywords) 
    ? keywords.join(', ') 
    : keywords

  const baseKeywords = [
    'cleaning services Brisbane',
    'house cleaning Brisbane',
    'professional cleaners',
    'office cleaning Brisbane',
    'bond cleaning Brisbane',
    'commercial cleaning',
    'carpet cleaning Brisbane',
    'deep cleaning Brisbane',
  ]

  const finalKeywords = formattedKeywords 
    ? `${formattedKeywords}, ${baseKeywords.join(', ')}`
    : baseKeywords.join(', ')

  return {
    title,
    description,
    keywords: finalKeywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: 'website',
      locale: 'en_AU',
      url: canonicalUrl,
      siteName: 'Auswide Cleaners',
      title,
      description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}
