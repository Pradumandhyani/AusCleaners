import type { Metadata } from 'next'
import ContactClient from './ContactClient'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Contact Auswide Cleaning for a free cleaning quote. Call us, email us, or fill in our enquiry form. We respond within 2 hours.',
  alternates: { canonical: '/contact' },
}

export default function ContactPage() {
  return <ContactClient />
}
