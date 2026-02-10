import { Metadata } from "next"
import { Section } from "@/components/ui/Section"
import { Card } from "@/components/ui/Card"
import { CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Layanan Kami",
  description: "Daftar lengkap layanan PT Sinergi Braga Mandiri: AMDAL, UKL-UPL, IPAL, WTP, Andalalin, SLF, dan lainnya.",
}

// In a real app, fetch from Prisma
const services = [
  {
    title: "Studi atau Dokumen Lingkungan",
    id: "studi-lingkungan",
    description: "Layanan penyusunan dokumen lingkungan hidup sebagai syarat perizinan berusaha.",
    details: [
      "AMDAL (Analisis Mengenai Dampak Lingkungan) untuk usaha berisiko tinggi.",
      "UKL-UPL (Upaya Pengelolaan & Pemantauan Lingkungan) untuk risiko menengah.",
      "SPPL (Surat Pernyataan Kesanggupan) untuk risiko rendah.",
      "DELH & DPLH untuk kegiatan yang sudah berjalan namun belum memiliki dokumen.",
      "Persetujuan Teknis (Pertek) Air Limbah dan Emisi."
    ],
    regulation: "PP No. 22 Tahun 2021 tentang Penyelenggaraan Perlindungan dan Pengelolaan Lingkungan Hidup."
  },
  {
    title: "Instalasi Pengolahan Air Limbah (IPAL/WWTP)",
    id: "ipal-wwtp",
    description: "Perancangan dan pembangunan sistem pengolahan limbah cair domestik maupun industri.",
    details: [
      "Basic & Detail Engineering Design (DED).",
      "Konstruksi Sipil & Mekanikal Elektrikal.",
      "Commissioning & Training Operator.",
      "Optimalisasi IPAL Existing yang tidak memenuhi baku mutu.",
      "Suplai Bakteri Pengurai & Chemical."
    ],
    regulation: "Permen LHK No. 68 Tahun 2016 tentang Baku Mutu Air Limbah Domestik."
  },
  {
    title: "Instalasi Pengolahan Air (WTP)",
    id: "wtp",
    description: "Sistem pengolahan air bersih (Water Treatment Plant) untuk kebutuhan industri dan komersial.",
    details: [
      "Water Clarifier System.",
      "Filtrasi (Sand Filter, Carbon Filter).",
      "Reverse Osmosis (RO) System.",
      "Softener System untuk air sadah.",
      "Demineralization Plant."
    ],
    regulation: "Permenkes No. 32 Tahun 2017 tentang Standar Baku Mutu Kesehatan Lingkungan."
  },
  {
    title: "Bidang Sipil",
    id: "sipil",
    description: "Jasa konstruksi bangunan khusus pendukung fasilitas lingkungan.",
    details: [
      "Bangunan Tempat Penyimpanan Sementara (TPS) Limbah B3.",
      "Konstruksi Bak IPAL Beton.",
      "Ground Water Tank (GWT).",
      "Saluran Drainase Lingkungan.",
      "Bangunan Pelengkap Lainnya."
    ],
    regulation: "PP No. 101 Tahun 2014 tentang Pengelolaan Limbah Bahan Berbahaya dan Beracun."
  },
  {
    title: "Andalalin (Analisis Dampak Lalu Lintas)",
    id: "andalalin",
    description: "Kajian teknis dampak lalu lintas akibat pembangunan pusat kegiatan baru.",
    details: [
      "Survei Lalu Lintas (Traffic Counting).",
      "Simulasi Kinerja Simpang dan Ruas Jalan.",
      "Perencanaan Manajemen dan Rekayasa Lalu Lintas.",
      "Penyusunan Dokumen Andalalin.",
      "Pendampingan Sidang Teknis dengan Dinas Perhubungan."
    ],
    regulation: "PM Perhubungan No. 75 Tahun 2015 tentang Penyelenggaraan Andalalin."
  },
  {
    title: "Sertifikat Laik Fungsi (SLF)",
    id: "slf",
    description: "Pemeriksaan keandalan bangunan gedung untuk penerbitan sertifikat kelaikan.",
    details: [
      "Pemeriksaan Arsitektur Bangunan.",
      "Pemeriksaan Struktur Bangunan.",
      "Pemeriksaan Utilitas (MEP).",
      "Pengujian Non-Destructive Test (Hammer Test, UPV, dll).",
      "Penyusunan Laporan Pengkajian Teknis."
    ],
    regulation: "UU No. 28 Tahun 2002 tentang Bangunan Gedung."
  },
  {
    title: "Topografi & Geolistrik",
    id: "topografi-geolistrik",
    description: "Layanan survei pemetaan lahan dan investigasi bawah permukaan.",
    details: [
      "Pengukuran Kontur Tanah (Topografi).",
      "Cut and Fill Calculation.",
      "Geolistrik Resistivity (Mencari titik air tanah/akuifer).",
      "Soil Investigation (Sondir/Boring).",
      "Pemetaan Situasi Lahan."
    ],
    regulation: "SNI terkait pengukuran dan pemetaan."
  },
  {
    title: "SIPA (Surat Izin Pengambilan Air)",
    id: "sipa",
    description: "Pengurusan legalitas pemanfaatan sumber daya air.",
    details: [
      "Izin Pengeboran Air Tanah.",
      "Izin Pengusahaan Air Tanah (SIPA).",
      "Izin Pengambilan Air Permukaan.",
      "Studi Keseimbangan Air.",
      "Laporan Pemantauan Sumur Pantau."
    ],
    regulation: "Peraturan Daerah terkait Pengelolaan Air Tanah."
  }
]

export default function ServicesPage() {
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

      <div className="container px-4 md:px-6 py-16 space-y-16">
        {services.map((service, index) => (
          <Section key={service.id} id={service.id} className="scroll-mt-24">
            <div className="grid md:grid-cols-[1fr_2fr] gap-8 items-start">
              <div className="space-y-4 sticky top-24">
                <div className="w-16 h-1 bg-sbm-blue mb-4" />
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white leading-tight">
                  {service.title}
                </h2>
                <p className="text-slate-500 font-medium">
                  {service.description}
                </p>
                <div className="text-xs text-slate-400 mt-4 p-3 bg-slate-50 rounded border border-slate-100">
                  <strong>Regulasi Acuan:</strong> <br />
                  {service.regulation}
                </div>
              </div>

              <div className="grid gap-4">
                <h3 className="text-lg font-semibold border-b pb-2 mb-2">Lingkup Pekerjaan & Fakta Teknis</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.details.map((detail, idx) => (
                    <Card key={idx} hoverEffect={false} className="bg-white border-slate-100 shadow-sm">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-sbm-teal shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-600">{detail}</span>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </Section>
        ))}
      </div>
    </div>
  )
}
