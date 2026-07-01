import { Card, CardContent } from '@/components/ui/card'
import { LucideIcon } from 'lucide-react'

interface StatsCardProps {
  title: string
  value: string | number
  description?: string
  icon: LucideIcon
  color: string
}

export default function StatsCard({
  title,
  value,
  description,
  icon: Icon,
  color,
}: StatsCardProps) {
  return (
    <Card className="rounded-2xl border-gray-100 card-shadow overflow-hidden">
      <CardContent className="p-6">
        <div className="flex justify-between items-start">
          <div className="space-y-2">
            <span className="text-sm font-semibold text-gray-500 block uppercase tracking-wider">
              {title}
            </span>
            <span className="text-3xl font-extrabold text-gray-900 block" style={{ fontFamily: 'var(--font-plus-jakarta)' }}>
              {value}
            </span>
            {description && (
              <span className="text-xs text-gray-400 block">{description}</span>
            )}
          </div>
          <div className={`p-3 rounded-xl ${color} flex items-center justify-center shrink-0`}>
            <Icon className="h-6 w-6" />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
