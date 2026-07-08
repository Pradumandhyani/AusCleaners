import { constructMetadata } from '@/lib/seo'
import FAQClient from './FAQClient'

export const metadata = constructMetadata({
  title: 'FAQ | Cleaning Services Q&A Brisbane',
  description: 'Find answers to frequently asked questions about bookings, pricing, eco-products, public liability insurance, and satisfaction guarantees with Auswide Cleaners.',
  canonicalPath: '/faq',
})

export default function FAQPage() {
  return <FAQClient />
}
