import { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"

import prisma from "@/lib/prisma"
import { Section } from "@/components/ui/Section"
import { Card } from "@/components/ui/Card"

export const metadata: Metadata = {
  title: "Layanan Kami",
  description: "Daftar lengkap layanan PT Sinergi Braga Mandiri: AMDAL, UKL-UPL, IPAL, WTP, Andalalin, SLF, dan lainnya.",
}

export default async function ServicesPage() {
  const services = await prisma.service.findMany({
    orderBy: { createdAt: 'asc' }
  })

  return (
    <div className="pt-10">
      <section className="bg-sbm-blue py-20 text-white">
        <div className="container px-4 md:px-6 text-center">
          <h1 className="text-4xl font-bold mb-6">Layanan Kami</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Solusi terintegrasi untuk kebutuhan lingkungan dan perizinan bisnis Anda.
          </p>
        </div>
      </section>

      <div className="container px-4 md:px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link key={service.id} href={`/services/${service.slug}`} className="h-full block">
              <Card hoverEffect className="h-full flex flex-col justify-between group cursor-pointer border-t-4 border-t-slate-200 hover:border-t-sbm-blue transition-all duration-300">
                <div>
                  <div className="mb-6 p-3 w-fit rounded-lg bg-slate-50 text-sbm-blue group-hover:bg-sbm-blue group-hover:text-white transition-colors duration-300 shadow-sm">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h2 className="text-xl font-bold mb-3 group-hover:text-sbm-blue transition-colors duration-300">
                    {service.title}
                  </h2>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">
                    {service.description}
                  </p>
                </div>

                <div className="border-t border-slate-100 pt-4 flex items-center justify-between mt-auto">
                   <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                     Lihat Detail
                   </span>
                   <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-sbm-blue group-hover:bg-sbm-blue group-hover:text-white transition-all duration-300">
                     <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
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
