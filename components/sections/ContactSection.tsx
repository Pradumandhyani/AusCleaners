'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Phone, ArrowRight } from 'lucide-react'
import { COMPANY } from '@/lib/constants'
import ContactForm from '@/components/contact/ContactForm'

export default function ContactSection() {
  return (
    <section className="section-padding bg-gray-50" aria-labelledby="contact-section-heading">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-green-50 text-[#43A047] text-sm font-semibold mb-4">
            Get In Touch
          </span>
          <h2
            id="contact-section-heading"
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: 'var(--font-plus-jakarta)' }}
          >
            Request Your{' '}
            <span className="text-gradient">Free Quote</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Fill in the form below and we&apos;ll get back to you within 2 hours with a detailed,
            no-obligation quote.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact info column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Info cards */}
            {[
              {
                icon: '📞',
                title: 'Call Us',
                value: COMPANY.phone,
                sub: 'Mon–Sun, 7am–7pm',
                href: `tel:${COMPANY.phone}`,
              },
              {
                icon: '✉️',
                title: 'Email Us',
                value: COMPANY.email,
                sub: 'We reply within 2 hours',
                href: `mailto:${COMPANY.email}`,
              },
              {
                icon: '📍',
                title: 'Our Location',
                value: COMPANY.address,
                sub: 'Serving all Brisbane suburbs',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-5 rounded-2xl bg-white border border-gray-100 card-shadow flex gap-4"
              >
                <div className="text-2xl">{item.icon}</div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm mb-0.5">{item.title}</div>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-[#1E88E5] text-sm hover:underline"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <div className="text-gray-600 text-sm">{item.value}</div>
                  )}
                  <div className="text-gray-400 text-xs mt-0.5">{item.sub}</div>
                </div>
              </div>
            ))}

            {/* Emergency clean */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-[#43A047] to-[#2E7D32] text-white">
              <div className="font-bold mb-1.5">Need a Same-Day Clean? 🚀</div>
              <p className="text-green-100 text-sm mb-3">
                We offer emergency and same-day cleaning services for urgent situations.
              </p>
              <a
                href={`tel:${COMPANY.phone}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-[#43A047] font-semibold text-sm hover:bg-green-50 transition-colors"
              >
                <Phone className="h-4 w-4" />
                Call Now
              </a>
            </div>
          </motion.div>

          {/* Form column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 bg-white rounded-2xl p-8 border border-gray-100 card-shadow"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-6">Send Us an Enquiry</h3>
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
