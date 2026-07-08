import Link from 'next/link'
import { Home, Search } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 py-20">
      {/* Big 404 number */}
      <div className="text-[120px] sm:text-[160px] font-black leading-none text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-green-500 mb-4 select-none">
        404
      </div>
      <h1
        className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3"
        style={{ fontFamily: 'var(--font-plus-jakarta)' }}
      >
        Page Not Found
      </h1>
      <p className="text-gray-500 text-sm max-w-sm mx-auto mb-10">
        Sorry, the page you're looking for doesn't exist or has been moved. Let's get you back to a fresh, clean space.
      </p>

      <div className="flex flex-wrap gap-4 justify-center">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#1E88E5] to-[#1565C0] text-white font-semibold shadow-lg hover:scale-105 transition-all duration-300"
        >
          <Home className="h-4 w-4" /> Back to Home
        </Link>
        <Link
          href="/services"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-gray-200 text-gray-700 font-semibold hover:border-[#1E88E5] hover:text-[#1E88E5] transition-all"
        >
          <Search className="h-4 w-4" /> Browse Services
        </Link>
      </div>

      {/* Service quick links */}
      <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-lg w-full text-sm">
        {[
          { label: 'House Cleaning', href: '/services/house-cleaning-brisbane' },
          { label: 'Office Cleaning', href: '/services/office-cleaning-brisbane' },
          { label: 'Bond Cleaning', href: '/services/bond-cleaning-brisbane' },
          { label: 'Deep Cleaning', href: '/services/deep-cleaning-brisbane' },
          { label: 'Carpet Cleaning', href: '/services/carpet-cleaning-brisbane' },
          { label: 'Contact Us', href: '/contact' },
        ].map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-100 text-gray-600 hover:bg-blue-50 hover:border-blue-200 hover:text-[#1E88E5] transition-all duration-200 text-center"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  )
}
