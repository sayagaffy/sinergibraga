'use client'

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Leaf, ShieldCheck, Users } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { Section } from "@/components/ui/Section"
import { Card } from "@/components/ui/Card"

const features = [
  {
    title: "Muda & Humanis",
    description: "Tim muda yang energik dengan pendekatan humanis dalam setiap penyelesaian masalah.",
    icon: Users,
  },
  {
    title: "Produktif & Profesional",
    description: "Bekerja efisien dengan standar profesionalisme tinggi untuk hasil terbaik.",
    icon: CheckCircle2,
  },
  {
    title: "Trusted & Integritas",
    description: "Menjunjung tinggi kejujuran dan kepercayaan dalam setiap kemitraan.",
    icon: ShieldCheck,
  },
]

const services = [
  { title: "Studi Lingkungan", desc: "AMDAL, UKL-UPL, SPPL, DELH, DPLH", href: "/services#studi-lingkungan" },
  { title: "IPAL / WWTP", desc: "Desain & Optimalisasi Pengolahan Limbah", href: "/services#ipal-wwtp" },
  { title: "Andalalin", desc: "Analisis Dampak Lalu Lintas", href: "/services#andalalin" },
  { title: "Perizinan SIPA", desc: "Izin Pengambilan Air Tanah/Permukaan", href: "/services#sipa" },
]

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />

        <div className="container px-4 md:px-6 relative z-10 flex flex-col items-center text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4 max-w-4xl"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
              Sambut Masa Depan dengan <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sbm-blue to-sbm-teal">
                Semangat Perubahan
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
              Mitra terpercaya Anda dalam solusi lingkungan hidup, perizinan, dan pembangunan berkelanjutan. #SelaluDapatDiandalkan
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Link href="/services">
              <Button size="lg" className="gap-2">
                Lihat Layanan <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                Hubungi Kami
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Snippet */}
      <Section className="bg-white dark:bg-slate-950">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Tentang <span className="text-sbm-blue">Sinergi Braga Mandiri</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Kami adalah perusahaan konsultan yang bergerak di bidang lingkungan hidup, teknik sipil, dan perizinan.
                Dengan tim yang profesional dan berpengalaman, kami berkomitmen untuk memberikan solusi terbaik
                bagi kebutuhan bisnis Anda sesuai dengan regulasi yang berlaku.
              </p>
              <ul className="space-y-2">
                {features.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                    <div className="p-1 rounded-full bg-sbm-blue/10 text-sbm-blue">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    {item.title}
                  </li>
                ))}
              </ul>
              <Link href="/about">
                <Button variant="ghost" className="mt-4 pl-0 hover:pl-2 transition-all">
                  Selengkapnya tentang kami <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
               {/* Placeholder for About Image */}
               <div className="absolute inset-0 bg-slate-200 flex items-center justify-center text-slate-400">
                  <Leaf className="w-24 h-24 opacity-20" />
               </div>
               {/* Use Unsplash for demo */}
               <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2013&auto=format&fit=crop')] bg-cover bg-center" />
            </div>
          </div>
        </div>
      </Section>

      {/* Services Highlight */}
      <Section className="bg-slate-50 dark:bg-slate-900">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Layanan Unggulan</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Solusi komprehensif untuk kebutuhan perizinan dan teknis lingkungan perusahaan Anda.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <Link key={i} href={service.href}>
                <Card hoverEffect className="h-full flex flex-col justify-between group cursor-pointer border-t-4 border-t-sbm-blue">
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold group-hover:text-sbm-blue transition-colors">{service.title}</h3>
                    <p className="text-slate-500 text-sm">{service.desc}</p>
                  </div>
                  <div className="mt-6 flex justify-end">
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-sbm-blue group-hover:text-white transition-colors">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/services">
              <Button variant="secondary">Lihat Semua Layanan</Button>
            </Link>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <section className="py-24 bg-sbm-blue relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        <div className="container px-4 md:px-6 relative z-10 text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Siap Membangun Masa Depan Berkelanjutan?
          </h2>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Hubungi kami hari ini untuk konsultasi gratis mengenai kebutuhan dokumen lingkungan dan perizinan Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Link href="/contact">
                <Button size="lg" className="bg-white text-sbm-blue hover:bg-slate-100 shadow-2xl border-none">
                  Hubungi Sekarang
                </Button>
             </Link>
             <Link href="https://wa.me/6281112149222" target="_blank">
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                  Chat WhatsApp
                </Button>
             </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
