import { constructMetadata } from '@/lib/seo'
import ContactClient from './ContactClient'

export const metadata = constructMetadata({
  title: 'Contact Us | Get a Free Cleaning Quote Brisbane',
  description: 'Get in touch with Auswide Cleaners for a free house, office, or bond cleaning quote in Brisbane. Rapid response within 2 hours.',
  canonicalPath: '/contact',
})

export default function ContactPage() {
  return <ContactClient />
}
