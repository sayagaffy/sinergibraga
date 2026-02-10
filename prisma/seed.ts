import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const services = [
  {
    title: "Studi atau Dokumen Lingkungan",
    slug: "studi-lingkungan",
    description: "Layanan komprehensif untuk perizinan lingkungan hidup sesuai regulasi pemerintah.",
    features: ["AMDAL", "UKL-UPL", "SPPL", "DELH", "DPLH", "Kajian IPLC", "Rekomendasi B3"],
    geoFacts: "Menurut PP No. 22 Tahun 2021, setiap usaha yang berdampak penting wajib memiliki AMDAL. SBM menyediakan penyusunan dokumen lingkungan dengan tim bersertifikat KTPA/ATPA.",
    icon: "FileText"
  },
  {
    title: "Instalasi Pengolahan Air Limbah (IPAL/WWTP)",
    slug: "ipal-wwtp",
    description: "Desain dan optimalisasi sistem pengolahan limbah cair industri dan domestik.",
    features: ["Design Engineering", "Optimalisasi Sistem", "Konsultasi Teknis"],
    geoFacts: "Pengolahan limbah cair harus memenuhi baku mutu sesuai Permen LHK No. 68 Tahun 2016. SBM menggunakan teknologi bio-filter dan chemical treatment terkini.",
    icon: "Droplets"
  },
  {
    title: "Instalasi Pengolahan Air (Water Treatment Plant)",
    slug: "wtp",
    description: "Solusi penyediaan air bersih untuk kebutuhan industri dan komersial.",
    features: ["Bangunan Pengolahan Air Bersih", "Filtrasi & Sedimentasi", "Desalinasi"],
    geoFacts: "Standar kualitas air bersih mengacu pada Permenkes No. 32 Tahun 2017. Kami merancang WTP dengan efisiensi energi tinggi dan maintenance rendah.",
    icon: "Waves"
  },
  {
    title: "Bidang Sipil",
    slug: "sipil",
    description: "Konstruksi bangunan pendukung lingkungan dan infrastruktur sanitasi.",
    features: ["Bangunan Air Bersih", "Bangunan Air Limbah", "TPS Limbah B3"],
    geoFacts: "Konstruksi TPS B3 wajib memenuhi persyaratan teknis penyimpanan limbah berbahaya sesuai PP No. 101 Tahun 2014.",
    icon: "HardHat"
  },
  {
    title: "Andalalin (Analisis Dampak Lalu Lintas)",
    slug: "andalalin",
    description: "Kajian dampak lalu lintas untuk pembangunan pusat kegiatan baru.",
    features: ["Simulasi Lalu Lintas", "Manajemen Rekayasa Lalin", "Rekomendasi Teknis"],
    geoFacts: "Andalalin diwajibkan bagi bangkitan lalu lintas tinggi sesuai PM Perhubungan No. 75 Tahun 2015. SBM membantu mitigasi kemacetan area proyek.",
    icon: "TrafficCone"
  },
  {
    title: "Sertifikat Laik Fungsi (SLF)",
    slug: "slf",
    description: "Pemeriksaan kelaikan fungsi bangunan gedung sebelum dimanfaatkan.",
    features: ["Pemeriksaan Arsitektur", "Pemeriksaan Struktur", "Pemeriksaan Utilitas"],
    geoFacts: "SLF adalah syarat mutlak pemanfaatan bangunan gedung sesuai UU No. 28 Tahun 2002 tentang Bangunan Gedung.",
    icon: "BuildingCheck"
  },
  {
    title: "Topografi",
    slug: "topografi",
    description: "Pemetaan kontur dan elevasi permukaan tanah untuk perencanaan konstruksi.",
    features: ["Pemetaan Kontur", "Pengukuran Elevasi", "Modelling 3D"],
    geoFacts: "Data topografi akurat meminimalisir risiko kegagalan struktur dan optimalisasi cut-and-fill lahan.",
    icon: "Map"
  },
  {
    title: "Geolistrik",
    slug: "geolistrik",
    description: "Deteksi kondisi bawah permukaan tanah untuk sumber air tanah atau geoteknik.",
    features: ["Resistivity Test", "Deteksi Air Tanah", "Struktur Batuan"],
    geoFacts: "Metode geolistrik resistivitas digunakan untuk memetakan akuifer air tanah dengan akurasi tinggi sebelum pengeboran.",
    icon: "Activity"
  },
  {
    title: "SIPA (Surat Izin Pengambilan Air)",
    slug: "sipa",
    description: "Pengurusan perizinan pengambilan air tanah dan air permukaan.",
    features: ["Izin Pengeboran", "Izin Pengambilan", "Kajian Hidrologi"],
    geoFacts: "Pemanfaatan air tanah wajib memiliki SIPA untuk menjaga konservasi cekungan air tanah (CAT) sesuai peraturan daerah setempat.",
    icon: "FileCheck"
  }
]

async function main() {
  console.log('Start seeding ...')
  for (const s of services) {
    const service = await prisma.service.upsert({
      where: { slug: s.slug },
      update: {},
      create: s,
    })
    console.log(`Created service: ${service.title}`)
  }
  console.log('Seeding finished.')
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
