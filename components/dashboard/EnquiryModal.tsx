'use client'

import { Enquiry, ContactFormData } from '@/types'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import {
  Mail,
  Phone,
  MapPin,
  Calendar,
  Building,
  MessageSquare,
  Clipboard,
  Check,
  Edit2,
  Save,
  CheckSquare,
  XSquare,
  Loader2,
} from 'lucide-react'
import { useState, useEffect } from 'react'
import { toast } from 'sonner'
import { format } from 'date-fns'
import { updateEnquiry, updateEnquiryStatus } from '@/actions/contact'
import { Badge } from '@/components/ui/badge'

interface EnquiryModalProps {
  enquiry: Enquiry | null
  isOpen: boolean
  onClose: () => void
  onUpdate: (updated: Enquiry) => void
}

const statusColors = {
  pending: 'bg-yellow-100 text-yellow-800 border-yellow-200',
  accepted: 'bg-blue-100 text-blue-800 border-blue-200',
  completed: 'bg-green-100 text-green-800 border-green-200',
  cancelled: 'bg-red-100 text-red-800 border-red-200',
}

export default function EnquiryModal({ enquiry, isOpen, onClose, onUpdate }: EnquiryModalProps) {
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [copiedPhone, setCopiedPhone] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [isSaving, setIsSaving] = useState(false)

  // Edit fields state
  const [name, setName] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [message, setMessage] = useState('')

  useEffect(() => {
    if (enquiry) {
      setName(enquiry.name)
      setCompanyName(enquiry.company_name || '')
      setEmail(enquiry.email)
      setPhone(enquiry.phone)
      setAddress(enquiry.address || '')
      setMessage(enquiry.message)
      setIsEditing(false)
    }
  }, [enquiry, isOpen])

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

  const handleStatusChange = async (newStatus: 'pending' | 'accepted' | 'completed' | 'cancelled') => {
    setIsSaving(true)
    const res = await updateEnquiryStatus(enquiry.id, newStatus)
    setIsSaving(false)

    if (res.success) {
      const updated: Enquiry = {
        ...enquiry,
        status: newStatus,
      }
      onUpdate(updated)
      toast.success(res.message)
    } else {
      toast.error(res.error || res.message)
    }
  }

  const handleSaveDetails = async () => {
    if (!name.trim() || !email.trim() || !phone.trim() || !message.trim()) {
      toast.error('Name, Email, Phone, and Message are required.')
      return
    }

    setIsSaving(true)
    const updateData: Partial<ContactFormData> = {
      name,
      company_name: companyName || undefined,
      email,
      phone,
      address: address || undefined,
      message,
    }

    const res = await updateEnquiry(enquiry.id, updateData)
    setIsSaving(false)

    if (res.success) {
      const updated: Enquiry = {
        ...enquiry,
        name,
        company_name: companyName || null,
        email,
        phone,
        address: address || null,
        message,
      }
      onUpdate(updated)
      setIsEditing(false)
      toast.success(res.message)
    } else {
      toast.error(res.error || res.message)
    }
  }

  const formattedDate = format(new Date(enquiry.created_at), 'PPP p')

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-xl rounded-3xl p-6 overflow-y-auto max-h-[90vh]">
        <DialogHeader>
          <div className="flex items-center justify-between pr-6">
            <div>
              <DialogTitle className="text-xl font-bold text-gray-900" style={{ fontFamily: 'var(--font-plus-jakarta)' }}>
                Enquiry Details
              </DialogTitle>
              <DialogDescription className="text-xs text-gray-400">
                Submitted on {formattedDate}
              </DialogDescription>
            </div>
            <div>
              <Badge className={`capitalize border font-semibold px-2.5 py-0.5 rounded-full text-xs ${statusColors[enquiry.status] || ''}`}>
                {enquiry.status}
              </Badge>
            </div>
          </div>
        </DialogHeader>

        {/* Status Actions Bar */}
        <div className="p-3 rounded-2xl bg-gray-50 border border-gray-100 flex flex-wrap gap-2 items-center justify-between mt-2">
          <span className="text-xs font-bold text-gray-500 uppercase tracking-wider pl-1">
            Status Actions:
          </span>
          <div className="flex flex-wrap gap-1.5">
            {enquiry.status !== 'accepted' && (
              <Button
                size="sm"
                variant="outline"
                disabled={isSaving}
                className="h-8 rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100 border-blue-200 text-xs font-semibold flex items-center gap-1"
                onClick={() => handleStatusChange('accepted')}
              >
                <CheckSquare className="h-3.5 w-3.5" /> Accept
              </Button>
            )}
            {enquiry.status !== 'completed' && (
              <Button
                size="sm"
                variant="outline"
                disabled={isSaving}
                className="h-8 rounded-lg bg-green-50 text-green-700 hover:bg-green-100 border-green-200 text-xs font-semibold flex items-center gap-1"
                onClick={() => handleStatusChange('completed')}
              >
                <Check className="h-3.5 w-3.5" /> Complete
              </Button>
            )}
            {enquiry.status !== 'cancelled' && (
              <Button
                size="sm"
                variant="outline"
                disabled={isSaving}
                className="h-8 rounded-lg bg-red-50 text-red-700 hover:bg-red-100 border-red-200 text-xs font-semibold flex items-center gap-1"
                onClick={() => handleStatusChange('cancelled')}
              >
                <XSquare className="h-3.5 w-3.5" /> Cancel
              </Button>
            )}
            {enquiry.status !== 'pending' && (
              <Button
                size="sm"
                variant="ghost"
                disabled={isSaving}
                className="h-8 rounded-lg text-gray-500 hover:bg-gray-100 text-xs font-semibold"
                onClick={() => handleStatusChange('pending')}
              >
                Reset to Pending
              </Button>
            )}
          </div>
        </div>

        {/* Details Card */}
        <div className="space-y-6 my-4">
          {isEditing ? (
            // Edit Mode Fields
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="edit-name">Client Name</Label>
                  <Input
                    id="edit-name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="rounded-xl border-gray-200"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="edit-company">Company</Label>
                  <Input
                    id="edit-company"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    className="rounded-xl border-gray-200"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="edit-email">Email Address</Label>
                  <Input
                    id="edit-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="rounded-xl border-gray-200"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="edit-phone">Phone Number</Label>
                  <Input
                    id="edit-phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="rounded-xl border-gray-200"
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="edit-address">Property Address</Label>
                <Input
                  id="edit-address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="rounded-xl border-gray-200"
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="edit-message">Message / Requirements</Label>
                <Textarea
                  id="edit-message"
                  value={message}
                  rows={4}
                  onChange={(e) => setMessage(e.target.value)}
                  className="rounded-xl border-gray-200 resize-none"
                />
              </div>
            </div>
          ) : (
            // View Mode Fields
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Name Summary */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100 sm:col-span-2">
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
          )}
        </div>

        <DialogFooter className="gap-2 sm:gap-0 border-t border-gray-100 pt-4">
          <div className="flex items-center justify-between w-full">
            {/* Left toggle Edit/Save */}
            <div>
              {isEditing ? (
                <div className="flex gap-2">
                  <Button
                    onClick={handleSaveDetails}
                    disabled={isSaving}
                    className="rounded-xl bg-blue-600 text-white hover:bg-blue-500 flex items-center gap-1.5"
                  >
                    {isSaving ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <Save className="h-4 w-4" />
                    )}
                    Save Details
                  </Button>
                  <Button
                    onClick={() => setIsEditing(false)}
                    variant="outline"
                    className="rounded-xl border-gray-200"
                  >
                    Cancel
                  </Button>
                </div>
              ) : (
                <Button
                  onClick={() => setIsEditing(true)}
                  variant="outline"
                  className="rounded-xl border-gray-200 flex items-center gap-1.5"
                >
                  <Edit2 className="h-4 w-4" /> Edit Details
                </Button>
              )}
            </div>

            {/* Right Close */}
            <Button onClick={onClose} className="rounded-xl bg-gray-900 text-white hover:bg-gray-800">
              Close
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
