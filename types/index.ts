// Contact form types
export interface ContactFormData {
  name: string
  company_name?: string
  email: string
  phone: string
  address?: string
  message?: string
}

// Enquiry from Supabase
export interface Enquiry {
  id: string
  name: string
  company_name: string | null
  email: string
  phone: string
  address: string | null
  message: string
  status: 'pending' | 'accepted' | 'completed' | 'cancelled'
  created_at: string
}

// Service type
export interface Service {
  id: string
  title: string
  description: string
  icon: string
  features: string[]
  price?: string
}

// Testimonial type
export interface Testimonial {
  id: string
  name: string
  role: string
  content: string
  rating: number
  avatar?: string
}

// FAQ type
export interface FAQItem {
  question: string
  answer: string
  category?: string
}

// Stats type
export interface DashboardStats {
  total: number
  today: number
  thisMonth: number
}

// Server action response
export interface ActionResponse {
  success: boolean
  message: string
  error?: string
}
