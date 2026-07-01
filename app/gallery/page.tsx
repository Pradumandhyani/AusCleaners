import type { Metadata } from 'next'
import GalleryClient from './GalleryClient'

export const metadata: Metadata = {
  title: 'Gallery',
  description:
    'See our professional cleaning results. Before and after photos of residential, commercial, carpet, and end-of-lease cleaning by Auswide cleaning Melbourne.',
  alternates: { canonical: '/gallery' },
}

export default function GalleryPage() {
  return <GalleryClient />
}
