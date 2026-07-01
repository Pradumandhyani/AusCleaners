'use client'

import { Enquiry } from '@/types'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Mail, Phone, MapPin, Calendar, Building, MessageSquare, Clipboard, Check } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'
import { format } from 'date-fns'

interface EnquiryModalProps {
  enquiry: Enquiry | null
  isOpen: boolean
  onClose: () => void
}

export default function EnquiryModal({ enquiry, isOpen, onClose }: EnquiryModalProps) {
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [copiedPhone, setCopiedPhone] = useState(false)

  if (!enquiry) return null

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text)
    if (type === 'email') {
      setCopiedEmail(true)
      toast.success('Email copied to clipboard')
      setTimeout(() => setCopiedEmail(false), 2000)
    } else {
      setCopiedPhone(true)
      toast.success('Phone number copied to clipboard')
      setTimeout(() => setCopiedPhone(false), 2000)
    }
  }

  const formattedDate = format(new Date(enquiry.created_at), 'PPP p')

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-xl rounded-3xl p-6">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-gray-900" style={{ fontFamily: 'var(--font-plus-jakarta)' }}>
            Enquiry Details
          </DialogTitle>
          <DialogDescription className="text-xs text-gray-400">
            Submitted on {formattedDate}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 my-4">
          {/* Header summary */}
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-lg">
              {enquiry.name.charAt(0).toUpperCase()}
            </div>
            <div>
              <h4 className="font-bold text-gray-900 leading-tight">{enquiry.name}</h4>
              <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                <Calendar className="h-3 w-3" /> Received {format(new Date(enquiry.created_at), 'MMM d, yyyy')}
              </p>
            </div>
          </div>

          {/* Details list */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Company */}
            <div className="p-4 rounded-xl border border-gray-100 bg-white space-y-1">
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide flex items-center gap-1.5">
                <Building className="h-3.5 w-3.5" /> Company
              </span>
              <span className="text-sm font-medium text-gray-900 block">
                {enquiry.company_name || 'Individual'}
              </span>
            </div>

            {/* Email */}
            <div className="p-4 rounded-xl border border-gray-100 bg-white space-y-1 flex justify-between items-start">
              <div>
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide flex items-center gap-1.5">
                  <Mail className="h-3.5 w-3.5" /> Email Address
                </span>
                <span className="text-sm font-medium text-gray-900 block truncate max-w-[180px]">
                  {enquiry.email}
                </span>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-gray-400 hover:text-[#1E88E5]"
                onClick={() => copyToClipboard(enquiry.email, 'email')}
              >
                {copiedEmail ? <Check className="h-4 w-4 text-green-500" /> : <Clipboard className="h-4 w-4" />}
              </Button>
            </div>

            {/* Phone */}
            <div className="p-4 rounded-xl border border-gray-100 bg-white space-y-1 flex justify-between items-start">
              <div>
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide flex items-center gap-1.5">
                  <Phone className="h-3.5 w-3.5" /> Phone Number
                </span>
                <span className="text-sm font-medium text-gray-900 block">
                  {enquiry.phone}
                </span>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-gray-400 hover:text-[#1E88E5]"
                onClick={() => copyToClipboard(enquiry.phone, 'phone')}
              >
                {copiedPhone ? <Check className="h-4 w-4 text-green-500" /> : <Clipboard className="h-4 w-4" />}
              </Button>
            </div>

            {/* Address */}
            <div className="p-4 rounded-xl border border-gray-100 bg-white space-y-1 sm:col-span-2">
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5" /> Property Address
              </span>
              <span className="text-sm font-medium text-gray-900 block">
                {enquiry.address || 'Not provided'}
              </span>
            </div>

            {/* Message */}
            <div className="p-4 rounded-xl border border-gray-100 bg-white space-y-1 sm:col-span-2">
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide flex items-center gap-1.5">
                <MessageSquare className="h-3.5 w-3.5" /> Message / Requirements
              </span>
              <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line bg-gray-50 p-3.5 rounded-xl border border-gray-100 mt-2">
                {enquiry.message}
              </p>
            </div>
          </div>
        </div>

        <DialogFooter>
          <Button onClick={onClose} className="rounded-xl bg-gray-900 text-white hover:bg-gray-800">
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
