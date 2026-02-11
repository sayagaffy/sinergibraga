import { ExpertInsight } from "@/components/geo/ExpertInsight"
import { GeoFactSheet } from "@/components/geo/GeoFactSheet"
import { SchemaOrg } from "@/components/seo/SchemaOrg"
import { Button } from "@/components/ui/Button"
import { Card } from "@/components/ui/Card"
import { getPortfolioBySlugQuery } from "@/lib/queries"
import { client } from "@/lib/sanity"
import { ArrowLeft, ArrowUpRight, BarChart3, Building2, Calendar, CheckCircle2, Image as ImageIcon, Lightbulb, MapPin, Tag, Target, Trophy } from "lucide-react"
import { Metadata } from 'next'
import Image from "next/image"
import Link from "next/link"
import { notFound } from 'next/navigation'

type PortfolioWithRelations = {
  _id: string;
  title: string;
  slug: string;
  client: string | null;
  year: number;
  category: string;
  location: string | null;
  description: string;
  imageUrl: string | null;
  challenge: string | null;
  solution: string | null;
  result: string | null;
  expert: {
    name: string;
    role: string;
    expertQuote: string;
    photoUrl?: string | null;
    linkedinUrl?: string | null;
    credentials?: string | null;
  } | null;
  citations: Array<{
    sourceTitle: string;
    sourceUrl?: string | null;
    contextClause?: string | null;
  }> | null;
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const item = await client.fetch(getPortfolioBySlugQuery, { slug: params.slug })

  if (!item) {
    return {
      title: 'Proyek Tidak Ditemukan - SBM',
    }
  }

  return {
    title: `${item.title} - Portofolio SBM`,
    description: item.description,
  }
}

export default async function PortfolioPage({ params }: { params: { slug: string } }) {
  const item: PortfolioWithRelations = await client.fetch(getPortfolioBySlugQuery, { slug: params.slug })

  if (!item) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-slate-50 pb-24">
      <SchemaOrg type="Project" data={item} />

      {/* Hero Section - Refactored to Light Theme */}
      <div className="relative bg-white pt-32 pb-20 border-b border-slate-100 overflow-hidden">
        {/* Background Decor */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 skew-x-12 origin-top-right z-0" />
        <div className="absolute top-10 right-10 w-64 h-64 bg-sbm-blue/5 rounded-full blur-3xl z-0" />

        <div className="container mx-auto px-6 relative z-10">
          <Link
            href="/portfolio"
            className="inline-flex items-center text-slate-500 hover:text-sbm-blue mb-8 transition-colors text-sm font-medium tracking-wide uppercase group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Kembali ke Portofolio
          </Link>

          <div className="max-w-4xl space-y-6">
            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-sbm-blue border border-blue-100 text-sm font-medium">
                <Tag className="w-3.5 h-3.5" />
                {item.category}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-600 border border-slate-200 text-sm font-medium">
                <Calendar className="w-3.5 h-3.5" />
                {item.year}
              </span>
              {item.location && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-600 border border-slate-200 text-sm font-medium">
                  <MapPin className="w-3.5 h-3.5" />
                  {item.location}
                </span>
              )}
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-slate-900 text-balance">
              {item.title}
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed max-w-3xl">
              {item.description}
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-12 relative z-20">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">

          {/* Left Content Column */}
          <div className="lg:col-span-8 space-y-12">

            {/* Main Image */}
            <div className="rounded-2xl overflow-hidden shadow-xl shadow-slate-200 border border-slate-100 relative min-h-[400px]">
              {item.imageUrl ? (
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  width={1200}
                  height={800}
                  className="w-full h-auto object-cover"
                  priority
                />
              ) : (
                <div className="w-full h-80 bg-slate-100 flex items-center justify-center text-slate-400">
                  <ImageIcon className="w-12 h-12" />
                </div>
              )}
            </div>

            {/* Case Study Cards Container */}
            <div className="grid gap-8">

              {/* Challenge */}
              {item.challenge && (
                <Card className="border-l-4 border-l-red-500 overflow-hidden group">
                  <div className="flex flex-col md:flex-row items-start gap-5">
                    <div className="p-3 rounded-xl bg-red-50 text-red-500 shrink-0">
                      <Target className="w-6 h-6" />
                    </div>
                    <div className="space-y-2">
                      <h2 className="text-2xl font-bold text-slate-900">Tantangan Proyek</h2>
                      <p className="text-lg text-slate-600 leading-relaxed">
                        {item.challenge}
                      </p>
                    </div>
                  </div>
                </Card>
              )}

              {/* Solution */}
              {item.solution && (
                <Card className="border-l-4 border-l-sbm-blue overflow-hidden group">
                  <div className="flex flex-col md:flex-row items-start gap-5">
                    <div className="p-3 rounded-xl bg-blue-50 text-sbm-blue shrink-0">
                      <Lightbulb className="w-6 h-6" />
                    </div>
                    <div className="space-y-2">
                      <h2 className="text-2xl font-bold text-slate-900">Solusi Teknis</h2>
                      <p className="text-lg text-slate-600 leading-relaxed">
                        {item.solution}
                      </p>
                    </div>
                  </div>
                </Card>
              )}

              {/* Result */}
              {item.result && (
                <Card className="border-l-4 border-l-sbm-teal overflow-hidden group">
                  <div className="flex flex-col md:flex-row items-start gap-5">
                    <div className="p-3 rounded-xl bg-teal-50 text-sbm-teal shrink-0">
                      <BarChart3 className="w-6 h-6" />
                    </div>
                    <div className="space-y-2">
                      <h2 className="text-2xl font-bold text-slate-900">Hasil & Dampak</h2>
                      <p className="text-lg text-slate-600 leading-relaxed">
                        {item.result}
                      </p>
                    </div>
                  </div>
                </Card>
              )}
            </div>

            {/* Citations / Regulations */}
            {item.citations && item.citations.length > 0 && (
              <section>
                <GeoFactSheet citations={item.citations} />
              </section>
            )}

            {/* Expert Insight */}
            {item.expert && (
              <section className="pt-8 border-t border-slate-200">
                <div className="flex items-center gap-3 mb-8">
                  <h2 className="text-2xl font-bold text-slate-900">Review Ahli</h2>
                  <div className="h-px flex-1 bg-slate-200" />
                </div>
                <ExpertInsight expert={item.expert} />
              </section>
            )}

          </div>

          {/* Right Sidebar Column */}
          <div className="lg:col-span-4 space-y-8">

            {/* Project Details Card */}
            <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 sticky top-32 overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-sbm-blue to-sbm-teal w-full" />

              <div className="p-6 md:p-8 space-y-6">
                <h3 className="font-bold text-xl text-slate-900 flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-sbm-blue" />
                  Detail Proyek
                </h3>

                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-slate-100 hover:bg-slate-50 transition-colors px-2 rounded-lg -mx-2">
                    <span className="text-slate-500 text-sm font-medium">Tahun</span>
                    <span className="font-bold text-slate-900">{item.year}</span>
                  </div>

                  <div className="flex justify-between items-center py-3 border-b border-slate-100 hover:bg-slate-50 transition-colors px-2 rounded-lg -mx-2">
                    <span className="text-slate-500 text-sm font-medium">Lokasi</span>
                    <span className="font-bold text-slate-900 text-right">{item.location}</span>
                  </div>

                  <div className="flex justify-between items-center py-3 border-b border-slate-100 hover:bg-slate-50 transition-colors px-2 rounded-lg -mx-2">
                    <span className="text-slate-500 text-sm font-medium">Kategori</span>
                    <span className="font-bold text-slate-900 text-right">{item.category}</span>
                  </div>

                  {item.client && (
                    <div className="pt-3 px-2">
                      <span className="text-slate-500 text-sm font-medium block mb-1">Klien</span>
                      <span className="font-bold text-slate-900 block text-lg">{item.client}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Call to Action Area */}
              <div className="bg-slate-900 p-6 md:p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-sbm-blue/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />

                <h3 className="font-bold text-xl mb-3 leading-tight relative z-10">Hadapi Tantangan Serupa?</h3>
                <p className="text-slate-300 text-sm mb-6 leading-relaxed relative z-10">
                  Konsultasikan kebutuhan proyek Anda dengan tim ahli kami untuk solusi yang terukur dan efisien.
                </p>
                <Link href="/contact" className="block w-full relative z-10">
                  <Button className="w-full bg-sbm-teal hover:bg-teal-600 text-white border-none shadow-lg font-semibold py-4 h-auto group transition-all hover:shadow-teal-900/20">
                    Hubungi Kami
                    <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

