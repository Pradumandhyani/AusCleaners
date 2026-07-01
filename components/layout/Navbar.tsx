'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, Phone, Menu, X, ChevronDown } from 'lucide-react'
import { COMPANY } from '@/lib/constants'
import { cn } from '@/lib/utils'

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileOpen(false)
  }, [pathname])

  return (
    <>
      {/* Top bar */}
      <div className="bg-[#1565C0] text-white text-sm py-2 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <span className="text-blue-100">Professional Cleaning Services · Melbourne & Surrounds</span>
          <a
            href={`tel:${COMPANY.phone}`}
            className="flex items-center gap-2 font-semibold hover:text-blue-200 transition-colors"
          >
            <Phone className="h-3.5 w-3.5" />
            {COMPANY.phone}
          </a>
        </div>
      </div>

      {/* Main navbar */}
      <motion.nav
        initial={false}
        animate={isScrolled ? 'scrolled' : 'top'}
        variants={{
          top: { backgroundColor: 'rgba(255,255,255,1)', boxShadow: '0 1px 0 rgba(0,0,0,0.06)' },
          scrolled: { backgroundColor: 'rgba(255,255,255,0.97)', boxShadow: '0 4px 24px rgba(0,0,0,0.12)' },
        }}
        transition={{ duration: 0.2 }}
        className="sticky top-0 z-50 backdrop-blur-md"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#1E88E5] to-[#43A047] flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <div className="hidden sm:block">
                <span className="font-bold text-gray-900 text-lg leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
                  SparkleClean
                </span>
                <span className="font-bold text-[#1E88E5] text-lg leading-tight"> Pro</span>
              </div>
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                    pathname === link.href
                      ? 'text-[#1E88E5] bg-blue-50'
                      : 'text-gray-600 hover:text-[#1E88E5] hover:bg-gray-50'
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-3">
              <Link
                href="/contact"
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#1E88E5] to-[#1565C0] text-white text-sm font-semibold shadow-lg shadow-blue-200 hover:shadow-xl hover:shadow-blue-300 hover:scale-105 transition-all duration-300"
              >
                Get Free Quote
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden border-t border-gray-100 bg-white overflow-hidden"
            >
              <div className="px-4 py-4 space-y-1">
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        'flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-all',
                        pathname === link.href
                          ? 'text-[#1E88E5] bg-blue-50'
                          : 'text-gray-700 hover:text-[#1E88E5] hover:bg-gray-50'
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <div className="pt-2 pb-1">
                  <Link
                    href="/contact"
                    className="flex items-center justify-center w-full px-4 py-3 rounded-xl bg-gradient-to-r from-[#1E88E5] to-[#1565C0] text-white text-sm font-semibold shadow-lg"
                  >
                    Get Free Quote
                  </Link>
                </div>
                <a
                  href={`tel:${COMPANY.phone}`}
                  className="flex items-center justify-center gap-2 px-4 py-3 text-sm text-gray-600"
                >
                  <Phone className="h-4 w-4" />
                  {COMPANY.phone}
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  )
}
