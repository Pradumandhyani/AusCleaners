'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { AlertTriangle, RefreshCcw, Home } from 'lucide-react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 py-20">
      <div className="w-16 h-16 rounded-2xl bg-red-50 flex items-center justify-center mb-6">
        <AlertTriangle className="h-8 w-8 text-red-500" />
      </div>
      <h1 className="text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'var(--font-plus-jakarta)' }}>
        Something went wrong
      </h1>
      <p className="text-gray-500 text-sm max-w-sm mx-auto mb-8">
        We encountered an unexpected error. Please try again or contact us if the issue persists.
      </p>
      <div className="flex gap-4 justify-center">
        <button
          onClick={reset}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#1E88E5] text-white font-semibold text-sm hover:bg-[#1565C0] transition-colors"
        >
          <RefreshCcw className="h-4 w-4" /> Try Again
        </button>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-gray-200 text-gray-700 font-semibold text-sm hover:border-[#1E88E5] hover:text-[#1E88E5] transition-all"
        >
          <Home className="h-4 w-4" /> Go Home
        </Link>
      </div>
    </div>
  )
}
