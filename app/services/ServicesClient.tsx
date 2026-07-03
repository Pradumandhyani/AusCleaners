'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  Home, Building2, Briefcase, KeyRound, Layers, Sparkles,
  CheckCircle, ArrowRight, Phone,
} from 'lucide-react'
import { SERVICES, COMPANY } from '@/lib/constants'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Home, Building2, Briefcase, KeyRound, Layers, Sparkles,
}

const gradients = [
  'from-blue-500 to-blue-600',
  'from-emerald-500 to-green-600',
  'from-violet-500 to-purple-600',
  'from-amber-500 to-orange-500',
  'from-rose-500 to-pink-600',
  'from-cyan-500 to-blue-500',
]

export default function ServicesClient() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-28 px-4 overflow-hidden gradient-hero">
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '32px 32px' }}
        />
        <div className="relative max-w-3xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl font-bold text-white mb-5"
            style={{ fontFamily: 'var(--font-plus-jakarta)' }}
          >
            Professional{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-green-300">
              Cleaning Services
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-blue-100 text-lg"
          >
            Expert cleaning solutions for every space. From cosy homes to large commercial
            properties — we&apos;ve got you covered.
          </motion.p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" className="w-full">
            <path d="M0 60L1440 60L1440 30C1440 30 1200 0 720 0C240 0 0 30 0 30L0 60Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Services detail */}
      <section className="section-padding bg-white">
        <div className="container-max space-y-16">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon] || Sparkles
            const gradient = gradients[index % gradients.length]
            const isEven = index % 2 === 0

            return (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}
              >
                {/* Content */}
                <div className={isEven ? '' : 'lg:order-2'}>
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-6 shadow-xl`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900" style={{ fontFamily: 'var(--font-plus-jakarta)' }}>
                      {service.title}
                    </h2>
                    {service.price && (
                      <span className="text-sm font-semibold text-[#1E88E5] bg-blue-50 px-3 py-1 rounded-full">
                        {service.price}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">{service.description}</p>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5 text-gray-700 text-sm">
                        <CheckCircle className="h-4 w-4 text-[#43A047] shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="flex gap-4">
                    <Link
                      href="/contact#enquiry-form"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#1E88E5] to-[#1565C0] text-white font-semibold shadow-lg shadow-blue-200 hover:scale-105 transition-all duration-300"
                    >
                      Get Quote <ArrowRight className="h-4 w-4" />
                    </Link>
                    <a
                      href={`tel:${COMPANY.phone}`}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-gray-200 text-gray-700 font-semibold hover:border-[#1E88E5] hover:text-[#1E88E5] transition-all"
                    >
                      <Phone className="h-4 w-4" /> Call Us
                    </a>
                  </div>
                </div>

                {/* Visual card */}
                <div className={isEven ? 'lg:order-2' : 'lg:order-1'}>
                  <div className={`rounded-3xl p-10 bg-gradient-to-br ${gradient} text-white min-h-60 flex items-center justify-center relative overflow-hidden`}>
                    <div className="absolute inset-0 opacity-20"
                      style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)', backgroundSize: '24px 24px' }}
                    />
                    <div className="relative text-center">
                      <Icon className="h-24 w-24 mx-auto mb-4 opacity-80" />
                      <div className="text-2xl font-bold">{service.title}</div>
                      {service.price && (
                        <div className="mt-2 text-lg font-semibold opacity-90">{service.price}</div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'var(--font-plus-jakarta)' }}>
            Not sure which service you need?
          </h2>
          <p className="text-gray-500 text-lg mb-8">
            Contact us and we&apos;ll recommend the perfect cleaning solution for your specific needs.
          </p>
          <Link href="/contact#enquiry-form" className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#1E88E5] to-[#1565C0] text-white font-bold text-lg shadow-xl shadow-blue-200 hover:scale-105 transition-all duration-300">
            Get Free Consultation <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
