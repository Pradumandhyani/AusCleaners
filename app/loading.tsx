import { Loader2 } from 'lucide-react'

export default function Loading() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <Loader2 className="h-10 w-10 text-[#1E88E5] animate-spin mb-4" />
      <h2 className="text-xl font-semibold text-gray-800">Loading Auswide Cleaners...</h2>
      <p className="text-sm text-gray-500 mt-2">Preparing your sparkling clean page experience.</p>
    </div>
  )
}
