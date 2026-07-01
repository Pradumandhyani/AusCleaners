'use client'

import { useState, useMemo } from 'react'
import { Enquiry } from '@/types'
import { deleteEnquiry } from '@/actions/contact'
import { toast } from 'sonner'
import { format, isToday, isAfter, subDays, startOfMonth } from 'date-fns'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Search,
  Download,
  Trash2,
  Eye,
  ChevronLeft,
  ChevronRight,
  Clipboard,
  Check,
  Calendar,
  Sparkles,
} from 'lucide-react'
import EnquiryModal from './EnquiryModal'

interface EnquiriesTableProps {
  initialData: Enquiry[]
}

type DateFilter = 'all' | 'today' | 'week' | 'month'

export default function EnquiriesTable({ initialData }: EnquiriesTableProps) {
  const [data, setData] = useState<Enquiry[]>(initialData)
  const [searchTerm, setSearchTerm] = useState('')
  const [dateFilter, setDateFilter] = useState<DateFilter>('all')
  const [sortField, setSortField] = useState<'created_at' | 'name'>('created_at')
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc')
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 8

  // Modal State
  const [selectedEnquiry, setSelectedEnquiry] = useState<Enquiry | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Copy States
  const [copiedId, setCopiedId] = useState<string | null>(null)

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopiedId(id)
    toast.success('Copied to clipboard')
    setTimeout(() => setCopiedId(null), 2000)
  }

  // Delete Action
  const handleDelete = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this enquiry?')) return

    const result = await deleteEnquiry(id)
    if (result.success) {
      setData((prev) => prev.filter((item) => item.id !== id))
      toast.success(result.message)
    } else {
      toast.error(result.error || result.message)
    }
  }

  // Filter & Sort Logic
  const processedData = useMemo(() => {
    let result = [...data]

    // 1. Search
    if (searchTerm) {
      const term = searchTerm.toLowerCase()
      result = result.filter(
        (item) =>
          item.name.toLowerCase().includes(term) ||
          item.email.toLowerCase().includes(term) ||
          item.phone.toLowerCase().includes(term) ||
          (item.company_name && item.company_name.toLowerCase().includes(term)) ||
          item.message.toLowerCase().includes(term)
      )
    }

    // 2. Date Filter
    if (dateFilter !== 'all') {
      const now = new Date()
      result = result.filter((item) => {
        const itemDate = new Date(item.created_at)
        if (dateFilter === 'today') {
          return isToday(itemDate)
        }
        if (dateFilter === 'week') {
          return isAfter(itemDate, subDays(now, 7))
        }
        if (dateFilter === 'month') {
          return isAfter(itemDate, startOfMonth(now))
        }
        return true
      })
    }

    // 3. Sort
    result.sort((a, b) => {
      let aVal = sortField === 'name' ? a.name : a.created_at
      let bVal = sortField === 'name' ? b.name : b.created_at

      if (sortField === 'created_at') {
        return sortDirection === 'desc'
          ? new Date(bVal).getTime() - new Date(aVal).getTime()
          : new Date(aVal).getTime() - new Date(bVal).getTime()
      } else {
        return sortDirection === 'desc'
          ? String(bVal).localeCompare(String(aVal))
          : String(aVal).localeCompare(String(bVal))
      }
    })

    return result
  }, [data, searchTerm, dateFilter, sortField, sortDirection])

  // Pagination Logic
  const totalPages = Math.ceil(processedData.length / itemsPerPage)
  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage
    return processedData.slice(start, start + itemsPerPage)
  }, [processedData, currentPage])

  // Reset pagination on filter search changes
  useMemo(() => {
    setCurrentPage(1)
  }, [searchTerm, dateFilter])

  // Export to CSV
  const handleExportCSV = () => {
    const headers = ['Name', 'Company', 'Email', 'Phone', 'Address', 'Message', 'Date']
    const rows = processedData.map((item) => [
      item.name,
      item.company_name || 'Individual',
      item.email,
      item.phone,
      item.address || 'Not Provided',
      item.message.replace(/"/g, '""'),
      format(new Date(item.created_at), 'yyyy-MM-dd HH:mm:ss'),
    ])

    const csvContent =
      'data:text/csv;charset=utf-8,' +
      [headers.join(','), ...rows.map((e) => e.map((val) => `"${val}"`).join(','))].join('\n')

    const encodedUri = encodeURI(csvContent)
    const link = document.createElement('a')
    link.setAttribute('href', encodedUri)
    link.setAttribute(
      'download',
      `enquiries_export_${format(new Date(), 'yyyy-MM-dd')}.csv`
    )
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    toast.success('CSV export initiated')
  }

  const toggleSort = (field: 'created_at' | 'name') => {
    if (sortField === field) {
      setSortDirection((prev) => (prev === 'asc' ? 'desc' : 'asc'))
    } else {
      setSortField(field)
      setSortDirection('desc')
    }
  }

  return (
    <div className="space-y-6">
      {/* Controls Bar */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        {/* Search */}
        <div className="relative w-full md:max-w-xs">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search enquiries..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-9 h-10 rounded-xl border-gray-200 focus:border-[#1E88E5]"
          />
        </div>

        {/* Filters and CSV Export */}
        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto justify-end">
          {/* Date Filter */}
          <Select
            value={dateFilter}
            onValueChange={(val) => {
              if (val) setDateFilter(val as DateFilter)
            }}
          >
            <SelectTrigger className="w-[140px] h-10 rounded-xl border-gray-200">
              <Calendar className="h-4 w-4 mr-2 text-gray-400" />
              <SelectValue placeholder="Date Filter" />
            </SelectTrigger>
            <SelectContent className="rounded-xl">
              <SelectItem value="all">All Time</SelectItem>
              <SelectItem value="today">Today</SelectItem>
              <SelectItem value="week">Past 7 Days</SelectItem>
              <SelectItem value="month">This Month</SelectItem>
            </SelectContent>
          </Select>

          {/* Sort selector */}
          <Select
            value={`${sortField}-${sortDirection}`}
            onValueChange={(val) => {
              if (!val) return
              const [field, direction] = val.split('-')
              setSortField(field as 'created_at' | 'name')
              setSortDirection(direction as 'asc' | 'desc')
            }}
          >
            <SelectTrigger className="w-[170px] h-10 rounded-xl border-gray-200">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent className="rounded-xl">
              <SelectItem value="created_at-desc">Newest First</SelectItem>
              <SelectItem value="created_at-asc">Oldest First</SelectItem>
              <SelectItem value="name-asc">Name (A-Z)</SelectItem>
              <SelectItem value="name-desc">Name (Z-A)</SelectItem>
            </SelectContent>
          </Select>

          {/* CSV Export Button */}
          <Button
            onClick={handleExportCSV}
            variant="outline"
            className="h-10 rounded-xl border-gray-200 hover:bg-gray-50 flex items-center gap-2"
          >
            <Download className="h-4 w-4" /> Export CSV
          </Button>
        </div>
      </div>

      {/* Table Container */}
      <div className="rounded-2xl border border-gray-100 bg-white card-shadow overflow-hidden">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader className="bg-gray-50">
              <TableRow>
                <TableHead className="font-semibold text-gray-600">Client</TableHead>
                <TableHead className="font-semibold text-gray-600">Contact</TableHead>
                <TableHead className="font-semibold text-gray-600">Address</TableHead>
                <TableHead className="font-semibold text-gray-600">Message Preview</TableHead>
                <TableHead className="font-semibold text-gray-600">Date</TableHead>
                <TableHead className="font-semibold text-gray-600 text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedData.length > 0 ? (
                paginatedData.map((item) => (
                  <TableRow key={item.id} className="hover:bg-gray-50/50 transition-colors">
                    {/* Client Name / Company */}
                    <TableCell>
                      <div className="font-semibold text-gray-900">{item.name}</div>
                      <div className="text-xs text-gray-400">
                        {item.company_name || 'Individual'}
                      </div>
                    </TableCell>

                    {/* Email / Phone */}
                    <TableCell>
                      <div className="flex flex-col gap-1">
                        <span className="text-sm font-medium text-gray-700 flex items-center gap-1.5">
                          {item.email}
                          <button
                            onClick={() => handleCopy(item.email, `${item.id}-email`)}
                            className="text-gray-400 hover:text-[#1E88E5] shrink-0"
                            title="Copy Email"
                          >
                            {copiedId === `${item.id}-email` ? (
                              <Check className="h-3 w-3 text-green-500" />
                            ) : (
                              <Clipboard className="h-3 w-3" />
                            )}
                          </button>
                        </span>
                        <span className="text-xs text-gray-500 flex items-center gap-1.5">
                          {item.phone}
                          <button
                            onClick={() => handleCopy(item.phone, `${item.id}-phone`)}
                            className="text-gray-400 hover:text-[#1E88E5] shrink-0"
                            title="Copy Phone"
                          >
                            {copiedId === `${item.id}-phone` ? (
                              <Check className="h-3 w-3 text-green-500" />
                            ) : (
                              <Clipboard className="h-3 w-3" />
                            )}
                          </button>
                        </span>
                      </div>
                    </TableCell>

                    {/* Address */}
                    <TableCell className="max-w-[200px] truncate text-gray-600">
                      {item.address || <span className="text-gray-400 italic">Not Provided</span>}
                    </TableCell>

                    {/* Message Preview */}
                    <TableCell className="max-w-[250px] truncate text-gray-600">
                      {item.message}
                    </TableCell>

                    {/* Date */}
                    <TableCell className="text-gray-500 text-sm">
                      {format(new Date(item.created_at), 'MMM d, yyyy h:mm a')}
                    </TableCell>

                    {/* Actions */}
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-1.5">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-gray-400 hover:text-blue-600"
                          onClick={() => {
                            setSelectedEnquiry(item)
                            setIsModalOpen(true)
                          }}
                        >
                          <Eye className="h-4.5 w-4.5" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-gray-400 hover:text-red-500"
                          onClick={() => handleDelete(item.id)}
                        >
                          <Trash2 className="h-4.5 w-4.5" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={6} className="h-48 text-center">
                    <div className="flex flex-col items-center justify-center space-y-2 text-gray-400">
                      <span className="text-4xl">📭</span>
                      <p className="font-semibold text-gray-900">No enquiries found</p>
                      <p className="text-xs">Try adjusting your search query or filters</p>
                    </div>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>

        {/* Pagination Bar */}
        {totalPages > 1 && (
          <div className="border-t border-gray-100 px-6 py-4 flex items-center justify-between bg-gray-50">
            <span className="text-xs text-gray-500">
              Showing page <b>{currentPage}</b> of <b>{totalPages}</b> (
              {processedData.length} total)
            </span>
            <div className="flex items-center gap-1.5">
              <Button
                variant="outline"
                size="icon"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((p) => p - 1)}
                className="h-8 w-8 rounded-lg"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((p) => p + 1)}
                className="h-8 w-8 rounded-lg"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Details Modal */}
      <EnquiryModal
        enquiry={selectedEnquiry}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false)
          setSelectedEnquiry(null)
        }}
      />
    </div>
  )
}
