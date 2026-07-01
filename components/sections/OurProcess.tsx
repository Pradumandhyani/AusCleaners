'use client'

import { motion } from 'framer-motion'
import { PROCESS_STEPS } from '@/lib/constants'
import { ArrowRight } from 'lucide-react'

export default function OurProcess() {
  return (
    <section className="section-padding bg-white" aria-labelledby="process-heading">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-[#1E88E5] text-sm font-semibold mb-4">
            How It Works
          </span>
          <h2
            id="process-heading"
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: 'var(--font-plus-jakarta)' }}
          >
            Booking Is Simple &amp;{' '}
            <span className="text-gradient">Stress-Free</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            We&apos;ve made getting a professional clean as easy as possible. Four simple steps to a
            sparkling space.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line desktop */}
          <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {PROCESS_STEPS.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                {/* Step number */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1E88E5] to-[#1565C0] flex items-center justify-center shadow-xl shadow-blue-200 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-xl">{step.step}</span>
                  </div>
                  {index < PROCESS_STEPS.length - 1 && (
                    <ArrowRight className="hidden lg:block absolute -right-12 top-1/2 -translate-y-1/2 text-blue-200 h-5 w-5" />
                  )}
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
