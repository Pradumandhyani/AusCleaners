'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, X, ZoomIn } from 'lucide-react'

const categories = ['All', 'Residential', 'Commercial', 'Carpet', 'End of Lease', 'Deep Clean']

const galleryItems = [
  { id: 1, category: 'Residential', title: 'Modern Kitchen Deep Clean', gradient: 'from-blue-400 to-blue-600', emoji: '🏠' },
  { id: 2, category: 'Commercial', title: 'Office Space Weekly Clean', gradient: 'from-green-400 to-emerald-600', emoji: '🏢' },
  { id: 3, category: 'Carpet', title: 'Steam Carpet Cleaning', gradient: 'from-purple-400 to-violet-600', emoji: '🛋️' },
  { id: 4, category: 'End of Lease', title: 'Bond Back Clean', gradient: 'from-amber-400 to-orange-500', emoji: '🔑' },
  { id: 5, category: 'Deep Clean', title: 'Bathroom Restoration', gradient: 'from-rose-400 to-pink-600', emoji: '🛁' },
  { id: 6, category: 'Residential', title: 'Living Area Refresh', gradient: 'from-cyan-400 to-blue-500', emoji: '🛋️' },
  { id: 7, category: 'Commercial', title: 'Restaurant Kitchen Clean', gradient: 'from-teal-400 to-green-600', emoji: '🍽️' },
  { id: 8, category: 'Carpet', title: 'Stain Removal Treatment', gradient: 'from-indigo-400 to-blue-600', emoji: '✨' },
  { id: 9, category: 'Deep Clean', title: 'Oven & Appliance Clean', gradient: 'from-red-400 to-rose-600', emoji: '🫧' },
  { id: 10, category: 'End of Lease', title: 'Whole House Clean', gradient: 'from-violet-400 to-purple-600', emoji: '🏡' },
  { id: 11, category: 'Residential', title: 'Bedroom Spring Clean', gradient: 'from-sky-400 to-blue-500', emoji: '🛏️' },
  { id: 12, category: 'Commercial', title: 'Gym & Fitness Centre', gradient: 'from-lime-400 to-green-500', emoji: '💪' },
]

export default function GalleryClient() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedItem, setSelectedItem] = useState<typeof galleryItems[0] | null>(null)

  const filtered = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory)

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
            Our Work &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-green-300">
              Results
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-blue-100 text-lg"
          >
            Real results from real clients. See the Auswide Cleaning difference across all our service types.
          </motion.p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" className="w-full">
            <path d="M0 60L1440 60L1440 30C1440 30 1200 0 720 0C240 0 0 30 0 30L0 60Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding bg-white">
        <div className="container-max">
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

          {/* Grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            <AnimatePresence>
              {filtered.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setSelectedItem(item)}
                  className="group relative rounded-2xl overflow-hidden cursor-pointer aspect-square"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient}`} />
                  <div className="absolute inset-0 opacity-10"
                    style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)', backgroundSize: '20px 20px' }}
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
                    <span className="text-5xl mb-3">{item.emoji}</span>
                    <p className="text-xs font-medium text-center opacity-80">{item.category}</p>
                  </div>
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-4">
                    <ZoomIn className="h-8 w-8 mb-2" />
                    <p className="text-sm font-semibold text-center">{item.title}</p>
                    <span className="text-xs text-white/70 mt-1">{item.category}</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <p className="text-gray-500 mb-5">Ready to see results like these at your property?</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#1E88E5] to-[#1565C0] text-white font-bold shadow-xl shadow-blue-200 hover:scale-105 transition-all duration-300"
            >
              Book Your Clean <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-lg w-full rounded-3xl overflow-hidden"
            >
              <div className={`w-full aspect-square bg-gradient-to-br ${selectedItem.gradient} flex flex-col items-center justify-center`}>
                <span className="text-9xl">{selectedItem.emoji}</span>
              </div>
              <div className="bg-white p-6">
                <h3 className="font-bold text-gray-900 text-xl mb-1">{selectedItem.title}</h3>
                <p className="text-gray-500 text-sm">{selectedItem.category} Cleaning</p>
              </div>
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/40 transition-colors"
                aria-label="Close lightbox"
              >
                <X className="h-5 w-5" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
