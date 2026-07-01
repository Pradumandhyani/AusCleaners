import { redirect } from 'next/navigation'
import { createClient } from '@/supabase/server'
import DashboardSidebar from '@/components/dashboard/DashboardSidebar'
import DashboardNav from '@/components/dashboard/DashboardNav'

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/dashboard/login')
  }

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Sidebar */}
      <DashboardSidebar />

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardNav user={user} />
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  )
}
