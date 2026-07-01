'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion } from 'framer-motion'
import { toast } from 'sonner'
import { Loader2, LogIn, Sparkles, Eye, EyeOff } from 'lucide-react'
import { loginSchema, LoginSchema } from '@/lib/validations'
import { createClient } from '@/supabase/client'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'

export default function LoginClient() {
  const [showPassword, setShowPassword] = useState(false)
  const router = useRouter()
  const supabase = createClient()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  })

  async function onSubmit(data: LoginSchema) {
    const { error } = await supabase.auth.signInWithPassword({
      email: data.email,
      password: data.password,
    })

    if (error) {
      toast.error(error.message || 'Invalid credentials. Please try again.')
      return
    }

    toast.success('Logged in successfully!')
    router.push('/dashboard')
    router.refresh()
  }

  return (
    <div className="min-h-screen gradient-hero flex items-center justify-center px-4">
      {/* Background dots */}
      <div className="absolute inset-0 opacity-5"
        style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '32px 32px' }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative w-full max-w-md"
      >
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 mb-4">
            <Sparkles className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-white" style={{ fontFamily: 'var(--font-plus-jakarta)' }}>
            Auswide cleaning
          </h1>
          <p className="text-blue-200 text-sm mt-1">Admin Dashboard</p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-3xl p-8 shadow-2xl shadow-blue-900/30">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Sign In to Dashboard</h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
            <div className="space-y-1.5">
              <Label htmlFor="login-email">Email Address</Label>
              <Input
                id="login-email"
                type="email"
                placeholder="admin@example.com"
                {...register('email')}
                className={`h-11 rounded-xl ${errors.email ? 'border-red-400' : ''}`}
              />
              {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="login-password">Password</Label>
              <div className="relative">
                <Input
                  id="login-password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  {...register('password')}
                  className={`h-11 rounded-xl pr-10 ${errors.password ? 'border-red-400' : ''}`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
              {errors.password && <p className="text-xs text-red-500">{errors.password.message}</p>}
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-12 rounded-xl bg-gradient-to-r from-[#1E88E5] to-[#1565C0] text-white font-semibold shadow-lg shadow-blue-200 hover:scale-[1.02] transition-all duration-300"
            >
              {isSubmitting ? (
                <><Loader2 className="h-4 w-4 mr-2 animate-spin" /> Signing In...</>
              ) : (
                <><LogIn className="h-4 w-4 mr-2" /> Sign In</>
              )}
            </Button>
          </form>
        </div>

        <p className="text-center text-blue-200/60 text-xs mt-6">
          Protected admin area. Unauthorized access is prohibited.
        </p>
      </motion.div>
    </div>
  )
}
