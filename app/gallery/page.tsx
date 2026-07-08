import { constructMetadata } from '@/lib/seo'
import GalleryClient from './GalleryClient'

export const metadata = constructMetadata({
  title: 'Gallery & Before/After Results | Auswide Cleaners Brisbane',
  description: 'View photos of our professional house cleaning, commercial cleaning, steam carpet washing, and vacate cleans in Brisbane.',
  canonicalPath: '/gallery',
})

export default function GalleryPage() {
  return <GalleryClient />
}
