'use client'

import { Section } from "@/components/ui/Section"
import { Card } from "@/components/ui/Card"
import { Check, Users, Target, Lightbulb } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="pt-10">
      {/* Header */}
      <section className="bg-slate-50 py-20 dark:bg-slate-900">
        <div className="container px-4 md:px-6 text-center">
          <h1 className="text-4xl font-bold mb-6 text-slate-900 dark:text-white">Tentang Kami</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            PT Sinergi Braga Mandiri (SBM) hadir sebagai mitra strategis dalam mewujudkan pembangunan yang berwawasan lingkungan.
          </p>
        </div>
      </section>

      {/* Vision Mission */}
      <Section>
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="bg-gradient-to-br from-white to-blue-50 dark:from-slate-900 dark:to-slate-800">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-sbm-blue/10 rounded-lg text-sbm-blue">
                  <Target className="w-8 h-8" />
                </div>
                <h2 className="text-2xl font-bold">Visi</h2>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Menjadi perusahaan konsultan lingkungan terdepan yang memberikan solusi inovatif dan berkelanjutan, serta berkontribusi aktif dalam pelestarian lingkungan hidup di Indonesia.
              </p>
            </Card>

            <Card className="bg-gradient-to-br from-white to-teal-50 dark:from-slate-900 dark:to-slate-800">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-sbm-teal/10 rounded-lg text-sbm-teal">
                  <Lightbulb className="w-8 h-8" />
                </div>
                <h2 className="text-2xl font-bold">Misi</h2>
              </div>
              <ul className="space-y-4 text-slate-600 dark:text-slate-300">
                {[
                  "Memberikan pelayanan jasa konsultasi yang profesional dan berkualitas.",
                  "Mengembangkan kompetensi SDM yang unggul dan berintegritas.",
                  "Membangun kemitraan strategis dengan berbagai pemangku kepentingan.",
                  "Menerapkan teknologi terkini dalam setiap solusi yang ditawarkan."
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <Check className="w-5 h-5 text-sbm-teal shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </Section>

      {/* Core Values */}
      <Section className="bg-slate-900 text-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Nilai-Nilai Utama</h2>
            <p className="text-slate-400">Landasan kami dalam bekerja dan berkarya</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Muda", desc: "Semangat muda yang dinamis dan penuh energi positif." },
              { title: "Humanis", desc: "Pendekatan yang mengutamakan nilai-nilai kemanusiaan." },
              { title: "Komunikatif", desc: "Selalu terbuka dan responsif dalam setiap komunikasi." },
              { title: "Profesional", desc: "Berkomitmen pada standar kualitas kerja yang tinggi." },
              { title: "Produktif", desc: "Efisien dan efektif dalam menghasilkan output." },
              { title: "Trusted", desc: "Menjaga kepercayaan klien sebagai aset utama." },
              { title: "Integritas", desc: "Konsisten dalam pikiran, perkataan, dan perbuatan." },
              { title: "Solutif", desc: "Fokus pada pemecahan masalah yang dihadapi klien." }
            ].map((val, i) => (
              <div key={i} className="text-center p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <h3 className="text-xl font-bold text-sbm-blue mb-2">{val.title}</h3>
                <p className="text-sm text-slate-400">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  )
}
