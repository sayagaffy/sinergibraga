import { Metadata, ResolvingMetadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, CheckCircle2 } from 'lucide-react'

import prisma from '@/lib/prisma'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { GeoFactSheet } from '@/components/geo/GeoFactSheet'
import { TechSpecs } from '@/components/geo/TechSpecs'

interface Props {
  params: { slug: string }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const service = await prisma.service.findUnique({
    where: { slug: params.slug },
  })

  if (!service) {
    return {
      title: 'Layanan Tidak Ditemukan',
    }
  }

  return {
    title: `${service.title} - Layanan Lingkungan Bandung`,
    description: service.geoFacts.substring(0, 160),
    keywords: [service.title, "Konsultan Lingkungan", "Bandung", "Jawa Barat", "SBM", ...service.regulations],
    openGraph: {
      title: `${service.title} | PT Sinergi Braga Mandiri`,
      description: service.description,
      type: 'article',
    }
  }
}

export default async function ServiceDetailPage({ params }: Props) {
  const service = await prisma.service.findUnique({
    where: { slug: params.slug },
  })

  if (!service) {
    notFound()
  }

  // Schema.org JSON-LD
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "provider": {
      "@type": "Organization",
      "name": "PT Sinergi Braga Mandiri",
      "url": "https://sinergibragamandiri.com"
    },
    "description": service.description,
    "areaServed": "Jawa Barat",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Rincian Layanan",
      "itemListElement": service.features.map(feature => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": feature
        }
      }))
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Header */}
      <section className="bg-sbm-blue text-white py-16">
        <div className="container px-4 md:px-6">
          <Link href="/services" className="inline-flex items-center text-blue-100 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Kembali ke Layanan
          </Link>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">{service.title}</h1>
          <p className="text-xl text-blue-100 max-w-3xl">{service.description}</p>
        </div>
      </section>

      <div className="container px-4 md:px-6 py-12 space-y-12">
        {/* GEO Fact Sheet Section */}
        <Section>
           <GeoFactSheet
             statistics={service.statistics as any}
             regulations={service.regulations}
             expertQuote={service.expertQuote}
           />
        </Section>

        <div className="grid md:grid-cols-[2fr_1fr] gap-12">
           {/* Main Content */}
           <div className="space-y-8">
             <Section>
               <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Deskripsi & Lingkup Teknis</h2>
               <div className="prose prose-lg text-slate-600 dark:text-slate-300 max-w-none">
                 <p className="lead">{service.geoFacts}</p>
                 <p>
                   Layanan ini mencakup berbagai aspek teknis dan administratif untuk memastikan kepatuhan penuh terhadap regulasi lingkungan hidup di Indonesia. Tim ahli kami akan mendampingi Anda mulai dari tahap pra-konstruksi hingga operasional.
                 </p>
               </div>
             </Section>

             <Section>
               <TechSpecs specs={service.features} title="Lingkup Pekerjaan" />
             </Section>
           </div>

           {/* Sidebar CTA */}
           <div className="space-y-6">
             <Card className="sticky top-24 border-t-4 border-t-sbm-teal">
               <h3 className="text-lg font-bold mb-2">Butuh Layanan Ini?</h3>
               <p className="text-sm text-slate-500 mb-6">
                 Dapatkan konsultasi gratis dan penawaran harga terbaik untuk kebutuhan proyek Anda.
               </p>
               <div className="space-y-3">
                 <Link href="/contact">
                   <Button className="w-full">Minta Penawaran</Button>
                 </Link>
                 <Link href="https://wa.me/6281112149222">
                   <Button variant="outline" className="w-full">Chat WhatsApp</Button>
                 </Link>
               </div>
             </Card>
           </div>
        </div>
      </div>
    </div>
  )
}
