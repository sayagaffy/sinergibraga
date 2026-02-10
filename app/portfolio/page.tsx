import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, MapPin } from "lucide-react"

import prisma from "@/lib/prisma"
import { Section } from "@/components/ui/Section"
import { Card } from "@/components/ui/Card"

export const metadata: Metadata = {
  title: "Portofolio & Studi Kasus",
  description: "Lihat pengalaman proyek PT Sinergi Braga Mandiri (SBM) dalam penyusunan AMDAL, Andalalin, dan konstruksi IPAL di seluruh Indonesia.",
}

export default async function PortfolioPage() {
  const items = await prisma.portfolioItem.findMany({
    orderBy: { year: 'desc' }
  })

  return (
    <div className="pt-10">
      <section className="bg-slate-900 py-20 text-white">
        <div className="container px-4 md:px-6 text-center">
          <h1 className="text-4xl font-bold mb-6">Portofolio & Pengalaman</h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Rekam jejak keberhasilan kami dalam memberikan solusi lingkungan yang terpercaya dan berkelanjutan.
          </p>
        </div>
      </section>

      <div className="container px-4 md:px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => (
            <Link key={item.id} href={`/portfolio/${item.slug}`} className="h-full block">
              <Card hoverEffect className="h-full p-0 overflow-hidden flex flex-col group cursor-pointer border-0 shadow-lg bg-white dark:bg-slate-800">
                {/* Image Container */}
                <div className="relative h-56 w-full bg-slate-200 overflow-hidden">
                  {item.imageUrl ? (
                     <div className="relative w-full h-full">
                        <Image
                          src={item.imageUrl}
                          alt={item.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                     </div>
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-sbm-blue to-sbm-teal opacity-50" />
                  )}

                  <div className="absolute bottom-4 left-4 z-10">
                    <span className="text-[10px] font-bold tracking-widest text-white uppercase bg-sbm-blue/90 px-2 py-1 rounded shadow-sm">
                      {item.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center text-xs text-slate-500 mb-3 space-x-3">
                    <span className="font-bold text-sbm-teal">{item.year}</span>
                    <span className="w-1 h-1 rounded-full bg-slate-300" />
                    <span className="flex items-center gap-1 truncate max-w-[150px]">
                      <MapPin className="w-3 h-3" /> {item.location || "Indonesia"}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold mb-3 group-hover:text-sbm-blue transition-colors line-clamp-2 leading-tight">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-400 text-sm line-clamp-3 mb-6 flex-grow leading-relaxed">
                    {item.description}
                  </p>

                  <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-700 flex items-center justify-between text-sbm-blue font-medium text-sm">
                     <span className="group-hover:underline decoration-sbm-blue underline-offset-4 decoration-2">Lihat Studi Kasus</span>
                     <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
