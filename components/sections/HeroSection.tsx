'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Phone, ArrowRight, Star, Shield, Clock, CheckCircle } from 'lucide-react'
import { COMPANY } from '@/lib/constants'

const badges = [
  { icon: Shield, text: 'Fully Insured' },
  { icon: CheckCircle, text: 'Police Checked' },
  { icon: Star, text: '4.9★ Rating' },
  { icon: Clock, text: 'Same-Day Available' },
]

export default function HeroSection() {
  return (
    <section
      className="relative min-h-[100svh] sm:min-h-[92vh] flex items-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-hero" />

      {/* Background image overlay */}
      <div className="absolute inset-0 opacity-20">
        <Image
          src="/hero-cleaning.png"
          alt="Professional cleaning team"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>

      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-blue-400/10 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-green-400/10 blur-3xl" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left content */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs sm:text-sm font-medium mb-4 sm:mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Serving Brisbane & Surrounds
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 sm:mb-6"
              style={{ fontFamily: 'var(--font-plus-jakarta)' }}
            >
              Your Home,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-green-300">
                Spotlessly
              </span>{' '}
              Clean
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-blue-100 leading-relaxed mb-6 sm:mb-8 max-w-lg"
            >
              Professional, trusted cleaning services for homes, offices, and commercial spaces.
              Fully insured, police-checked cleaners with a 100% satisfaction guarantee.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-10"
            >
              <Link
                href="/contact#enquiry-form"
                className="group inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl bg-white text-[#1E88E5] font-bold text-base sm:text-lg shadow-2xl hover:shadow-white/30 hover:scale-105 transition-all duration-300"
              >
                Get Free Quote
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href={`tel:${COMPANY.phone}`}
                className="group inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl border-2 border-white/30 text-white font-semibold text-base sm:text-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
              >
                <Phone className="h-5 w-5" />
                Call Us Now
              </a>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-2 sm:gap-3"
            >
              {badges.map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs sm:text-sm"
                >
                  <Icon className="h-4 w-4 text-green-300" />
                  {text}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right content — hero image card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-blue-500/30 to-green-500/30 blur-2xl" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/20">
                <Image
                  src="/hero-cleaning.png"
                  alt="Professional cleaning team at work"
                  width={600}
                  height={450}
                  className="object-cover w-full"
                  priority
                />
                {/* Stats overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <div className="grid grid-cols-3 gap-4 text-center text-white">
                    <div>
                      <div className="text-2xl font-bold">10+</div>
                      <div className="text-xs text-white/70">Years Experience</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">5,000+</div>
                      <div className="text-xs text-white/70">Happy Clients</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">4.9★</div>
                      <div className="text-xs text-white/70">Average Rating</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 80L1440 80L1440 40C1440 40 1200 0 720 0C240 0 0 40 0 40L0 80Z" fill="white" />
        </svg>
      </div>
    </section>
  )
}
