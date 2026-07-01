import type { Metadata } from 'next'
import LoginClient from './LoginClient'

export const metadata: Metadata = {
  title: 'Admin Login | SparkleClean Pro',
  description: 'Admin dashboard login',
  robots: { index: false, follow: false },
}

export default function LoginPage() {
  return <LoginClient />
}
