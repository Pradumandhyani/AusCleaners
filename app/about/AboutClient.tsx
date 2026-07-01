'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  Shield,
  Award,
  Heart,
  Users,
  Leaf,
  Star,
  ArrowRight,
  CheckCircle,
} from 'lucide-react'

const values = [
  {
    icon: Shield,
    title: 'Trust & Integrity',
    description:
      'We treat every home and business as if it were our own. Our team is police-checked, fully insured, and bound by a strict code of conduct.',
    gradient: 'from-blue-500 to-blue-600',
  },
  {
    icon: Award,
    title: 'Excellence in Service',
    description:
      'We never cut corners. Our comprehensive checklists and quality inspections ensure consistently exceptional results, every single time.',
    gradient: 'from-amber-500 to-orange-500',
  },
  {
    icon: Heart,
    title: 'Care & Compassion',
    description:
      'We genuinely care about our clients, our team, and the environment. This drives every decision we make as a company.',
    gradient: 'from-rose-500 to-pink-600',
  },
  {
    icon: Leaf,
    title: 'Environmental Responsibility',
    description:
      'We use eco-friendly, biodegradable cleaning products that are safe for your family, pets, and the planet we all share.',
    gradient: 'from-green-500 to-emerald-600',
  },
]

const milestones = [
  { year: '2014', event: 'Founded in Melbourne with a team of 3' },
  { year: '2016', event: 'Expanded to commercial cleaning services' },
  { year: '2018', event: 'Reached 1,000 happy clients milestone' },
  { year: '2020', event: 'Launched eco-friendly cleaning range' },
  { year: '2022', event: 'Expanded team to 50+ professional cleaners' },
  { year: '2024', event: '5,000+ clients and growing' },
]

export default function AboutClient() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-28 px-4 overflow-hidden gradient-hero">
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '32px 32px' }}
        />
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium mb-6"
          >
            About Auswide cleaning
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold text-white mb-6"
            style={{ fontFamily: 'var(--font-plus-jakarta)' }}
          >
            Melbourne&apos;s Most{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-green-300">
              Trusted Cleaners
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-blue-100 text-lg leading-relaxed max-w-2xl mx-auto"
          >
            For over 10 years, Auswide cleaning has been helping Melbourne families and businesses
            maintain beautiful, healthy spaces. Our story is one of passion, dedication, and an
            unwavering commitment to exceptional service.
          </motion.p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" className="w-full">
            <path d="M0 60L1440 60L1440 30C1440 30 1200 0 720 0C240 0 0 30 0 30L0 60Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-[#1E88E5] text-sm font-semibold mb-4">
                Our Story
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mb-5" style={{ fontFamily: 'var(--font-plus-jakarta)' }}>
                Started With a Simple Mission
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Auswide cleaning was founded in 2014 by Michael and Sarah Chen, a couple who
                  believed that professional cleaning should be accessible, reliable, and genuinely
                  excellent — not a luxury.
                </p>
                <p>
                  Starting with just a small team of three dedicated cleaners and a single van, we
                  built our reputation one spotlessly clean home at a time. Word spread quickly
                  that Auswide cleaning wasn&apos;t just another cleaning company — we were different.
                </p>
                <p>
                  Today, we&apos;re proud to have served over 5,000 satisfied clients across Melbourne
                  and its surrounding suburbs, with a team of 50+ professionally trained cleaners
                  who share our passion for quality and service.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { label: 'Years in Business', value: '10+' },
                  { label: 'Happy Clients', value: '5,000+' },
                  { label: 'Trained Cleaners', value: '50+' },
                  { label: 'Average Rating', value: '4.9★' },
                ].map((stat) => (
                  <div key={stat.label} className="p-4 rounded-2xl bg-gray-50 border border-gray-100 text-center">
                    <div className="text-2xl font-bold text-[#1E88E5]">{stat.value}</div>
                    <div className="text-gray-500 text-xs mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Timeline */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6">Our Journey</h3>
              <div className="space-y-5">
                {milestones.map((m, i) => (
                  <motion.div
                    key={m.year}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex gap-4"
                  >
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-[#1E88E5] text-white flex items-center justify-center text-xs font-bold shrink-0">
                        {m.year.slice(2)}
                      </div>
                      {i < milestones.length - 1 && (
                        <div className="w-0.5 h-full bg-blue-100 mt-2" />
                      )}
                    </div>
                    <div className="pb-5">
                      <div className="text-sm font-semibold text-[#1E88E5]">{m.year}</div>
                      <div className="text-gray-700 text-sm mt-1">{m.event}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-green-50 text-[#43A047] text-sm font-semibold mb-4">
              Our Values
            </span>
            <h2 className="text-3xl font-bold text-gray-900" style={{ fontFamily: 'var(--font-plus-jakarta)' }}>
              What We Stand For
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-7 bg-white rounded-2xl border border-gray-100 card-shadow hover:card-shadow-hover transition-all duration-300 flex gap-5"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${value.gradient} flex items-center justify-center shrink-0`}>
                  <value.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="container-max text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'var(--font-plus-jakarta)' }}>
              Ready to Experience the Difference?
            </h2>
            <p className="text-gray-500 text-lg mb-8 max-w-xl mx-auto">
              Join thousands of happy clients and discover why Auswide cleaning is Melbourne&apos;s most trusted cleaning company.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#1E88E5] to-[#1565C0] text-white font-bold text-lg shadow-xl shadow-blue-200 hover:scale-105 transition-all duration-300"
            >
              Get Your Free Quote <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
