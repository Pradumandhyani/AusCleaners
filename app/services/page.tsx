import type { Metadata } from 'next'
import ServicesClient from './ServicesClient'

export const metadata: Metadata = {
  title: 'Our Services',
  description:
    'Professional cleaning services: residential, commercial, office, end-of-lease, carpet & deep cleaning. Fully insured Brisbane cleaners with free quotes.',
  alternates: { canonical: '/services' },
}

export default function ServicesPage() {
  return <ServicesClient />
}
