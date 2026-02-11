import { ExpertInsight } from "@/components/geo/ExpertInsight"
import { FAQSection } from "@/components/geo/FAQSection"
import { GeoFactSheet } from "@/components/geo/GeoFactSheet"
import { GlossarySection } from "@/components/geo/GlossarySection"
import { TechSpecs } from "@/components/geo/TechSpecs"
import { SchemaOrg } from "@/components/seo/SchemaOrg"
import { Button } from "@/components/ui/Button"
import { Card } from "@/components/ui/Card"
import { Section } from "@/components/ui/Section"
import prisma from "@/lib/prisma"
import { ArrowLeft, CheckCircle2 } from "lucide-react"
import { Metadata } from 'next'
import Link from "next/link"
import { notFound } from 'next/navigation'

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
      faqs: true,
      glossaryTerms: true,
    },
  })

  if (!serviceRaw) {
    notFound()
  }

  // Parse JSON fields (adapt for Postgres schema where features/statistics are Json)
  let features: string[] = []
  try {
    if (typeof serviceRaw.features === 'string') {
      features = JSON.parse(serviceRaw.features)
    } else {
      features = serviceRaw.features as string[] || []
    }
  } catch (e) {
    console.error("Failed to parse features", e)
  }

  let statistics: Record<string, string | number> | null = null
  try {
    if (typeof serviceRaw.statistics === 'string') {
      statistics = JSON.parse(serviceRaw.statistics)
    } else {
      statistics = serviceRaw.statistics as Record<string, string | number> | null
    }
  } catch (e) {
    console.error("Failed to parse statistics", e)
  }

  // Prepare data for SchemaOrg
  const schemaData = {
    ...serviceRaw,
    features,
    statistics
  }

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <SchemaOrg type="Service" data={schemaData} />

      {/* Header - Light Theme */}
      <div className="bg-white border-b border-slate-200 pt-32 pb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-sbm-blue/5 skew-x-12" />
        <div className="container mx-auto px-6 relative z-10">
          <Link href="/services" className="inline-flex items-center text-slate-500 hover:text-sbm-blue mb-6 transition-colors font-medium">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Kembali ke Layanan
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 max-w-4xl text-slate-900">{serviceRaw.title}</h1>
          <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">{serviceRaw.description}</p>
        </div>
      </div>

      <div className="container mx-auto px-6 -mt-10 relative z-20">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12 pt-10">

            {/* GEO Fact Sheet */}
            <div id="fact-sheet">
              <GeoFactSheet
                statistics={statistics}
                citations={serviceRaw.citations}
                expertQuote={serviceRaw.expert?.expertQuote}
              />
            </div>

            {/* Technical Description */}
            <Section id="technical-desc" className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
              <h2 className="text-2xl font-bold mb-4 text-slate-900">Deskripsi Teknis</h2>
              <div className="prose prose-lg prose-slate max-w-none">
                <p className="text-slate-700 leading-relaxed">
                  {serviceRaw.geoFacts}
                </p>
              </div>
            </Section>

            {/* Tech Specs / Features */}
            {features && features.length > 0 && (
              <div id="features">
                <TechSpecs specs={features} title="Lingkup Layanan & Fitur" />
              </div>
            )}

            {/* Expert Insight */}
            {serviceRaw.expert && (
              <Section id="expert-insight">
                <h2 className="text-2xl font-bold mb-6 text-slate-900">Wawasan Ahli</h2>
                <ExpertInsight expert={serviceRaw.expert} />
              </Section>
            )}

            {/* FAQ Section */}
            {serviceRaw.faqs && serviceRaw.faqs.length > 0 && (
              <FAQSection faqs={serviceRaw.faqs} />
            )}

            {/* Glossary Section */}
            {serviceRaw.glossaryTerms && serviceRaw.glossaryTerms.length > 0 && (
              <GlossarySection terms={serviceRaw.glossaryTerms} />
            )}

          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <Card className="bg-white border-t-4 border-t-sbm-blue sticky top-24 shadow-lg border-x border-b border-slate-200">
              <h3 className="font-bold text-xl mb-6 text-slate-900">Mengapa Memilih Kami?</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-sbm-teal mt-0.5" />
                  <span className="text-slate-600 text-sm">Tim Ahli Bersertifikat (KTPA/ATPA)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-sbm-teal mt-0.5" />
                  <span className="text-slate-600 text-sm">Kepatuhan Regulasi 100%</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-sbm-teal mt-0.5" />
                  <span className="text-slate-600 text-sm">Pendampingan Hingga Izin Terbit</span>
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
