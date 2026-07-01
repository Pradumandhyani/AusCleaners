'use client'

import { motion } from 'framer-motion'
import { Award, Shield, ThumbsUp, Leaf, Clock, Star } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Fully Insured & Police Checked',
    description:
      'Every cleaner on our team is fully insured and has undergone thorough police checks. Your home and family are always safe.',
    color: 'from-blue-500 to-blue-600',
    bg: 'bg-blue-50',
  },
  {
    icon: Star,
    title: '100% Satisfaction Guarantee',
    description:
      "Not happy with our clean? We'll come back and fix it for free — no questions asked. Your satisfaction is our promise.",
    color: 'from-yellow-500 to-orange-500',
    bg: 'bg-yellow-50',
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly Products',
    description:
      'We use hospital-grade, environmentally safe cleaning products that are gentle on your family, pets, and the planet.',
    color: 'from-green-500 to-emerald-600',
    bg: 'bg-green-50',
  },
  {
    icon: Clock,
    title: 'Flexible Scheduling',
    description:
      'Book at a time that suits you — weekdays, weekends, or even same-day. We work around your busy schedule.',
    color: 'from-purple-500 to-purple-600',
    bg: 'bg-purple-50',
  },
  {
    icon: Award,
    title: '10+ Years Experience',
    description:
      'With over a decade of professional cleaning experience, we know exactly what it takes to achieve a truly exceptional result.',
    color: 'from-rose-500 to-pink-600',
    bg: 'bg-rose-50',
  },
  {
    icon: ThumbsUp,
    title: 'Transparent Pricing',
    description:
      'No hidden fees. No surprises. We provide clear, upfront quotes so you always know exactly what you\'re paying for.',
    color: 'from-cyan-500 to-blue-500',
    bg: 'bg-cyan-50',
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-white" aria-labelledby="why-choose-us-heading">
      <div className="container-max">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-[#1E88E5] text-sm font-semibold mb-4">
            Why Choose Us
          </span>
          <h2
            id="why-choose-us-heading"
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: 'var(--font-plus-jakarta)' }}
          >
            The SparkleClean Pro{' '}
            <span className="text-gradient">Difference</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            We&apos;re not just cleaners — we&apos;re professionals dedicated to creating healthy, beautiful
            spaces for you and your family. Here&apos;s what sets us apart.
          </p>
        </motion.div>

        {/* Feature grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={item}
              className="group relative p-7 rounded-2xl border border-gray-100 hover:border-transparent card-shadow hover:card-shadow-hover transition-all duration-300 cursor-default overflow-hidden"
            >
              {/* Background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-white to-blue-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative">
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl ${feature.bg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                >
                  <div
                    className={`w-6 h-6 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center`}
                  >
                    <feature.icon className="h-3.5 w-3.5 text-white" />
                  </div>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8 py-10 px-8 rounded-2xl bg-gradient-to-r from-[#1E88E5] to-[#1565C0] shadow-xl shadow-blue-200"
        >
          {[
            { value: '5,000+', label: 'Happy Clients' },
            { value: '10+', label: 'Years Experience' },
            { value: '50+', label: 'Trained Cleaners' },
            { value: '4.9/5', label: 'Average Rating' },
          ].map((stat) => (
            <div key={stat.label} className="text-center text-white">
              <div className="text-3xl sm:text-4xl font-bold mb-1">{stat.value}</div>
              <div className="text-blue-200 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
