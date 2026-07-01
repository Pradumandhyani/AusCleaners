import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://auswidecleaning.com.au'

  const routes = ['', '/about', '/services', '/gallery', '/faq', '/contact'].map(
    (route) => ({
      url: `${siteUrl}${route}`,
      lastModified: new Date().toISOString().split('T')[0],
      changeFrequency: 'monthly' as const,
      priority: route === '' ? 1.0 : 0.8,
    })
  )

  return routes
}
