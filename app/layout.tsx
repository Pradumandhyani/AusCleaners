import type { Metadata } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import { Toaster } from '@/components/ui/sonner'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: {
    default: 'SparkleClean Pro | Professional Cleaning Services Melbourne',
    template: '%s | SparkleClean Pro',
  },
  description:
    'SparkleClean Pro offers professional residential, commercial, office, end-of-lease, carpet, and deep cleaning services in Melbourne. Fully insured, police-checked cleaners. Free quotes.',
  keywords: [
    'cleaning services Melbourne',
    'residential cleaning',
    'commercial cleaning',
    'office cleaning',
    'end of lease cleaning',
    'carpet cleaning',
    'deep cleaning',
    'professional cleaners',
  ],
  authors: [{ name: 'SparkleClean Pro' }],
  creator: 'SparkleClean Pro',
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: '/',
    siteName: 'SparkleClean Pro',
    title: 'SparkleClean Pro | Professional Cleaning Services Melbourne',
    description:
      'Premium professional cleaning services for homes, offices, and commercial spaces in Melbourne. Trusted, insured, and guaranteed.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SparkleClean Pro - Professional Cleaning Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SparkleClean Pro | Professional Cleaning Services',
    description: 'Premium professional cleaning services in Melbourne.',
    images: ['/og-image.jpg'],
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
}

// LocalBusiness JSON-LD Structured Data
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://sparklecleanpro.com.au',
  name: 'SparkleClean Pro',
  description:
    'Professional cleaning services for residential, commercial, office, end-of-lease, carpet, and deep cleaning in Melbourne.',
  url: 'https://sparklecleanpro.com.au',
  telephone: '+61280000000',
  email: 'info@sparklecleanpro.com.au',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '123 Collins Street',
    addressLocality: 'Melbourne',
    addressRegion: 'VIC',
    postalCode: '3000',
    addressCountry: 'AU',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -37.8136,
    longitude: 144.9631,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '07:00',
      closes: '19:00',
    },
  ],
  priceRange: '$$',
  areaServed: {
    '@type': 'City',
    name: 'Melbourne',
  },
  hasMap: 'https://maps.google.com/?q=123+Collins+Street+Melbourne',
  image: 'https://sparklecleanpro.com.au/og-image.jpg',
  sameAs: [
    'https://facebook.com/sparklecleanpro',
    'https://instagram.com/sparklecleanpro',
    'https://linkedin.com/company/sparklecleanpro',
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
    <html lang="en" suppressHydrationWarning>
      <head>
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
      </body>
    </html>
  )
}
