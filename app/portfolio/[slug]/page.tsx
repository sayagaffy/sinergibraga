import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import prisma from "@/lib/prisma"
import { GeoFactSheet } from "@/components/geo/GeoFactSheet"
import { SchemaOrg } from "@/components/seo/SchemaOrg"
import { ExpertInsight } from "@/components/geo/ExpertInsight"
import { Card } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, CheckCircle2, Calendar, MapPin, Tag, Building2, Trophy, BarChart3, Lightbulb, Target, ArrowUpRight } from "lucide-react"
import { Expert, Citation } from "@prisma/client"

type PortfolioWithRelations = {
  id: string;
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
  expert: Expert | null;
  citations: Citation[];
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const item = await prisma.portfolioItem.findUnique({
    where: { slug: params.slug },
  })

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
  const itemRaw = await prisma.portfolioItem.findUnique({
    where: { slug: params.slug },
    include: {
      expert: true,
      citations: true,
    },
  })

  if (!itemRaw) {
    notFound()
  }

  const item = itemRaw as unknown as PortfolioWithRelations;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-24">
      <SchemaOrg type="Project" data={item} />

      {/* Hero Section */}
      <div className="relative bg-slate-900 text-white overflow-hidden min-h-[60vh] flex flex-col justify-end">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          {item.imageUrl ? (
            <Image
              src={item.imageUrl}
              alt={item.title}
              fill
              className="object-cover opacity-40 mix-blend-overlay"
              priority
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent" />
        </div>

        <div className="container mx-auto px-6 pb-16 relative z-10 pt-32">
          <Link
            href="/portfolio"
            className="inline-flex items-center text-slate-400 hover:text-white mb-8 transition-colors text-sm font-medium tracking-wide uppercase group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Kembali ke Portofolio
          </Link>

          <div className="max-w-4xl space-y-6">
            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sbm-teal/20 text-sbm-teal border border-sbm-teal/30 text-sm font-medium backdrop-blur-sm">
                <Tag className="w-3.5 h-3.5" />
                {item.category}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-white border border-white/10 text-sm font-medium backdrop-blur-sm">
                <Calendar className="w-3.5 h-3.5" />
                {item.year}
              </span>
              {item.location && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-white border border-white/10 text-sm font-medium backdrop-blur-sm">
                  <MapPin className="w-3.5 h-3.5" />
                  {item.location}
                </span>
              )}
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              {item.title}
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed max-w-3xl">
              {item.description}
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 -mt-12 relative z-20">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">

          {/* Left Content Column */}
          <div className="lg:col-span-8 space-y-12">

            {/* Case Study Cards Container */}
            <div className="grid gap-8">

              {/* Challenge */}
              {item.challenge && (
                <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-slate-800 relative overflow-hidden group hover:shadow-md transition-shadow">
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-red-500" />
                  <div className="flex flex-col md:flex-row items-start gap-4 relative z-10">
                    <div className="p-3 rounded-xl bg-red-50 dark:bg-red-900/20 text-red-500 shrink-0">
                      <Target className="w-6 h-6" />
                    </div>
                    <div className="space-y-3">
                      <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Tantangan Proyek</h2>
                      <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                        {item.challenge}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Solution */}
              {item.solution && (
                <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-slate-800 relative overflow-hidden group hover:shadow-md transition-shadow">
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-sbm-blue" />
                  <div className="flex flex-col md:flex-row items-start gap-4 relative z-10">
                    <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-900/20 text-sbm-blue shrink-0">
                      <Lightbulb className="w-6 h-6" />
                    </div>
                    <div className="space-y-3">
                      <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Solusi Teknis</h2>
                      <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                        {item.solution}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Result */}
              {item.result && (
                <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-slate-800 relative overflow-hidden group hover:shadow-md transition-shadow">
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-sbm-teal" />
                  <div className="flex flex-col md:flex-row items-start gap-4 relative z-10">
                    <div className="p-3 rounded-xl bg-teal-50 dark:bg-teal-900/20 text-sbm-teal shrink-0">
                      <BarChart3 className="w-6 h-6" />
                    </div>
                    <div className="space-y-3">
                      <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Hasil & Dampak</h2>
                      <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                        {item.result}
                      </p>
                    </div>
                  </div>
                </div>
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
              <section className="pt-8 border-t border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-3 mb-8">
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Review Ahli</h2>
                  <div className="h-px flex-1 bg-slate-200 dark:bg-slate-700" />
                </div>
                <ExpertInsight expert={item.expert} />
              </section>
            )}

          </div>

          {/* Right Sidebar Column */}
          <div className="lg:col-span-4 space-y-8">

            {/* Project Details Card */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800 sticky top-24 overflow-hidden">
               <div className="h-2 bg-gradient-to-r from-sbm-blue to-sbm-teal w-full" />

              <div className="p-6 md:p-8 space-y-6">
                <h3 className="font-bold text-xl text-slate-900 dark:text-white flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-sbm-blue" />
                  Detail Proyek
                </h3>

                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors px-2 rounded-lg -mx-2">
                    <span className="text-slate-500 text-sm font-medium">Tahun</span>
                    <span className="font-bold text-slate-900 dark:text-white">{item.year}</span>
                  </div>

                  <div className="flex justify-between items-center py-3 border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors px-2 rounded-lg -mx-2">
                    <span className="text-slate-500 text-sm font-medium">Lokasi</span>
                    <span className="font-bold text-slate-900 dark:text-white text-right">{item.location}</span>
                  </div>

                  <div className="flex justify-between items-center py-3 border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors px-2 rounded-lg -mx-2">
                    <span className="text-slate-500 text-sm font-medium">Kategori</span>
                    <span className="font-bold text-slate-900 dark:text-white text-right">{item.category}</span>
                  </div>

                  {item.client && (
                    <div className="pt-3 px-2">
                      <span className="text-slate-500 text-sm font-medium block mb-1">Klien</span>
                      <span className="font-bold text-slate-900 dark:text-white block text-lg">{item.client}</span>
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
                  <Button className="w-full bg-sbm-teal hover:bg-teal-600 text-white border-none shadow-lg font-semibold py-6 group transition-all hover:shadow-teal-900/20">
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
