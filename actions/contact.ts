'use server'

import { createClient, createAdminClient } from '@/supabase/server'
import { contactFormSchema } from '@/lib/validations'
import { ActionResponse, ContactFormData } from '@/types'
import { sendEmailNotification, sendWhatsAppNotification } from '@/lib/notifications'

export async function submitContactForm(
  data: ContactFormData
): Promise<ActionResponse> {
  try {
    // Validate data on server side
    const validated = contactFormSchema.safeParse(data)

    if (!validated.success) {
      return {
        success: false,
        message: 'Validation failed',
        error: validated.error.issues[0]?.message || 'Invalid form data',
      }
    }

    // Use admin client to bypass RLS for public form submissions
    const supabase = createAdminClient()

    const { error } = await supabase.from('contact_enquiries').insert([
      {
        name: validated.data.name,
        company_name: validated.data.company_name || null,
        email: validated.data.email,
        phone: validated.data.phone,
        address: validated.data.address || null,
        message: validated.data.message || '',
      },
    ])

    if (error) {
      console.error('Supabase error:', error)
      return {
        success: false,
        message: 'Failed to submit enquiry',
        error: 'Database error. Please try again.',
      }
    }

    // Fire notifications in parallel — errors here don't fail the user submission
    await Promise.allSettled([
      sendEmailNotification(validated.data),
      sendWhatsAppNotification(validated.data),
    ])

    return {
      success: true,
      message:
        'Thank you for your enquiry! We\'ll get back to you within 2 hours.',
    }
  } catch (err) {
    console.error('Unexpected error:', err)
    return {
      success: false,
      message: 'An unexpected error occurred',
      error: 'Please try again later or call us directly.',
    }
  }
}

export async function getEnquiries() {
  const supabase = await createClient()

  const { data, error } = await supabase
    .from('contact_enquiries')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    throw new Error(error.message)
  }

  return data
}

export async function deleteEnquiry(id: string): Promise<ActionResponse> {
  const supabase = await createClient()

  const { error } = await supabase
    .from('contact_enquiries')
    .delete()
    .eq('id', id)

  if (error) {
    return { success: false, message: 'Failed to delete enquiry', error: error.message }
  }

  return { success: true, message: 'Enquiry deleted successfully' }
}

export async function getDashboardStats() {
  const supabase = await createClient()

  const now = new Date()
  const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate()).toISOString()
  const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1).toISOString()

  const [totalResult, todayResult, monthResult] = await Promise.all([
    supabase.from('contact_enquiries').select('id', { count: 'exact', head: true }),
    supabase
      .from('contact_enquiries')
      .select('id', { count: 'exact', head: true })
      .gte('created_at', startOfToday),
    supabase
      .from('contact_enquiries')
      .select('id', { count: 'exact', head: true })
      .gte('created_at', startOfMonth),
  ])

  return {
    total: totalResult.count ?? 0,
    today: todayResult.count ?? 0,
    thisMonth: monthResult.count ?? 0,
  }
}

export async function updateEnquiryStatus(
  id: string,
  status: 'pending' | 'accepted' | 'completed' | 'cancelled'
): Promise<ActionResponse> {
  const supabase = await createClient()

  const { error } = await supabase
    .from('contact_enquiries')
    .update({ status })
    .eq('id', id)

  if (error) {
    return { success: false, message: 'Failed to update status', error: error.message }
  }

  return { success: true, message: `Enquiry marked as ${status}` }
}

export async function updateEnquiry(
  id: string,
  data: Partial<ContactFormData>
): Promise<ActionResponse> {
  const supabase = await createClient()

  const { error } = await supabase
    .from('contact_enquiries')
    .update(data)
    .eq('id', id)

  if (error) {
    return { success: false, message: 'Failed to update enquiry details', error: error.message }
  }

  return { success: true, message: 'Enquiry updated successfully' }
}
