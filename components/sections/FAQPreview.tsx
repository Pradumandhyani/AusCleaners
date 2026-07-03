'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FAQS } from '@/lib/constants'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { ArrowRight } from 'lucide-react'

export default function FAQPreview() {
  const previewFaqs = FAQS.slice(0, 5)

  return (
    <section className="section-padding bg-white" aria-labelledby="faq-preview-heading">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-[#1E88E5] text-sm font-semibold mb-4">
              FAQ
            </span>
            <h2
              id="faq-preview-heading"
              className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: 'var(--font-plus-jakarta)' }}
            >
              Frequently Asked{' '}
              <span className="text-gradient">Questions</span>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              Have questions about our cleaning services? We&apos;ve answered the most common ones
              below. Can&apos;t find your answer? Contact us anytime.
            </p>

            {/* Contact card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#1E88E5] to-[#1565C0] text-white">
              <h3 className="font-bold text-lg mb-2">Still Have Questions?</h3>
              <p className="text-blue-100 text-sm mb-4">
                Our team is here to help. Reach out and we&apos;ll get back to you within 2 hours.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-[#1E88E5] font-semibold text-sm hover:bg-blue-50 transition-colors"
              >
                Contact Us <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>

          {/* Right — Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Accordion type="single" collapsible className="space-y-3">
              {previewFaqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-gray-100 rounded-2xl overflow-hidden card-shadow px-5"
                >
                  <AccordionTrigger className="text-left text-gray-900 font-semibold hover:text-[#1E88E5] hover:no-underline py-5 text-sm">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-500 text-sm leading-relaxed pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="mt-6 text-center">
              <Link
                href="/faq"
                className="inline-flex items-center gap-2 text-[#1E88E5] font-semibold text-sm hover:gap-3 transition-all"
              >
                View All FAQs <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
