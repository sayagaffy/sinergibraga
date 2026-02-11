import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import prisma from "@/lib/prisma"
import { GeoFactSheet } from "@/components/geo/GeoFactSheet"
import { TechSpecs } from "@/components/geo/TechSpecs"
import { SchemaOrg } from "@/components/seo/SchemaOrg"
import { ExpertInsight } from "@/components/geo/ExpertInsight"
import { Section } from "@/components/ui/Section"
import { Card } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import Link from "next/link"
import { ArrowLeft, CheckCircle2 } from "lucide-react"
import { Expert, Citation } from "@prisma/client"

type ServiceWithRelations = {
  id: string;
  title: string;
  slug: string;
  description: string;
  features: string[];
  geoFacts: string;
  icon: string;
  statistics: any;
  expert: Expert | null;
  citations: Citation[];
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const service = await prisma.service.findUnique({
    where: { slug: params.slug },
  })

  if (!service) {
    return {
      title: 'Layanan Tidak Ditemukan - SBM',
    }
  }

  return {
    title: `${service.title} - Layanan SBM`,
    description: service.description,
  }
}

export default async function ServicePage({ params }: { params: { slug: string } }) {
  const serviceRaw = await prisma.service.findUnique({
    where: { slug: params.slug },
    include: {
      expert: true,
      citations: true,
    },
  })

  if (!serviceRaw) {
    notFound()
  }

  // Cast to our type safely
  const service = serviceRaw as unknown as ServiceWithRelations;

  // Ensure statistics is treated as a Record<string, string | number>
  const stats = service.statistics as Record<string, string | number> | null;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-20">
      <SchemaOrg type="Service" data={service} />

      {/* Header */}
      <div className="bg-slate-900 pt-32 pb-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-sbm-blue/20" />
        <div className="container mx-auto px-6 relative z-10">
          <Link href="/services" className="inline-flex items-center text-slate-400 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Kembali ke Layanan
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 max-w-4xl">{service.title}</h1>
          <p className="text-xl text-slate-300 max-w-2xl leading-relaxed">{service.description}</p>
        </div>
      </div>

      <div className="container mx-auto px-6 -mt-16 relative z-20">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">

            {/* GEO Fact Sheet */}
            <GeoFactSheet
              statistics={stats}
              citations={service.citations}
            />

            {/* Technical Description */}
            <Section>
              <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Deskripsi Teknis</h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  {service.geoFacts}
                </p>
              </div>
            </Section>

            {/* Tech Specs / Features */}
            {service.features && service.features.length > 0 && (
              <TechSpecs specs={service.features} title="Lingkup Layanan & Fitur" />
            )}

            {/* Expert Insight */}
            {service.expert && (
              <Section>
                 <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">Wawasan Ahli</h2>
                <ExpertInsight expert={service.expert} />
              </Section>
            )}

          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <Card className="bg-white dark:bg-slate-900 border-t-4 border-t-sbm-blue sticky top-24 shadow-lg">
              <h3 className="font-bold text-xl mb-6 text-slate-900 dark:text-white">Mengapa Memilih Kami?</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-sbm-teal mt-0.5" />
                  <span className="text-slate-600 dark:text-slate-300 text-sm">Tim Ahli Bersertifikat (KTPA/ATPA)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-sbm-teal mt-0.5" />
                  <span className="text-slate-600 dark:text-slate-300 text-sm">Kepatuhan Regulasi 100%</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-sbm-teal mt-0.5" />
                  <span className="text-slate-600 dark:text-slate-300 text-sm">Pendampingan Hingga Izin Terbit</span>
                </li>
              </ul>

              <div className="space-y-3">
                <Link href="/contact" className="block w-full">
                  <Button className="w-full bg-sbm-blue hover:bg-blue-700 text-white shadow-lg shadow-blue-900/20 py-6">
                    Konsultasi Gratis
                  </Button>
                </Link>
                <p className="text-xs text-center text-slate-500">
                  Respon cepat dalam 1x24 jam kerja.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
