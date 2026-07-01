'use client'

import { useState } from 'react'
import { User } from '@supabase/supabase-js'
import { Menu } from 'lucide-react'
import DashboardSidebar from '@/components/dashboard/DashboardSidebar'
import DashboardNav from '@/components/dashboard/DashboardNav'
import { motion, AnimatePresence } from 'framer-motion'

interface DashboardLayoutWrapperProps {
  user: User
  children: React.ReactNode
}

export default function DashboardLayoutWrapper({
  user,
  children,
}: DashboardLayoutWrapperProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Sidebar for Desktop */}
      <div className="hidden lg:block shrink-0 h-full">
        <DashboardSidebar />
      </div>

      {/* Sidebar Drawer for Mobile & Tablet */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsSidebarOpen(false)}
              className="fixed inset-0 bg-black z-40 lg:hidden"
            />

            {/* Sidebar drawer content */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 bottom-0 left-0 z-50 w-64 lg:hidden"
            >
              <DashboardSidebar onClose={() => setIsSidebarOpen(false)} />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden w-full">
        {/* Navigation Bar */}
        <DashboardNav user={user} onMenuClick={() => setIsSidebarOpen(true)} />

        {/* Dashboard Content page */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 w-full max-w-full">
          {children}
        </main>
      </div>
    </div>
  )
}
