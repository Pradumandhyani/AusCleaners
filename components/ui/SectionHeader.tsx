import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface SectionHeaderProps {
  badge: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  className?: string
}

export default function SectionHeader({
  badge,
  title,
  subtitle,
  align = 'center',
  className,
}: SectionHeaderProps) {
  const isLeft = align === 'left'

  return (
    <div
      className={cn(
        'max-w-2xl mb-12',
        isLeft ? 'text-left' : 'text-center mx-auto',
        className
      )}
    >
      <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-[#1E88E5] text-sm font-semibold mb-4">
        {badge}
      </span>
      <h2
        className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
        style={{ fontFamily: 'var(--font-plus-jakarta)' }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-500 text-base sm:text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}
