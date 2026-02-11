import { getSitemapDataQuery } from '@/lib/queries'
import { client } from '@/lib/sanity'
import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://sinergibragamandiri.com'

  // Fetch dynamic routes
  const { services, portfolios } = await client.fetch(getSitemapDataQuery)

  const serviceRoutes = services.map((service: any) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(service._updatedAt),
    changeFrequency: 'weekly' as const,
    priority: 1.0,
  }))

  const portfolioRoutes = portfolios.map((item: any) => ({
    url: `${baseUrl}/portfolio/${item.slug}`,
    lastModified: new Date(item._updatedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    ...serviceRoutes,
    ...portfolioRoutes,
  ]
}
