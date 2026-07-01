'use client'

import { User } from '@supabase/supabase-js'
import { Sparkles, Bell, User as UserIcon, Menu } from 'lucide-react'

interface DashboardNavProps {
  user: User
  onMenuClick?: () => void
}

export default function DashboardNav({ user, onMenuClick }: DashboardNavProps) {
  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 sm:px-8 shrink-0 w-full">
      {/* Left side items: Menu button + Title */}
      <div className="flex items-center gap-3">
        {onMenuClick && (
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 -ml-2 rounded-xl text-gray-500 hover:text-gray-900 hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        )}
        <div>
          <h1 className="text-base sm:text-lg font-bold text-gray-900 leading-none">Welcome back</h1>
          <p className="text-[10px] sm:text-xs text-gray-500 mt-1 max-w-[150px] sm:max-w-none truncate">{user.email}</p>
        </div>
      </div>

      {/* Right side items */}
      <div className="flex items-center gap-2 sm:gap-4">
        {/* Notifications */}
        <button
          className="w-9 h-9 rounded-xl hover:bg-gray-50 flex items-center justify-center border border-gray-100 text-gray-600 transition-colors shrink-0"
          aria-label="Notifications"
        >
          <Bell className="h-4.5 w-4.5" />
        </button>

        {/* User profile info */}
        <div className="flex items-center gap-2 sm:gap-3 border-l border-gray-100 pl-2 sm:pl-4">
          <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 border border-blue-100 shrink-0">
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
