import { constructMetadata } from '@/lib/seo'
import HeroSection from '@/components/sections/HeroSection'
import WhyChooseUs from '@/components/sections/WhyChooseUs'
import ServicesGrid from '@/components/sections/ServicesGrid'
import OurProcess from '@/components/sections/OurProcess'
import Testimonials from '@/components/sections/Testimonials'
import FAQPreview from '@/components/sections/FAQPreview'
import ContactSection from '@/components/sections/ContactSection'
import CTABanner from '@/components/sections/CTABanner'

export const metadata = constructMetadata({
  title: 'Professional House & Commercial Cleaning Services | Auswide Cleaners',
  description: 'Professional house cleaning, office cleaning, bond cleaning and commercial cleaning services across Brisbane. Get a free quote today.',
  canonicalPath: '/',
})

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
