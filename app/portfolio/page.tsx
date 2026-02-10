import { Metadata } from "next"
import { Section } from "@/components/ui/Section"
import { Card } from "@/components/ui/Card"

export const metadata: Metadata = {
  title: "Portofolio",
  description: "Pengalaman proyek PT Sinergi Braga Mandiri dalam penyusunan AMDAL, UKL-UPL, dan konstruksi IPAL.",
}

const portfolioItems = [
  {
    title: "Penyusunan Dokumen UKL-UPL Industri Tekstil",
    client: "PT Maju Tekstil Indonesia",
    year: "2023",
    category: "Lingkungan",
    desc: "Penyusunan dokumen pengelolaan lingkungan untuk pabrik tekstil kapasitas 5000 ton/tahun."
  },
  {
    title: "Pembangunan IPAL Domestik Apartemen",
    client: "Apartemen Grand City",
    year: "2023",
    category: "Konstruksi IPAL",
    desc: "Desain dan konstruksi IPAL sistem bio-aerob dengan kapasitas 200 m3/hari."
  },
  {
    title: "Andalalin Pusat Perbelanjaan",
    client: "Mall Metro Bandung",
    year: "2022",
    category: "Andalalin",
    desc: "Kajian dampak lalu lintas untuk pengembangan area komersial baru di jalan arteri."
  },
  {
    title: "Sertifikat Laik Fungsi Gedung Kantor",
    client: "Gedung Office Tower 8",
    year: "2023",
    category: "SLF",
    desc: "Pemeriksaan teknis struktur, arsitektur, dan utilitas untuk perpanjangan SLF."
  },
  {
    title: "Perizinan SIPA Sumur Dalam",
    client: "Hotel Bintang Lima",
    year: "2024",
    category: "Perizinan",
    desc: "Pengurusan izin pengusahaan air tanah untuk kebutuhan operasional hotel."
  },
  {
    title: "Studi Geolistrik & Pengeboran",
    client: "Kawasan Industri",
    year: "2023",
    category: "Topografi & Geolistrik",
    desc: "Survei resistivitas tanah untuk penentuan titik pengeboran air bersih."
  }
]

export default function PortfolioPage() {
  return (
    <div className="pt-10">
      <section className="bg-slate-900 py-20 text-white">
        <div className="container px-4 md:px-6 text-center">
          <h1 className="text-4xl font-bold mb-6">Portofolio & Pengalaman</h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Rekam jejak kami dalam memberikan solusi lingkungan yang terpercaya.
          </p>
        </div>
      </section>

      <Section>
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioItems.map((item, i) => (
              <Card key={i} className="hover:border-sbm-blue/50 transition-colors cursor-pointer group">
                <div className="mb-4">
                  <span className="text-xs font-bold tracking-wider text-sbm-blue uppercase bg-sbm-blue/10 px-2 py-1 rounded">
                    {item.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-sbm-blue transition-colors">
                  {item.title}
                </h3>
                <div className="text-sm text-slate-500 mb-4">
                  <p className="font-semibold text-slate-700 dark:text-slate-300">{item.client}</p>
                  <p>{item.year}</p>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  {item.desc}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </Section>
    </div>
  )
}
