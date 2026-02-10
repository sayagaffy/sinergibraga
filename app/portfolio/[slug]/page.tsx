import { Metadata, ResolvingMetadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, MapPin, Calendar, CheckCircle2 } from 'lucide-react'

import prisma from '@/lib/prisma'
import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { TechSpecs } from '@/components/geo/TechSpecs'

interface Props {
  params: { slug: string }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const item = await prisma.portfolioItem.findUnique({
    where: { slug: params.slug },
  })

  if (!item) {
    return {
      title: 'Proyek Tidak Ditemukan',
    }
  }

  return {
    title: `${item.title} - Studi Kasus SBM`,
    description: item.description,
    keywords: [item.category, item.client || "", item.location || "Indonesia", "SBM Portfolio"],
    openGraph: {
      title: `${item.title} | Portfolio Sinergi Braga Mandiri`,
      description: item.description,
      type: 'article',
      images: item.imageUrl ? [item.imageUrl] : [],
    }
  }
}

export default async function ProjectDetailPage({ params }: Props) {
  const item = await prisma.portfolioItem.findUnique({
    where: { slug: params.slug },
  })

  if (!item) {
    notFound()
  }

  // Schema.org JSON-LD for CreativeWork/Project
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Project",
    "name": item.title,
    "description": item.description,
    "keywords": item.category,
    "locationCreated": {
      "@type": "Place",
      "name": item.location
    },
    "dateCreated": item.year.toString(),
    "provider": {
      "@type": "Organization",
      "name": "PT Sinergi Braga Mandiri",
      "url": "https://sinergibragamandiri.com"
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Header */}
      <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
        {item.imageUrl && (
          <div className="absolute inset-0 z-0 opacity-20">
            <Image
              src={item.imageUrl}
              alt={item.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}
        <div className="container px-4 md:px-6 relative z-10">
          <Link href="/portfolio" className="inline-flex items-center text-slate-400 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Kembali ke Portofolio
          </Link>
          <div className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider text-sbm-blue uppercase bg-sbm-blue/10 rounded border border-sbm-blue/20 backdrop-blur-sm">
            {item.category}
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 max-w-4xl">{item.title}</h1>
          <div className="flex flex-wrap gap-6 text-sm text-slate-300 mt-6">
            {item.client && (
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-sbm-teal" />
                <span className="font-semibold">Klien: {item.client}</span>
              </div>
            )}
            {item.location && (
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-sbm-teal" />
                <span>{item.location}</span>
              </div>
            )}
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-sbm-teal" />
              <span>{item.year}</span>
            </div>
          </div>
        </div>
      </section>

      <div className="container px-4 md:px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content: Case Study Format */}
          <div className="lg:col-span-2 space-y-12">

            {/* Challenge */}
            <Section>
              <div className="border-l-4 border-l-red-500 pl-6 py-2 bg-red-50 dark:bg-red-900/10 rounded-r-lg">
                <h2 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">Tantangan</h2>
                <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                  {item.challenge || "Tantangan spesifik proyek ini sedang diperbarui."}
                </p>
              </div>
            </Section>

            {/* Solution */}
            <Section>
              <div className="border-l-4 border-l-sbm-blue pl-6 py-2 bg-blue-50 dark:bg-blue-900/10 rounded-r-lg">
                <h2 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">Solusi Teknis</h2>
                <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                  {item.solution || "Solusi teknis proyek ini sedang diperbarui."}
                </p>
              </div>
            </Section>

            {/* Result */}
            <Section>
              <div className="border-l-4 border-l-sbm-teal pl-6 py-2 bg-teal-50 dark:bg-teal-900/10 rounded-r-lg">
                <h2 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">Hasil & Dampak</h2>
                <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                  {item.result || "Hasil akhir proyek ini memuaskan klien dan memenuhi standar regulasi."}
                </p>
              </div>
            </Section>

          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <Card className="bg-slate-900 text-white">
              <h3 className="font-bold text-xl mb-6">Ringkasan Proyek</h3>
              <ul className="space-y-4">
                <li className="flex justify-between border-b border-slate-700 pb-2">
                  <span className="text-slate-400">Tahun</span>
                  <span className="font-semibold">{item.year}</span>
                </li>
                <li className="flex justify-between border-b border-slate-700 pb-2">
                  <span className="text-slate-400">Lokasi</span>
                  <span className="font-semibold text-right max-w-[150px]">{item.location}</span>
                </li>
                <li className="flex justify-between border-b border-slate-700 pb-2">
                  <span className="text-slate-400">Kategori</span>
                  <span className="font-semibold">{item.category}</span>
                </li>
              </ul>
            </Card>

            <div className="p-6 rounded-xl bg-gradient-to-br from-sbm-blue to-sbm-teal text-white text-center">
              <h3 className="font-bold text-xl mb-2">Ingin Hasil Serupa?</h3>
              <p className="text-blue-100 text-sm mb-6">
                Tim kami siap membantu merealisasikan proyek lingkungan Anda dengan standar tertinggi.
              </p>
              <Link href="/contact">
                <Button className="w-full bg-white text-sbm-blue hover:bg-slate-100 border-none shadow-lg">
                  Hubungi Kami
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
