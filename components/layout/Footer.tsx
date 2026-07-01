import Link from 'next/link'
import { Sparkles, Phone, Mail, MapPin, Clock } from 'lucide-react'
import { COMPANY } from '@/lib/constants'

const footerLinks = {
  Services: [
    { label: 'Residential Cleaning', href: '/services#residential' },
    { label: 'Commercial Cleaning', href: '/services#commercial' },
    { label: 'Office Cleaning', href: '/services#office' },
    { label: 'End of Lease', href: '/services#end-of-lease' },
    { label: 'Carpet Cleaning', href: '/services#carpet' },
    { label: 'Deep Cleaning', href: '/services#deep-cleaning' },
  ],
  Company: [
    { label: 'About Us', href: '/about' },
    { label: 'Our Services', href: '/services' },
    { label: 'Photo Gallery', href: '/gallery' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact Us', href: '/contact' },
  ],
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#1E88E5] to-[#43A047] flex items-center justify-center">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <span className="font-bold text-white text-lg">
                Auswide<span className="text-[#42A5F5]"> Cleaning</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Professional cleaning services you can trust. Serving Brisbane and surrounds with 
              pride for over 10 years. Your satisfaction is our guarantee.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              <a
                href={COMPANY.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-[#1E88E5] transition-colors duration-300"
                aria-label="Facebook"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H7v3h2v9h4v-9h3.6l.4-3h-4V6.5c0-.8.2-1.1 1-1.1h3V2h-4.3C10.5 2 9 3.5 9 6.5V8z"/>
                </svg>
              </a>
              <a
                href={COMPANY.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-[#1E88E5] transition-colors duration-300"
                aria-label="Instagram"
              >
                <svg className="h-4 w-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a
                href={COMPANY.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-[#1E88E5] transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Services & Company links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold mb-4">{category}</h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-400 text-sm hover:text-[#42A5F5] transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${COMPANY.phone}`}
                  className="flex items-start gap-3 text-gray-400 text-sm hover:text-[#42A5F5] transition-colors"
                >
                  <Phone className="h-4 w-4 mt-0.5 shrink-0 text-[#1E88E5]" />
                  {COMPANY.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex items-start gap-3 text-gray-400 text-sm hover:text-[#42A5F5] transition-colors"
                >
                  <Mail className="h-4 w-4 mt-0.5 shrink-0 text-[#1E88E5]" />
                  {COMPANY.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-[#1E88E5]" />
                {COMPANY.address}
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <Clock className="h-4 w-4 mt-0.5 shrink-0 text-[#1E88E5]" />
                {COMPANY.hours}
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-gray-500">
          <p>© {currentYear} Auswide Cleaning. All rights reserved.</p>
          <div className="flex gap-6">
            <span>ABN: {COMPANY.abn}</span>
            <Link href="/privacy" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gray-300 transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
