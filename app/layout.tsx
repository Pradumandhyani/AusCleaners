import type { Metadata } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import { Toaster } from '@/components/ui/sonner'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { GoogleAnalytics } from '@next/third-parties/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://auswidecleaners.com'),
  title: {
    default: 'Professional House & Commercial Cleaning Services | Auswide Cleaners',
    template: '%s | Auswide Cleaners',
  },
  description:
    'Professional house cleaning, office cleaning, bond cleaning and commercial cleaning services across Brisbane. Get a free quote today.',
  keywords: [
    'cleaning services Brisbane',
    'house cleaning Brisbane',
    'office cleaning Brisbane',
    'bond cleaning Brisbane',
    'end of lease cleaning Brisbane',
    'commercial cleaning Brisbane',
    'carpet cleaning Brisbane',
    'deep cleaning Brisbane',
    'professional cleaners Brisbane',
  ],
  authors: [{ name: 'Auswide Cleaners' }],
  creator: 'Auswide Cleaners',
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: 'https://auswidecleaners.com',
    siteName: 'Auswide Cleaners',
    title: 'Professional House & Commercial Cleaning Services | Auswide Cleaners',
    description:
      'Professional house cleaning, office cleaning, bond cleaning and commercial cleaning services across Brisbane. Get a free quote today.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Auswide Cleaners - Professional Cleaning Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional House & Commercial Cleaning Services | Auswide Cleaners',
    description: 'Professional house cleaning, office cleaning, bond cleaning and commercial cleaning services across Brisbane.',
    images: ['/og-image.png'],
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
  verification: {
    google: 'your-google-verification-code',
  },
  category: 'cleaning services',
  referrer: 'origin-when-cross-origin',
  other: {
    'theme-color': '#1E88E5',
  },
}

// HouseCleaningService JSON-LD Structured Data
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'HouseCleaningService'],
  '@id': 'https://auswidecleaners.com/#service',
  name: 'Auswide Cleaners',
  description:
    'Professional house cleaning, office cleaning, bond cleaning and commercial cleaning services across Brisbane. Get a free quote today.',
  url: 'https://auswidecleaners.com',
  logo: 'https://auswidecleaners.com/og-image.png',
  image: 'https://auswidecleaners.com/og-image.png',
  telephone: '+61436969438',
  email: 'info@auswidecleaners.com',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Brisbane Suburbs',
    addressLocality: 'Brisbane',
    addressRegion: 'QLD',
    postalCode: '4000',
    addressCountry: 'AU',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -27.4698,
    longitude: 153.0251,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '07:00',
      closes: '19:00',
    },
  ],
  areaServed: [
    {
      '@type': 'City',
      name: 'Brisbane',
    },
  ],
  hasMap: 'https://maps.google.com/?q=Brisbane+QLD',
  sameAs: [
    'https://facebook.com/auswidecleaners',
    'https://instagram.com/auswidecleaners',
    'https://linkedin.com/company/auswidecleaners',
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '248',
    bestRating: '5',
    worstRating: '1',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-AU" suppressHydrationWarning>
      <head>
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${plusJakartaSans.variable} font-sans antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Toaster position="top-right" richColors />
        <GoogleAnalytics gaId="G-4XFKWNM78E" />
      </body>
    </html>
  )
}
