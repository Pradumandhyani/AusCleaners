import type { Metadata } from 'next'
import FAQClient from './FAQClient'

export const metadata: Metadata = {
  title: 'FAQ',
  description:
    'Frequently asked questions about Auswide Cleaning services. Get answers about bookings, pricing, insurance, products, and guarantees.',
  alternates: { canonical: '/faq' },
}

export default function FAQPage() {
  return <FAQClient />
}
