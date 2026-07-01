import { getDashboardStats } from '@/actions/contact'
import StatsCard from '@/components/dashboard/StatsCard'
import { Inbox, Calendar, BarChart3, ChevronRight, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const revalidate = 0 // Disable caching

export default async function DashboardPage() {
  const stats = await getDashboardStats()

  return (
    <div className="space-y-8">
      {/* Title */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'var(--font-plus-jakarta)' }}>
          Dashboard Overview
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          Monitor your customer enquiries, schedule updates, and business performance metrics.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatsCard
          title="Total Enquiries"
          value={stats.total}
          description="All-time form submissions"
          icon={Inbox}
          color="bg-blue-50 text-blue-600 border border-blue-100"
        />
        <StatsCard
          title="Today's Enquiries"
          value={stats.today}
          description="Submissions received today"
          icon={Calendar}
          color="bg-green-50 text-green-600 border border-green-100"
        />
        <StatsCard
          title="This Month"
          value={stats.thisMonth}
          description="Submissions this calendar month"
          icon={BarChart3}
          color="bg-purple-50 text-purple-600 border border-purple-100"
        />
      </div>

      {/* Quick Action banner */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-slate-900 to-slate-800 text-white relative overflow-hidden shadow-xl">
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl -translate-y-1/3 translate-x-1/3" />
        <div className="relative max-w-xl">
          <h3 className="text-xl font-bold mb-2">Manage Customer Leads</h3>
          <p className="text-slate-300 text-sm mb-6 leading-relaxed">
            View detailed enquiries, search, sort, filter by date, and export client information to CSV format.
          </p>
          <Link
            href="/dashboard/enquiries"
            className="inline-flex items-center justify-center rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow-lg shadow-blue-900/30 h-10 px-4 py-2 text-sm transition-colors"
          >
            View All Enquiries <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
