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
    default: 'Auswide Cleaning | Professional Cleaning Services Brisbane',
    template: '%s | Auswide Cleaning',
  },
  description:
    'Auswide Cleaning offers professional residential, commercial, office, end-of-lease, carpet, and deep cleaning services in Brisbane. Fully insured, police-checked cleaners. Free quotes.',
  keywords: [
    'cleaning services Brisbane',
    'residential cleaning',
    'commercial cleaning',
    'office cleaning',
    'end of lease cleaning',
    'carpet cleaning',
    'deep cleaning',
    'professional cleaners',
  ],
  authors: [{ name: 'Auswide Cleaning' }],
  creator: 'Auswide Cleaning',
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: '/',
    siteName: 'Auswide Cleaning',
    title: 'Auswide Cleaning | Professional Cleaning Services Brisbane',
    description:
      'Premium professional cleaning services for homes, offices, and commercial spaces in Brisbane. Trusted, insured, and guaranteed.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Auswide Cleaning - Professional Cleaning Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Auswide Cleaning | Professional Cleaning Services',
    description: 'Premium professional cleaning services in Brisbane.',
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
  '@id': 'https://auswidecleaning.com.au',
  name: 'Auswide Cleaning',
  description:
    'Professional cleaning services for residential, commercial, office, end-of-lease, carpet, and deep cleaning in Brisbane.',
  url: 'https://auswidecleaning.com.au',
  telephone: '+61452419301',
  email: 'auswide71@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Brisbane',
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
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '07:00',
      closes: '19:00',
    },
  ],
  priceRange: '$$',
  areaServed: {
    '@type': 'City',
    name: 'Brisbane',
  },
  hasMap: 'https://maps.google.com/?q=Brisbane+QLD',
  image: 'https://auswidecleaning.com.au/og-image.jpg',
  sameAs: [
    'https://facebook.com/auswidecleaning',
    'https://instagram.com/auswidecleaning',
    'https://linkedin.com/company/auswidecleaning',
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
