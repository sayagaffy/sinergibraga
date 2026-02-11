'use client'

import { motion } from "framer-motion"
import { Building2, CheckCircle2, FileCheck, Users2 } from "lucide-react"

const stats = [
  {
    label: "Dokumen Lingkungan Selesai",
    value: "50+",
    sub: "AMDAL, Andalalin, SLF",
    icon: FileCheck,
  },
  {
    label: "Perusahaan Nasional Percaya",
    value: "30+",
    sub: "Mitra Terpercaya",
    icon: Building2,
  },
  {
    label: "Tingkat Persetujuan Dokumen",
    value: "100%",
    sub: "Jaminan Kualitas",
    icon: CheckCircle2,
  },
  {
    label: "Tim Ahli Multidisiplin",
    value: "Expert",
    sub: "Sipil, Lingkungan, Hukum",
    icon: Users2,
  },
]

export function TrustBar() {
  return (
    <section className="py-12 bg-white border-y border-slate-100">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center space-y-2 group"
            >
              <div className="p-3 bg-sbm-blue/5 rounded-full text-sbm-blue mb-2 group-hover:bg-sbm-blue/10 transition-colors">
                <stat.icon className="w-6 h-6" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-slate-900 to-slate-600">
                {stat.value}
              </div>
              <div className="text-sm font-bold text-slate-800">
                {stat.label}
              </div>
              <div className="text-xs text-slate-500">
                {stat.sub}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
