'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { CheckCircle, Phone, ArrowRight, Shield, Star, MapPin, Calendar, HelpCircle } from 'lucide-react'
import { SERVICES, COMPANY } from '@/lib/constants'
import { LocalServiceData } from '@/lib/services-seo'
import ContactForm from '@/components/contact/ContactForm'

export default function ServiceDetailClient({ data }: { data: LocalServiceData }) {
  const baseService = SERVICES.find((s) => s.id === data.serviceId)

  // Suburb lists divided into columns
  const midPoint = Math.ceil(data.suburbs.length / 2)
  const leftColSuburbs = data.suburbs.slice(0, midPoint)
  const rightColSuburbs = data.suburbs.slice(midPoint)

  // Local Page Schema
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `https://auswidecleaners.com/services/${data.slug}#service`,
    name: data.title,
    description: data.seoDescription,
    provider: {
      '@type': 'HouseCleaningService',
      name: COMPANY.name,
      telephone: COMPANY.phone,
      email: COMPANY.email,
      url: 'https://auswidecleaners.com',
      logo: 'https://auswidecleaners.com/og-image.png',
      image: 'https://auswidecleaners.com/og-image.png',
      priceRange: '$$',
    },
    areaServed: data.suburbs.map((suburb) => ({
      '@type': 'AdministrativeArea',
      name: suburb,
    })),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Cleaning Services',
      itemListElement: baseService?.features.map((feature, i) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: feature,
        },
      })),
    },
  }

  return (
    <div>
      {/* Dynamic JSON-LD injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Hero Section */}
      <section className="relative py-28 px-4 overflow-hidden gradient-hero">
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '32px 32px' }}
        />
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-white/10 text-blue-200 text-xs sm:text-sm font-semibold backdrop-blur-sm">
              📍 {data.primaryKeyword}
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-bold text-white mb-6 leading-tight"
            style={{ fontFamily: 'var(--font-plus-jakarta)' }}
          >
            {data.headline}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-blue-100 text-base sm:text-lg max-w-2xl mx-auto mb-8"
          >
            {data.subheadline}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a
              href="#quote-form-section"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-[#1E88E5] font-bold text-sm sm:text-base shadow-xl hover:scale-105 transition-all duration-300"
            >
              Get Free Quote <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={`tel:${COMPANY.phone}`}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-white/30 text-white font-semibold text-sm sm:text-base backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
            >
              <Phone className="h-4 w-4" /> Call {COMPANY.phone}
            </a>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" className="w-full">
            <path d="M0 60L1440 60L1440 30C1440 30 1200 0 720 0C240 0 0 30 0 30L0 60Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Main Details Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'var(--font-plus-jakarta)' }}>
                  Brisbane Service Overview
                </h2>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                  {data.introText} We understand that every property has unique demands. That is why we structure our checklist around your specific property requirements, using professional products and techniques to deliver a pristine workspace or home.
                </p>
              </div>

              {/* Service Features checklist */}
              <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-100">
                <h3 className="font-bold text-gray-900 text-lg mb-5 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#43A047]" />
                  What is included in this service:
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {baseService?.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-gray-700 text-sm">
                      <CheckCircle className="h-4 w-4 text-[#43A047] shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Service Suburbs */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-[#1E88E5]" />
                  Suburbs We Serve in Brisbane:
                </h3>
                <p className="text-gray-500 text-sm mb-6">
                  We cover all Brisbane regions and surrounding suburbs, including:
                </p>
                <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                  <ul className="space-y-1.5">
                    {leftColSuburbs.map((suburb) => (
                      <li key={suburb} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                        {suburb}
                      </li>
                    ))}
                  </ul>
                  <ul className="space-y-1.5">
                    {rightColSuburbs.map((suburb) => (
                      <li key={suburb} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                        {suburb}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Link back to overall services list */}
              <div className="pt-4">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 text-[#1E88E5] font-semibold text-sm hover:underline"
                >
                  ← View all services lists
                </Link>
              </div>
            </div>

            {/* Right sidebar — Quote Form */}
            <div className="lg:col-span-5" id="quote-form-section">
              <div className="sticky top-28 bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 card-shadow">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1.5" style={{ fontFamily: 'var(--font-plus-jakarta)' }}>
                    Get An Instant Free Quote
                  </h3>
                  <p className="text-gray-500 text-xs">
                    Fill out the form below. We will reply within 2 business hours.
                  </p>
                </div>
                <ContactForm variant="compact" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Localized FAQ Section */}
      <section className="py-16 px-4 bg-gray-50 border-t border-b border-gray-100">
        <div className="container-max max-w-3xl">
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1 rounded-full bg-blue-50 text-[#1E88E5] text-xs font-semibold mb-3">
              FAQ
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900" style={{ fontFamily: 'var(--font-plus-jakarta)' }}>
              Service FAQs
            </h2>
          </div>
          <div className="space-y-6">
            {data.faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 card-shadow-sm">
                <h4 className="font-bold text-gray-900 text-base mb-2 flex items-start gap-2.5">
                  <HelpCircle className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
                  {faq.question}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed pl-7">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
