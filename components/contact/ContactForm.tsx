'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion } from 'framer-motion'
import { toast } from 'sonner'
import { Loader2, Send, CheckCircle2 } from 'lucide-react'
import { contactFormSchema, ContactFormSchema } from '@/lib/validations'
import { submitContactForm } from '@/actions/contact'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'

interface ContactFormProps {
  variant?: 'default' | 'compact'
}

export default function ContactForm({ variant = 'default' }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
  })

  async function onSubmit(data: ContactFormSchema) {
    const result = await submitContactForm(data)

    if (result.success) {
      setSubmitted(true)
      toast.success(result.message)
      reset()
      setTimeout(() => setSubmitted(false), 5000)
    } else {
      toast.error(result.error || result.message)
    }
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center text-center py-16 px-8"
      >
        <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-6">
          <CheckCircle2 className="h-10 w-10 text-green-500" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-3">Enquiry Sent!</h3>
        <p className="text-gray-600 max-w-md">
          Thank you for contacting SparkleClean Pro. We&apos;ll get back to you within 2 hours during business hours.
        </p>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      {/* Name + Company */}
      <div className={variant === 'compact' ? 'space-y-5' : 'grid grid-cols-1 sm:grid-cols-2 gap-5'}>
        <div className="space-y-1.5">
          <Label htmlFor="name" className="text-sm font-medium text-gray-700">
            Full Name <span className="text-red-500">*</span>
          </Label>
          <Input
            id="name"
            placeholder="John Smith"
            {...register('name')}
            className={`h-11 rounded-xl border-gray-200 focus:border-[#1E88E5] focus:ring-[#1E88E5] ${errors.name ? 'border-red-400' : ''}`}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
          {errors.name && (
            <p id="name-error" className="text-xs text-red-500 mt-1">{errors.name.message}</p>
          )}
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="company_name" className="text-sm font-medium text-gray-700">
            Company Name
          </Label>
          <Input
            id="company_name"
            placeholder="Acme Pty Ltd (optional)"
            {...register('company_name')}
            className="h-11 rounded-xl border-gray-200 focus:border-[#1E88E5] focus:ring-[#1E88E5]"
          />
        </div>
      </div>

      {/* Email + Phone */}
      <div className={variant === 'compact' ? 'space-y-5' : 'grid grid-cols-1 sm:grid-cols-2 gap-5'}>
        <div className="space-y-1.5">
          <Label htmlFor="email" className="text-sm font-medium text-gray-700">
            Email Address <span className="text-red-500">*</span>
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="john@example.com"
            {...register('email')}
            className={`h-11 rounded-xl border-gray-200 focus:border-[#1E88E5] ${errors.email ? 'border-red-400' : ''}`}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email && (
            <p id="email-error" className="text-xs text-red-500 mt-1">{errors.email.message}</p>
          )}
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
            Phone Number <span className="text-red-500">*</span>
          </Label>
          <Input
            id="phone"
            type="tel"
            placeholder="0400 000 000"
            {...register('phone')}
            className={`h-11 rounded-xl border-gray-200 focus:border-[#1E88E5] ${errors.phone ? 'border-red-400' : ''}`}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? 'phone-error' : undefined}
          />
          {errors.phone && (
            <p id="phone-error" className="text-xs text-red-500 mt-1">{errors.phone.message}</p>
          )}
        </div>
      </div>

      {/* Address */}
      <div className="space-y-1.5">
        <Label htmlFor="address" className="text-sm font-medium text-gray-700">
          Property Address
        </Label>
        <Input
          id="address"
          placeholder="123 Example Street, Melbourne VIC 3000"
          {...register('address')}
          className="h-11 rounded-xl border-gray-200 focus:border-[#1E88E5]"
        />
      </div>

      {/* Message */}
      <div className="space-y-1.5">
        <Label htmlFor="message" className="text-sm font-medium text-gray-700">
          Message / Service Required <span className="text-red-500">*</span>
        </Label>
        <Textarea
          id="message"
          rows={4}
          placeholder="Tell us about your cleaning needs, preferred schedule, property size..."
          {...register('message')}
          className={`rounded-xl border-gray-200 focus:border-[#1E88E5] resize-none ${errors.message ? 'border-red-400' : ''}`}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
        />
        {errors.message && (
          <p id="message-error" className="text-xs text-red-500 mt-1">{errors.message.message}</p>
        )}
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full h-12 rounded-xl bg-gradient-to-r from-[#1E88E5] to-[#1565C0] text-white font-semibold text-base shadow-lg shadow-blue-200 hover:shadow-xl hover:shadow-blue-300 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-5 w-5 mr-2 animate-spin" />
            Sending Enquiry...
          </>
        ) : (
          <>
            <Send className="h-5 w-5 mr-2" />
            Send Enquiry
          </>
        )}
      </Button>

      <p className="text-xs text-gray-500 text-center">
        We respond within 2 hours during business hours. Your information is kept private.
      </p>
    </form>
  )
}
