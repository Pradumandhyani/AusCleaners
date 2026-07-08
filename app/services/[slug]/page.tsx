import { notFound } from 'next/navigation'
import { LOCALIZED_SERVICES } from '@/lib/services-seo'
import { constructMetadata } from '@/lib/seo'
import ServiceDetailClient from './ServiceDetailClient'

type Params = Promise<{ slug: string }>

export async function generateStaticParams() {
  return Object.keys(LOCALIZED_SERVICES).map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params
  const data = LOCALIZED_SERVICES[slug]

  if (!data) {
    return {}
  }

  return constructMetadata({
    title: data.seoTitle,
    description: data.seoDescription,
    canonicalPath: `/services/${slug}`,
    keywords: [data.primaryKeyword, `${data.title} Suburbs`, `${data.title} Suburb list`],
  })
}

export default async function ServicePage({ params }: { params: Params }) {
  const { slug } = await params
  const data = LOCALIZED_SERVICES[slug]

  if (!data) {
    notFound()
  }

  return <ServiceDetailClient data={data} />
}
