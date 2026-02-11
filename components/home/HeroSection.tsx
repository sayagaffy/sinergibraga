'use client'

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Building, Gavel, Leaf, Droplets } from "lucide-react"
import { Button } from "@/components/ui/Button"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-950 pt-20">
      {/* Background Image with Next/Image for optimization */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
          alt="Sustainable Future City"
          fill
          className="object-cover opacity-20"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/40" />
      </div>

      <div className="container px-4 md:px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sbm-teal/10 text-sbm-teal border border-sbm-teal/20 text-sm font-medium backdrop-blur-sm"
            >
              <Leaf className="w-4 h-4" />
              <span>Environmental Consultant & Engineering</span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
              Sambut Masa Depan <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sbm-blue to-sbm-teal">
                Sustainable
              </span>
            </h1>

            <p className="text-lg text-slate-300 max-w-xl leading-relaxed">
              Mitra strategis Anda dalam penyusunan dokumen lingkungan, perizinan, dan teknis sipil.
              Kami menghadirkan solusi komprehensif untuk pembangunan berkelanjutan.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link href="/contact">
              <Button size="lg" className="h-12 px-8 text-base bg-sbm-blue hover:bg-sbm-blue/90 text-white border-0 shadow-lg shadow-sbm-blue/20">
                Konsultasi Gratis
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline" className="h-12 px-8 text-base text-white border-white/20 hover:bg-white/10 hover:text-white hover:border-white">
                Lihat Layanan
              </Button>
            </Link>
          </div>

          {/* Discipline Icons */}
          <div className="pt-8 border-t border-white/10">
            <p className="text-sm text-slate-400 mb-4 font-medium">Keahlian Multidisiplin:</p>
            <div className="flex gap-8 text-slate-300">
              <div className="flex flex-col items-center gap-2 group cursor-default">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:border-sbm-teal/50 group-hover:bg-sbm-teal/10 transition-colors backdrop-blur-sm">
                  <Leaf className="w-6 h-6 group-hover:text-sbm-teal transition-colors" />
                </div>
                <span className="text-xs font-medium">Lingkungan</span>
              </div>
              <div className="flex flex-col items-center gap-2 group cursor-default">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:border-blue-400/50 group-hover:bg-blue-400/10 transition-colors backdrop-blur-sm">
                  <Building className="w-6 h-6 group-hover:text-blue-400 transition-colors" />
                </div>
                <span className="text-xs font-medium">Sipil</span>
              </div>
               <div className="flex flex-col items-center gap-2 group cursor-default">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:border-amber-400/50 group-hover:bg-amber-400/10 transition-colors backdrop-blur-sm">
                  <Gavel className="w-6 h-6 group-hover:text-amber-400 transition-colors" />
                </div>
                <span className="text-xs font-medium">Hukum</span>
              </div>
              <div className="flex flex-col items-center gap-2 group cursor-default">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:border-cyan-400/50 group-hover:bg-cyan-400/10 transition-colors backdrop-blur-sm">
                  <Droplets className="w-6 h-6 group-hover:text-cyan-400 transition-colors" />
                </div>
                <span className="text-xs font-medium">Air & Limbah</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Hero Visual Element (Abstract/Futuristic) */}
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1, delay: 0.2 }}
           className="relative hidden lg:block h-full"
        >
          {/* Decorative glowing orb/gradient */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-sbm-blue/20 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-sbm-teal/20 rounded-full blur-[80px]" />
        </motion.div>
      </div>
    </section>
  )
}
