'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { COMPANY } from '@/lib/constants'
import ContactForm from '@/components/contact/ContactForm'

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: COMPANY.phone,
    sub: 'Mon–Sat, 7am–7pm',
    href: `tel:${COMPANY.phone}`,
    gradient: 'from-blue-500 to-blue-600',
  },
  {
    icon: Mail,
    label: 'Email',
    value: COMPANY.email,
    sub: 'We reply within 2 hours',
    href: `mailto:${COMPANY.email}`,
    gradient: 'from-green-500 to-emerald-600',
  },
  {
    icon: MapPin,
    label: 'Address',
    value: COMPANY.address,
    sub: 'Serving all Brisbane suburbs',
    gradient: 'from-purple-500 to-violet-600',
  },
  {
    icon: Clock,
    label: 'Hours',
    value: COMPANY.hours,
    sub: 'Same-day service available',
    gradient: 'from-amber-500 to-orange-500',
  },
]

export default function ContactClient() {
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
            Get In{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-green-300">
              Touch
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-blue-100 text-lg"
          >
            Request a free quote, ask a question, or book your cleaning service today.
            We respond within 2 hours.
          </motion.p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" className="w-full">
            <path d="M0 60L1440 60L1440 30C1440 30 1200 0 720 0C240 0 0 30 0 30L0 60Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Contact info cards */}
      <section className="py-12 px-4 bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {contactInfo.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="p-6 rounded-2xl border border-gray-100 card-shadow hover:card-shadow-hover transition-all duration-300 text-center group"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="h-6 w-6 text-white" />
                </div>
                <div className="font-semibold text-gray-500 text-xs uppercase tracking-wide mb-1">{item.label}</div>
                {item.href ? (
                  <a href={item.href} className="block font-semibold text-gray-900 text-sm hover:text-[#1E88E5] transition-colors">
                    {item.value}
                  </a>
                ) : (
                  <div className="font-semibold text-gray-900 text-sm">{item.value}</div>
                )}
                <div className="text-gray-400 text-xs mt-1">{item.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main form section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-100 card-shadow"
            >
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'var(--font-plus-jakarta)' }}>
                  Send Us Your Enquiry
                </h2>
                <p className="text-gray-500 text-sm">
                  All fields marked with <span className="text-red-500">*</span> are required.
                  We&apos;ll respond within 2 business hours.
                </p>
              </div>
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
