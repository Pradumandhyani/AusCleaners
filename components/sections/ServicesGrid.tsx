'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  Home,
  Building2,
  Briefcase,
  KeyRound,
  Layers,
  Sparkles,
  ArrowRight,
} from 'lucide-react'
import { SERVICES } from '@/lib/constants'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Home,
  Building2,
  Briefcase,
  KeyRound,
  Layers,
  Sparkles,
}

const gradients = [
  'from-blue-500 to-blue-600',
  'from-emerald-500 to-green-600',
  'from-violet-500 to-purple-600',
  'from-amber-500 to-orange-500',
  'from-rose-500 to-pink-600',
  'from-cyan-500 to-blue-500',
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function ServicesGrid() {
  return (
    <section className="section-padding bg-gray-50" aria-labelledby="services-heading">
      <div className="container-max">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-green-50 text-[#43A047] text-sm font-semibold mb-4">
            Our Services
          </span>
          <h2
            id="services-heading"
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: 'var(--font-plus-jakarta)' }}
          >
            Everything You Need,{' '}
            <span className="text-gradient">Spotlessly Done</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            From regular home cleans to intensive commercial services, we have the expertise
            and equipment to handle any cleaning challenge.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6"
        >
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon] || Sparkles
            const gradient = gradients[index % gradients.length]
            const slugMap: Record<string, string> = {
              'residential': 'house-cleaning-brisbane',
              'commercial': 'commercial-cleaning-brisbane',
              'office': 'office-cleaning-brisbane',
              'end-of-lease': 'end-of-lease-cleaning-brisbane',
              'carpet': 'carpet-cleaning-brisbane',
              'deep-cleaning': 'deep-cleaning-brisbane',
            }
            const targetSlug = slugMap[service.id] || ''

            return (
              <motion.div
                key={service.id}
                variants={item}
              className="group bg-white rounded-xl sm:rounded-2xl p-4 sm:p-7 border border-gray-100 card-shadow hover:card-shadow-hover hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                {/* Icon + Price */}
                <div className="flex items-start justify-between mb-3 sm:mb-6">
                  <div
                    className={`w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="h-5 w-5 sm:h-7 sm:w-7 text-white" />
                  </div>
                  {service.price && (
                    <span className="text-xs sm:text-sm font-semibold text-[#1E88E5] bg-blue-50 px-2 sm:px-3 py-1 rounded-full">
                      {service.price}
                    </span>
                  )}
                </div>

                {/* Title & description */}
                <h3 className="text-sm sm:text-xl font-bold text-gray-900 mb-1.5 sm:mb-3 leading-snug">{service.title}</h3>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-5 hidden sm:block">{service.description}</p>

                {/* Features list */}
                <ul className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-6 flex-1 hidden sm:block">
                  {service.features.slice(0, 4).map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#43A047] shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href={targetSlug ? `/services/${targetSlug}` : '/contact#enquiry-form'}
                  className="group/link inline-flex items-center gap-1 sm:gap-1.5 text-xs sm:text-sm font-semibold text-[#1E88E5] hover:gap-2.5 transition-all duration-200 mt-auto"
                >
                  Learn More
                  <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8 sm:mt-12 text-center"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl border-2 border-[#1E88E5] text-[#1E88E5] font-semibold hover:bg-[#1E88E5] hover:text-white transition-all duration-300"
          >
            View All Services
            <ArrowRight className="h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
