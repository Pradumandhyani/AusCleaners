import { redirect } from 'next/navigation'
import { createClient } from '@/supabase/server'
import DashboardLayoutWrapper from '@/components/dashboard/DashboardLayoutWrapper'

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
    <DashboardLayoutWrapper user={user}>
      {children}
    </DashboardLayoutWrapper>
  )
}
