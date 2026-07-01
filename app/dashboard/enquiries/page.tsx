import { getEnquiries } from '@/actions/contact'
import EnquiriesTable from '@/components/dashboard/EnquiriesTable'

export const revalidate = 0 // Disable caching

export default async function EnquiriesPage() {
  const enquiries = await getEnquiries()

  return (
    <div className="space-y-8">
      {/* Title */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'var(--font-plus-jakarta)' }}>
          Manage Enquiries
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          Review, search, sort, filter and download all client form submissions.
        </p>
      </div>

      {/* Interactive Table */}
      <EnquiriesTable initialData={enquiries} />
    </div>
  )
}
