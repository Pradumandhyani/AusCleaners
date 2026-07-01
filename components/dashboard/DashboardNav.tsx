'use client'

import { User } from '@supabase/supabase-js'
import { Sparkles, Bell, User as UserIcon } from 'lucide-react'

interface DashboardNavProps {
  user: User
}

export default function DashboardNav({ user }: DashboardNavProps) {
  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8 shrink-0">
      {/* Title / Welcome */}
      <div>
        <h1 className="text-lg font-bold text-gray-900 leading-none">Welcome back</h1>
        <p className="text-xs text-gray-500 mt-1">{user.email}</p>
      </div>

      {/* Right side items */}
      <div className="flex items-center gap-4">
        {/* Notifications */}
        <button
          className="w-9 h-9 rounded-xl hover:bg-gray-50 flex items-center justify-center border border-gray-100 text-gray-600 transition-colors"
          aria-label="Notifications"
        >
          <Bell className="h-4.5 w-4.5" />
        </button>

        {/* User profile info */}
        <div className="flex items-center gap-3 border-l border-gray-100 pl-4">
          <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 border border-blue-100">
            <UserIcon className="h-4.5 w-4.5" />
          </div>
          <div className="hidden sm:block text-left">
            <span className="text-sm font-semibold text-gray-900 block leading-tight">Admin User</span>
            <span className="text-xs text-green-600 font-medium block">Active Session</span>
          </div>
        </div>
      </div>
    </header>
  )
}
