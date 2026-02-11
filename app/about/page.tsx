'use client'

import { Card } from "@/components/ui/Card"
import { Section } from "@/components/ui/Section"
import { Check, Lightbulb, Target, Users } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20">
      {/* Header - Clean White */}
      <section className="bg-white py-12 border-b border-slate-100">
        <div className="container px-4 md:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-blue-50 text-sbm-blue text-sm font-medium">
            <Users className="w-4 h-4" />
            <span>Tentang SBM</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 tracking-tight">
            Konsultan Lingkungan <span className="text-sbm-blue">Terpercaya</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            PT Sinergi Braga Mandiri (SBM) hadir sebagai mitra strategis dalam mewujudkan pembangunan yang berwawasan lingkungan dan berkelanjutan di Indonesia.
          </p>
        </div>
      </section>

      {/* Vision Mission */}
      <Section className="bg-slate-50">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="bg-white border-slate-200 shadow-sm p-8 h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-blue-50 rounded-xl text-sbm-blue">
                  <Target className="w-8 h-8" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Visi</h2>
              </div>
              <p className="text-slate-600 leading-relaxed text-lg">
                Menjadi perusahaan konsultan lingkungan terdepan yang memberikan solusi inovatif dan berkelanjutan, serta berkontribusi aktif dalam pelestarian lingkungan hidup di Indonesia.
              </p>
            </Card>

            <Card className="bg-white border-slate-200 shadow-sm p-8 h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-teal-50 rounded-xl text-sbm-teal">
                  <Lightbulb className="w-8 h-8" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Misi</h2>
              </div>
              <ul className="space-y-4 text-slate-600">
                {[
                  "Memberikan pelayanan jasa konsultasi yang profesional dan berkualitas.",
                  "Mengembangkan kompetensi SDM yang unggul dan berintegritas.",
                  "Membangun kemitraan strategis dengan berbagai pemangku kepentingan.",
                  "Menerapkan teknologi terkini dalam setiap solusi yang ditawarkan."
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <Check className="w-5 h-5 text-sbm-teal shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </Section>

      {/* Core Values - Converted to Light Theme */}
      <Section className="bg-white border-t border-slate-100">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-slate-900">Nilai-Nilai Utama</h2>
            <p className="text-slate-500 text-lg">Landasan integritas kami dalam bekerja dan berkarya</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
              <div key={i} className="text-center p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-sbm-blue/30 hover:bg-blue-50/50 transition-all group">
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-sbm-blue mb-2 transition-colors">{val.title}</h3>
                <p className="text-sm text-slate-500 group-hover:text-slate-600 transition-colors">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  )
}
