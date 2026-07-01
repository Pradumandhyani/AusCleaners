'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { FAQS } from '@/lib/constants'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const categories = ['All', 'General', 'Services', 'Booking', 'Quality']

export default function FAQClient() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? FAQS
    : FAQS.filter((f) => f.category === activeCategory)

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
            Frequently Asked{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-green-300">
              Questions
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-blue-100 text-lg"
          >
            Everything you need to know about our cleaning services. Can&apos;t find an answer? Contact us anytime.
          </motion.p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" className="w-full">
            <path d="M0 60L1440 60L1440 30C1440 30 1200 0 720 0C240 0 0 30 0 30L0 60Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* FAQ content */}
      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto px-4">
          {/* Category filter */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap gap-2 mb-10 justify-center"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-[#1E88E5] text-white shadow-lg shadow-blue-200'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* FAQ accordion */}
          <Accordion type="single" collapsible className="space-y-3">
            {filtered.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <AccordionItem
                  value={`faq-${index}`}
                  className="border border-gray-100 rounded-2xl overflow-hidden card-shadow px-5"
                >
                  <AccordionTrigger className="text-left text-gray-900 font-semibold hover:text-[#1E88E5] hover:no-underline py-5 text-sm sm:text-base">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-500 text-sm leading-relaxed pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 p-8 rounded-3xl gradient-hero text-center"
          >
            <h3 className="text-2xl font-bold text-white mb-3">Still have questions?</h3>
            <p className="text-blue-100 mb-6">Our friendly team is happy to help you with anything.</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-[#1E88E5] font-semibold hover:bg-blue-50 transition-colors"
            >
              Contact Us <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
