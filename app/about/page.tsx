import { constructMetadata } from '@/lib/seo'
import AboutClient from './AboutClient'

export const metadata = constructMetadata({
  title: 'About Us | Professional Cleaners Brisbane',
  description: 'Learn about Auswide Cleaners — Brisbane’s trusted professional cleaning company. Our story, values, team, and commitment to quality.',
  canonicalPath: '/about',
})

export default function AboutPage() {
  return <AboutClient />
}
