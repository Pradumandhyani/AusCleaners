import { z } from 'zod'

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters'),
  company_name: z.string().max(100, 'Company name must be less than 100 characters').optional(),
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Please enter a valid email address'),
  phone: z
    .string()
    .min(1, 'Phone number is required')
    .regex(
      /^\+?[\d\s\-().]{4,20}$/,
      'Please enter a valid phone number'
    ),
  address: z.string().max(200, 'Address must be less than 200 characters').optional(),
  message: z
    .string()
    .max(2000, 'Message must be less than 2000 characters')
    .optional(),
})

export type ContactFormSchema = z.infer<typeof contactFormSchema>

export const loginSchema = z.object({
  email: z.string().email('Please enter a valid email'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
})

export type LoginSchema = z.infer<typeof loginSchema>
