import { Metadata } from "next"
import { HeroSection } from "@/components/home/HeroSection"
import { TrustBar } from "@/components/home/TrustBar"
import { ServiceCard } from "@/components/home/ServiceCard"
import { GeoFactSheet } from "@/components/geo/GeoFactSheet"
import { Button } from "@/components/ui/Button"
import Link from "next/link"
import { ArrowRight, Car, Droplets, FileText, Waves } from "lucide-react"

export const metadata: Metadata = {
  title: "Sinergi Braga Mandiri - Solusi Lingkungan & Perizinan Terpercaya",
  description: "Konsultan lingkungan hidup (AMDAL, UKL-UPL), Andalalin, dan desain IPAL di Bandung. Percayakan kebutuhan perizinan bisnis Anda pada tim ahli SBM.",
}

const services = [
  {
    title: "Studi Lingkungan",
    description: "Penyusunan dokumen lingkungan komprehensif sesuai regulasi terbaru.",
    details: "Meliputi AMDAL, UKL-UPL, SPPL, DELH, DPLH, dan Persetujuan Teknis lainnya.",
    href: "/services/amdal-ukl-upl",
    icon: <FileText className="w-6 h-6" />,
  },
  {
    title: "IPAL / WWTP",
    description: "Desain, pembangunan, dan optimalisasi sistem pengolahan limbah.",
    details: "Solusi Water Treatment (WTP) dan Wastewater Treatment (WWTP) yang efisien dan ramah lingkungan.",
    href: "/services/ipal-wwtp",
    icon: <Droplets className="w-6 h-6" />,
  },
  {
    title: "Andalalin",
    description: "Kajian dampak lalu lintas untuk memastikan kelancaran operasional.",
    details: "Analisis bangkitan dan tarikan pergerakan lalu lintas akibat pengembangan kawasan.",
    href: "/services/andalalin",
    icon: <Car className="w-6 h-6" />,
  },
  {
    title: "Perizinan SIPA",
    description: "Pengurusan izin pengusahaan sumber daya air tanah dan permukaan.",
    details: "Memastikan legalitas pemanfaatan air untuk kebutuhan industri dan komersial.",
    href: "/services/sipa",
    icon: <Waves className="w-6 h-6" />,
  },
]

const geoCitations = [
  { sourceTitle: "UU No. 32 Tahun 2009 tentang Perlindungan dan Pengelolaan Lingkungan Hidup", sourceUrl: "https://peraturan.bpk.go.id/Home/Details/38771/uu-no-32-tahun-2009" },
  { sourceTitle: "PP No. 22 Tahun 2021 tentang Penyelenggaraan Perlindungan dan Pengelolaan Lingkungan Hidup", sourceUrl: "https://peraturan.bpk.go.id/Home/Details/161852/pp-no-22-tahun-2021" },
  { sourceTitle: "Permen LHK No. 4 Tahun 2021 tentang Daftar Usaha dan/atau Kegiatan yang Wajib Memiliki AMDAL, UKL-UPL atau SPPL", sourceUrl: null },
  { sourceTitle: "Permenhub No. PM 17 Tahun 2021 tentang Penyelenggaraan Analisis Dampak Lalu Lintas", sourceUrl: null },
]

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "PT Sinergi Braga Mandiri",
    "image": "https://sinergibragamandiri.com/logo.png",
    "url": "https://sinergibragamandiri.com",
    "telephone": "+6281112149222",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jl. Braga No. 123",
      "addressLocality": "Bandung",
      "addressRegion": "Jawa Barat",
      "postalCode": "40111",
      "addressCountry": "ID"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -6.917464,
      "longitude": 107.619123
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "08:00",
      "closes": "17:00"
    },
    "sameAs": [
      "https://www.linkedin.com/company/sinergi-braga-mandiri",
      "https://www.instagram.com/sinergibragamandiri"
    ]
  }

  return (
    <div className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <HeroSection />

      {/* Services Section */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900 relative overflow-hidden">
         {/* Decorative background elements */}
         <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent" />
         <div className="absolute -left-[10%] top-[20%] w-[40%] h-[40%] bg-sbm-blue/5 rounded-full blur-3xl" />

        <div className="container px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400">
              Solusi Lingkungan Terintegrasi
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg">
              Layanan profesional untuk mendukung kepatuhan regulasi dan keberlanjutan bisnis Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {services.map((service, i) => (
              <div key={i} className="h-full">
                <ServiceCard {...service} />
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link href="/services/amdal-ukl-upl">
              <Button variant="outline" size="lg" className="group">
                Lihat Semua Layanan
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* CTA Section */}
      <section className="py-24 bg-sbm-blue relative overflow-hidden isolate">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-br from-sbm-blue to-sbm-teal mix-blend-multiply" />

        <div className="container px-4 md:px-6 relative z-10 text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight">
            Siap untuk Langkah Selanjutnya?
          </h2>
          <p className="text-blue-50/90 text-lg max-w-2xl mx-auto font-light">
            Hubungi tim ahli kami untuk konsultasi gratis mengenai kebutuhan dokumen lingkungan dan perizinan proyek Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
             <Link href="/contact">
                <Button size="lg" className="bg-white text-sbm-blue hover:bg-white/90 shadow-xl border-none font-semibold px-8">
                  Mulai Konsultasi
                </Button>
             </Link>
             <Link href="https://wa.me/6281112149222" target="_blank">
                <Button size="lg" variant="outline" className="text-white border-white/30 hover:bg-white/10 hover:border-white backdrop-blur-sm px-8">
                  Chat WhatsApp
                </Button>
             </Link>
          </div>
        </div>
      </section>

      {/* Regulatory Context (GEO) */}
      <section className="py-16 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-900">
        <div className="container px-4 md:px-6">
          <GeoFactSheet
            citations={geoCitations}
          />
        </div>
      </section>
    </div>
  )
}
