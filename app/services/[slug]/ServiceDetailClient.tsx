'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  CheckCircle, 
  Phone, 
  ArrowRight, 
  Shield, 
  Star, 
  MapPin, 
  Calendar, 
  HelpCircle, 
  Leaf, 
  UserCheck, 
  Sparkles, 
  Moon, 
  ClipboardList, 
  Flame, 
  Square, 
  Layers, 
  Plus, 
  ChevronRight, 
  ChevronDown,
  Quote,
  Building2,
  TrendingUp,
  FileCheck,
  Package,
  Grid,
  Lightbulb,
  MoveRight,
  Wind,
  Sofa,
  Sun
} from 'lucide-react'
import { SERVICES, COMPANY } from '@/lib/constants'
import { LocalServiceData } from '@/lib/services-seo'
import ContactForm from '@/components/contact/ContactForm'

// Map string icon names to Lucide icon components
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Calendar,
  Leaf,
  Shield,
  UserCheck,
  Star,
  Sparkles,
  Moon,
  ClipboardList,
  Flame,
  Square,
  Layers,
  Plus,
  Building2,
  TrendingUp,
  FileCheck,
  Package,
  Grid,
  Lightbulb,
  MoveRight,
  Wind,
  Sofa,
  Sun
}

export default function ServiceDetailClient({ data }: { data: LocalServiceData }) {
  const baseService = SERVICES.find((s) => s.id === data.serviceId)
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)

  // Suburb lists divided into columns
  const midPoint = Math.ceil(data.suburbs.length / 2)
  const leftColSuburbs = data.suburbs.slice(0, midPoint)
  const rightColSuburbs = data.suburbs.slice(midPoint)

  // Local Page Schema (Service + FAQPage)
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

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': data.faqs.map((faq) => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer
      }
    }))
  }

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index)
  }

  return (
    <div>
      {/* Dynamic JSON-LD Schema injections */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <section className="relative py-24 sm:py-32 px-4 overflow-hidden gradient-hero">
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: 'radial-gradient(circle, #html 1px, transparent 1px)', backgroundSize: '32px 32px' }}
        />
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-blue-200 text-xs sm:text-sm font-semibold backdrop-blur-sm">
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

      {/* Trust Badges Strip */}
      <section className="bg-white border-b border-gray-100 py-6">
        <div className="container-max">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="flex flex-col items-center p-2">
              <Shield className="h-6 w-6 text-[#1E88E5] mb-2" />
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Fully Insured</span>
              <span className="text-sm font-bold text-gray-800 mt-0.5">$20M Public Liability</span>
            </div>
            <div className="flex flex-col items-center p-2">
              <UserCheck className="h-6 w-6 text-[#43A047] mb-2" />
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Trusted Staff</span>
              <span className="text-sm font-bold text-gray-800 mt-0.5">Police Checked Cleaners</span>
            </div>
            <div className="flex flex-col items-center p-2">
              <Star className="h-6 w-6 text-amber-500 mb-2" />
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Highly Rated</span>
              <span className="text-sm font-bold text-gray-800 mt-0.5">4.9★ Average Rating</span>
            </div>
            <div className="flex flex-col items-center p-2">
              <Calendar className="h-6 w-6 text-purple-500 mb-2" />
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Satisfaction</span>
              <span className="text-sm font-bold text-gray-800 mt-0.5">100% Work Guarantee</span>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb Navigation */}
      <nav className="bg-gray-50 py-3 border-b border-gray-100" aria-label="Breadcrumb">
        <div className="container-max text-xs sm:text-sm text-gray-500 flex items-center gap-1.5 sm:gap-2 px-4">
          <Link href="/" className="hover:text-[#1E88E5] transition-colors">Home</Link>
          <ChevronRight className="h-3.5 w-3.5 text-gray-400" />
          <Link href="/services" className="hover:text-[#1E88E5] transition-colors">Services</Link>
          <ChevronRight className="h-3.5 w-3.5 text-gray-400" />
          <span className="text-gray-800 font-medium truncate">{data.title}</span>
        </div>
      </nav>

      {/* Overview & Quote Sidebar Section */}
      <section className="py-16 px-4 bg-white" id="overview">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'var(--font-plus-jakarta)' }}>
                  Brisbane Service Overview
                </h2>
                <div className="space-y-4 text-gray-600 text-base sm:text-lg leading-relaxed">
                  {data.longDescription.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </div>

              {/* Why Choose Bullet Cards */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900" style={{ fontFamily: 'var(--font-plus-jakarta)' }}>
                  Why Choose Us for {data.title}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {data.whyChooseUs.map((point, i) => (
                    <div key={i} className="flex gap-3 items-start p-4 rounded-xl border border-gray-100 bg-gray-50">
                      <CheckCircle className="h-5 w-5 text-[#43A047] shrink-0 mt-0.5" />
                      <span className="text-sm font-medium text-gray-700 leading-snug">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sidebar — Sticky Quote Form */}
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

      {/* What's Included checklist grid */}
      <section className="py-16 px-4 bg-gray-50 border-t border-b border-gray-100">
        <div className="container-max">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'var(--font-plus-jakarta)' }}>
              What is Included in Our Standard Checklist
            </h2>
            <p className="text-gray-500 text-sm">
              We clean systematically according to our proven checklist. You can also customize your checklist based on specific priorities.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {baseService?.features.map((feature, i) => (
              <div key={i} className="bg-white p-5 rounded-2xl border border-gray-100 card-shadow-sm flex gap-3.5 items-start">
                <div className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center shrink-0">
                  <CheckCircle className="h-4.5 w-4.5 text-[#43A047]" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 text-sm leading-snug">{feature}</h4>
                  <p className="text-gray-400 text-xs mt-1">Done to premium commercial grade standards.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits cards grid */}
      <section className="py-16 px-4 bg-white">
        <div className="container-max">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'var(--font-plus-jakarta)' }}>
              Key Benefits of Our {data.title}
            </h2>
            <p className="text-gray-500 text-sm">
              Enjoy premium cleaning standards backed by professional equipment and client-focused terms.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.benefits.map((benefit, i) => {
              const Icon = iconMap[benefit.icon] || Sparkles
              return (
                <div key={i} className="p-6 rounded-2xl border border-gray-100 card-shadow hover:card-shadow-hover transition-all duration-300 flex flex-col items-start">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4 text-[#1E88E5]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-base mb-2">{benefit.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Cleaning process steps timeline */}
      <section className="py-16 px-4 bg-gray-50 border-t border-b border-gray-100">
        <div className="container-max">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'var(--font-plus-jakarta)' }}>
              Our 4-Step Cleaning Process
            </h2>
            <p className="text-gray-500 text-sm">
              We make the cleaning experience smooth, reliable, and predictable from quote to final quality sign-off.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {data.processSteps.map((step, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 card-shadow-sm flex flex-col items-center text-center relative">
                <span className="absolute -top-4 left-6 text-xs font-bold tracking-widest text-[#1E88E5] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                  STEP {step.step}
                </span>
                <h4 className="font-bold text-gray-900 text-base mt-2 mb-3">{step.title}</h4>
                <p className="text-gray-500 text-xs leading-relaxed">{step.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas we serve suburb tags grid */}
      <section className="py-16 px-4 bg-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 text-center" style={{ fontFamily: 'var(--font-plus-jakarta)' }}>
              Service Suburbs in Brisbane
            </h2>
            <p className="text-gray-500 text-sm text-center mb-8">
              We serve all Brisbane locations with fully equipped local cleaning crews.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {data.suburbs.map((suburb) => (
                <div key={suburb} className="flex items-center gap-2 p-3 rounded-xl bg-gray-50 border border-gray-100 text-gray-700 text-sm font-medium hover:border-blue-100 hover:bg-blue-50/30 transition-all duration-200">
                  <MapPin className="h-4 w-4 text-[#1E88E5] shrink-0" />
                  <span className="truncate">{suburb}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Local Customer Testimonials */}
      <section className="py-16 px-4 bg-gray-50 border-t border-b border-gray-100">
        <div className="container-max">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'var(--font-plus-jakarta)' }}>
              Brisbane Client Reviews
            </h2>
            <p className="text-gray-500 text-sm">
              Read real feedback from clients in your local Brisbane neighborhood.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {data.testimonials.map((test, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 card-shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex gap-0.5 text-amber-500 mb-4">
                    {[...Array(test.rating)].map((_, idx) => (
                      <Star key={idx} className="h-4 w-4 fill-amber-500" />
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed italic mb-6">
                    &ldquo;{test.text}&rdquo;
                  </p>
                </div>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-50">
                  <div className="w-10 h-10 rounded-full bg-blue-50 text-[#1E88E5] flex items-center justify-center font-bold text-sm shrink-0">
                    {test.name[0]}
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-800 text-sm">{test.name}</h5>
                    <span className="text-gray-400 text-xs flex items-center gap-1 mt-0.5">
                      <MapPin className="h-3 w-3" /> {test.suburb}, Brisbane
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accordion FAQ Section */}
      <section className="py-16 px-4 bg-white" id="faq">
        <div className="container-max max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'var(--font-plus-jakarta)' }}>
              Frequently Asked Questions
            </h2>
            <p className="text-gray-500 text-sm">
              Everything you need to know about booking our professional service.
            </p>
          </div>
          <div className="space-y-4">
            {data.faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index
              return (
                <div key={index} className="border border-gray-100 rounded-2xl overflow-hidden card-shadow-sm">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-gray-50/50 transition-colors font-bold text-gray-900 text-base"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown className={`h-5 w-5 text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#1E88E5]' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="p-5 bg-gray-50/30 text-gray-600 text-sm leading-relaxed border-t border-gray-100">
                      {faq.answer}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Internal links to related services */}
      <section className="py-12 bg-gray-50 border-t border-b border-gray-100">
        <div className="container-max text-center">
          <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-6">Related Services</h4>
          <div className="flex flex-wrap justify-center gap-4">
            {data.relatedServices.map((rel) => (
              <Link
                key={rel.slug}
                href={`/services/${rel.slug}`}
                className="px-5 py-2.5 rounded-xl bg-white border border-gray-100 text-gray-700 text-sm font-semibold hover:border-blue-200 hover:text-[#1E88E5] transition-all card-shadow-sm"
              >
                {rel.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final Action Banner */}
      <section className="relative py-16 px-4 bg-gradient-to-r from-[#1E88E5] to-[#1565C0] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle, #html 1px, transparent 1px)', backgroundSize: '24px 24px' }}
        />
        <div className="relative max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-2xl sm:text-4xl font-bold" style={{ fontFamily: 'var(--font-plus-jakarta)' }}>
            Ready to book your {data.title}?
          </h2>
          <p className="text-blue-100 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Get your free, no-obligation cleaning estimate in under 2 hours. Fully customisable checklists, eco-friendly products, and fully guaranteed outcomes.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <a
              href="#quote-form-section"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-[#1E88E5] font-bold text-sm shadow-xl hover:scale-105 transition-all duration-300"
            >
              Book Service Now <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={`tel:${COMPANY.phone}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/20 text-white font-semibold text-sm hover:bg-white/10 transition-all duration-300"
            >
              <Phone className="h-4 w-4" /> Call {COMPANY.phone}
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}

