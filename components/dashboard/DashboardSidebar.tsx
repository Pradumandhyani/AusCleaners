'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Sparkles, LayoutDashboard, Inbox, LogOut } from 'lucide-react'
import { cn } from '@/lib/utils'
import { createClient } from '@/supabase/client'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'

const MENU_ITEMS = [
  { href: '/dashboard', label: 'Overview', icon: LayoutDashboard },
  { href: '/dashboard/enquiries', label: 'Enquiries', icon: Inbox },
]

export default function DashboardSidebar() {
  const pathname = usePathname()
  const router = useRouter()
  const supabase = createClient()

  async function handleLogout() {
    const { error } = await supabase.auth.signOut()
    if (error) {
      toast.error('Failed to log out')
      return
    }
    toast.success('Logged out successfully')
    router.push('/')
    router.refresh()
  }

  return (
    <aside className="w-64 bg-slate-900 text-slate-300 flex flex-col h-full border-r border-slate-800">
      {/* Sidebar Header */}
      <div className="h-16 flex items-center gap-2 px-6 border-b border-slate-800 shrink-0">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center">
          <Sparkles className="h-4.5 w-4.5 text-white" />
        </div>
        <div>
          <span className="font-bold text-white text-sm block">SparkleClean</span>
          <span className="text-xs text-slate-400 block -mt-1">Admin Portal</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-1.5">
        {MENU_ITEMS.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200',
                isActive
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/30'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              )}
            >
              <Icon className="h-4.5 w-4.5" />
              {item.label}
            </Link>
          )
        })}
      </nav>

      {/* Footer / Logout */}
      <div className="p-4 border-t border-slate-800 shrink-0">
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 w-full px-4 py-3 rounded-xl text-sm font-medium text-rose-400 hover:text-rose-300 hover:bg-rose-950/20 transition-all duration-200"
        >
          <LogOut className="h-4.5 w-4.5" />
          Log Out
        </button>
      </div>
    </aside>
  )
}
