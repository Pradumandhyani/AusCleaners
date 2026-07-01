import type { Metadata } from 'next'
import { Metadata as NextMetadata } from 'next'
import AboutClient from './AboutClient'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Auswide cleaning — Melbourne\'s trusted professional cleaning company. Our story, values, team, and commitment to quality.',
  alternates: { canonical: '/about' },
}

export default function AboutPage() {
  return <AboutClient />
}
