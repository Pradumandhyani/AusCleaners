import type { Metadata } from 'next'
import HeroSection from '@/components/sections/HeroSection'
import WhyChooseUs from '@/components/sections/WhyChooseUs'
import ServicesGrid from '@/components/sections/ServicesGrid'
import OurProcess from '@/components/sections/OurProcess'
import Testimonials from '@/components/sections/Testimonials'
import FAQPreview from '@/components/sections/FAQPreview'
import ContactSection from '@/components/sections/ContactSection'
import CTABanner from '@/components/sections/CTABanner'

export const metadata: Metadata = {
  title: 'Auswide Cleaning | Professional Cleaning Services Brisbane',
  description:
    'Brisbane\'s most trusted professional cleaning company. Residential, commercial, office, end-of-lease, carpet & deep cleaning. Fully insured, police-checked. Free quotes.',
  alternates: {
    canonical: '/',
  },
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhyChooseUs />
      <ServicesGrid />
      <OurProcess />
      <Testimonials />
      <FAQPreview />
      <ContactSection />
      <CTABanner />
    </>
  )
}
