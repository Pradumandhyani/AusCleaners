'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { TESTIMONIALS } from '@/lib/constants'

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-200'}`}
        />
      ))}
    </div>
  )
}

const avatarColors = [
  'from-blue-500 to-blue-600',
  'from-green-500 to-emerald-600',
  'from-purple-500 to-violet-600',
  'from-orange-500 to-amber-600',
  'from-rose-500 to-pink-600',
  'from-cyan-500 to-teal-600',
]

export default function Testimonials() {
  return (
    <section className="section-padding bg-gray-50" aria-labelledby="testimonials-heading">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-yellow-50 text-yellow-600 text-sm font-semibold mb-4">
            Customer Reviews
          </span>
          <h2
            id="testimonials-heading"
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: 'var(--font-plus-jakarta)' }}
          >
            What Our Clients{' '}
            <span className="text-gradient">Are Saying</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Don&apos;t take our word for it — hear from the hundreds of happy customers who trust
            Auswide cleaning.
          </p>

          {/* Overall rating */}
          <div className="inline-flex items-center gap-3 mt-6 px-6 py-3 rounded-2xl bg-white border border-gray-100 card-shadow">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-gray-900 font-bold text-lg">4.9</span>
            <span className="text-gray-400 text-sm">from 248 reviews</span>
          </div>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-white rounded-2xl p-7 border border-gray-100 card-shadow hover:card-shadow-hover hover:-translate-y-1 transition-all duration-300 relative"
            >
              {/* Quote icon */}
              <Quote className="absolute top-5 right-5 h-8 w-8 text-blue-50" />

              <StarRating rating={testimonial.rating} />

              <p className="text-gray-600 text-sm leading-relaxed mt-4 mb-6 italic">
                &quot;{testimonial.content}&quot;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${avatarColors[index % avatarColors.length]} flex items-center justify-center text-white font-bold text-sm shrink-0`}
                >
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">{testimonial.name}</div>
                  <div className="text-gray-400 text-xs">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
