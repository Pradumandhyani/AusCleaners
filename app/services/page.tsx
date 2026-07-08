import { constructMetadata } from '@/lib/seo'
import ServicesClient from './ServicesClient'

export const metadata = constructMetadata({
  title: 'Our Cleaning Services | Auswide Cleaners Brisbane',
  description: 'Explore our range of professional cleaning services in Brisbane: residential cleans, office hygiene, end-of-lease vacate cleans, deep spring cleans, and carpet washing.',
  canonicalPath: '/services',
})

export default function ServicesPage() {
  return <ServicesClient />
}
