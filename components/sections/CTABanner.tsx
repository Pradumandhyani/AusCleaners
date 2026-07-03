'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'
import { COMPANY } from '@/lib/constants'

export default function CTABanner() {
  return (
    <section className="py-12 sm:py-20 px-4" aria-label="Call to action">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden gradient-hero p-6 sm:p-12 text-center"
        >
          {/* Decorative orbs */}
          <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-blue-400/20 blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-green-400/20 blur-3xl translate-x-1/2 translate-y-1/2" />

          <div className="relative">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white/80 text-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Available 7 Days a Week
            </span>

            <h2
              className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
              style={{ fontFamily: 'var(--font-plus-jakarta)' }}
            >
              Ready for a Cleaner Home?
            </h2>
            <p className="text-blue-100 text-base sm:text-lg max-w-xl mx-auto mb-8 sm:mb-10">
              Join 5,000+ happy customers who trust Auswide Cleaning. Get your free, no-obligation
              quote today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact#enquiry-form"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-white text-[#1E88E5] font-bold text-lg shadow-2xl hover:shadow-white/30 hover:scale-105 transition-all duration-300"
              >
                Get Free Quote
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href={`tel:${COMPANY.phone}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl border-2 border-white/40 text-white font-semibold text-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
              >
                <Phone className="h-5 w-5" />
                {COMPANY.phone}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
