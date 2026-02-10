import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const services = [
  {
    title: "Studi atau Dokumen Lingkungan",
    slug: "studi-lingkungan",
    description: "Layanan komprehensif untuk perizinan lingkungan hidup sesuai regulasi pemerintah.",
    features: ["AMDAL", "UKL-UPL", "SPPL", "DELH", "DPLH", "Kajian IPLC", "Rekomendasi B3"],
    geoFacts: "Menurut PP No. 22 Tahun 2021, setiap usaha yang berdampak penting wajib memiliki AMDAL. SBM menyediakan penyusunan dokumen lingkungan dengan tim bersertifikat KTPA/ATPA.",
    icon: "FileText",
    statistics: { "projectsCompleted": 150, "complianceRate": "100%", "avgApprovalTime": "3 Bulan" },
    regulations: ["PP No. 22 Tahun 2021", "UU No. 32 Tahun 2009", "Permen LHK No. 4 Tahun 2021"],
    expertQuote: "Kelengkapan data rona awal lingkungan menjadi kunci percepatan persetujuan teknis dokumen AMDAL."
  },
  {
    title: "Instalasi Pengolahan Air Limbah (IPAL/WWTP)",
    slug: "ipal-wwtp",
    description: "Desain dan optimalisasi sistem pengolahan limbah cair industri dan domestik.",
    features: ["Design Engineering", "Optimalisasi Sistem", "Konsultasi Teknis"],
    geoFacts: "Pengolahan limbah cair harus memenuhi baku mutu sesuai Permen LHK No. 68 Tahun 2016. SBM menggunakan teknologi bio-filter dan chemical treatment terkini.",
    icon: "Droplets",
    statistics: { "systemsDesigned": 45, "waterRecycled": "5000 m3/tahun", "energySaving": "20%" },
    regulations: ["Permen LHK No. 68 Tahun 2016", "Permen LHK No. 5 Tahun 2014"],
    expertQuote: "Teknologi Bio-Aerob kami mampu mereduksi BOD hingga 95% dengan footprint lahan yang minimal."
  },
  {
    title: "Instalasi Pengolahan Air (Water Treatment Plant)",
    slug: "wtp",
    description: "Solusi penyediaan air bersih untuk kebutuhan industri dan komersial.",
    features: ["Bangunan Pengolahan Air Bersih", "Filtrasi & Sedimentasi", "Desalinasi"],
    geoFacts: "Standar kualitas air bersih mengacu pada Permenkes No. 32 Tahun 2017. Kami merancang WTP dengan efisiensi energi tinggi dan maintenance rendah.",
    icon: "Waves",
    statistics: { "systemsInstalled": 30, "purityLevel": "99.9%", "capacity": "10-100 LPS" },
    regulations: ["Permenkes No. 32 Tahun 2017", "SNI 6774:2008"],
    expertQuote: "Sistem filtrasi bertingkat kami menjamin kualitas air bersih sesuai standar kesehatan lingkungan."
  },
  {
    title: "Bidang Sipil",
    slug: "sipil",
    description: "Konstruksi bangunan pendukung lingkungan dan infrastruktur sanitasi.",
    features: ["Bangunan Air Bersih", "Bangunan Air Limbah", "TPS Limbah B3"],
    geoFacts: "Konstruksi TPS B3 wajib memenuhi persyaratan teknis penyimpanan limbah berbahaya sesuai PP No. 101 Tahun 2014.",
    icon: "HardHat",
    statistics: { "structuresBuilt": 60, "accidentFreeHours": "5000+", "durability": "20+ Tahun" },
    regulations: ["PP No. 101 Tahun 2014", "SNI 03-1726-2012"],
    expertQuote: "Struktur beton bertulang K-300 kami gunakan untuk ketahanan maksimal terhadap korosi limbah B3."
  },
  {
    title: "Andalalin (Analisis Dampak Lalu Lintas)",
    slug: "andalalin",
    description: "Kajian dampak lalu lintas untuk pembangunan pusat kegiatan baru.",
    features: ["Simulasi Lalu Lintas", "Manajemen Rekayasa Lalin", "Rekomendasi Teknis"],
    geoFacts: "Andalalin diwajibkan bagi bangkitan lalu lintas tinggi sesuai PM Perhubungan No. 75 Tahun 2015. SBM membantu mitigasi kemacetan area proyek.",
    icon: "TrafficCone",
    statistics: { "studiesConducted": 80, "trafficFlowImprovement": "30%", "permitSuccess": "100%" },
    regulations: ["PM Perhubungan No. 75 Tahun 2015", "UU No. 22 Tahun 2009"],
    expertQuote: "Simulasi mikrosimulasi Vissim membantu memprediksi kemacetan dengan akurasi 90% sebelum konstruksi dimulai."
  },
  {
    title: "Sertifikat Laik Fungsi (SLF)",
    slug: "slf",
    description: "Pemeriksaan kelaikan fungsi bangunan gedung sebelum dimanfaatkan.",
    features: ["Pemeriksaan Arsitektur", "Pemeriksaan Struktur", "Pemeriksaan Utilitas"],
    geoFacts: "SLF adalah syarat mutlak pemanfaatan bangunan gedung sesuai UU No. 28 Tahun 2002 tentang Bangunan Gedung.",
    icon: "BuildingCheck",
    statistics: { "buildingsCertified": 40, "safetyCompliance": "100%", "auditSpeed": "14 Hari" },
    regulations: ["UU No. 28 Tahun 2002", "PP No. 16 Tahun 2021"],
    expertQuote: "Kami memastikan setiap detail struktur dan utilitas memenuhi standar keselamatan penghuni."
  },
  {
    title: "Topografi",
    slug: "topografi",
    description: "Pemetaan kontur dan elevasi permukaan tanah untuk perencanaan konstruksi.",
    features: ["Pemetaan Kontur", "Pengukuran Elevasi", "Modelling 3D"],
    geoFacts: "Data topografi akurat meminimalisir risiko kegagalan struktur dan optimalisasi cut-and-fill lahan.",
    icon: "Map",
    statistics: { "areaMapped": "500+ Ha", "accuracy": "Sub-cm", "tools": "RTK GPS & Total Station" },
    regulations: ["SNI 19-6988-2004", "Standar BIG"],
    expertQuote: "Penggunaan Drone Lidar mempercepat proses pemetaan lahan luas dengan detail topografi presisi tinggi."
  },
  {
    title: "Geolistrik",
    slug: "geolistrik",
    description: "Deteksi kondisi bawah permukaan tanah untuk sumber air tanah atau geoteknik.",
    features: ["Resistivity Test", "Deteksi Air Tanah", "Struktur Batuan"],
    geoFacts: "Metode geolistrik resistivitas digunakan untuk memetakan akuifer air tanah dengan akurasi tinggi sebelum pengeboran.",
    icon: "Activity",
    statistics: { "pointsSurveyed": 200, "successRateDrilling": "95%", "depth": "up to 200m" },
    regulations: ["SNI 03-2818-1992"],
    expertQuote: "Interpretasi data resistivitas yang tepat dapat menghemat biaya pengeboran hingga 40%."
  },
  {
    title: "SIPA (Surat Izin Pengambilan Air)",
    slug: "sipa",
    description: "Pengurusan perizinan pengambilan air tanah dan air permukaan.",
    features: ["Izin Pengeboran", "Izin Pengambilan", "Kajian Hidrologi"],
    geoFacts: "Pemanfaatan air tanah wajib memiliki SIPA untuk menjaga konservasi cekungan air tanah (CAT) sesuai peraturan daerah setempat.",
    icon: "FileCheck",
    statistics: { "permitsIssued": 120, "complianceAudit": "100%", "processingTime": "2-3 Bulan" },
    regulations: ["UU No. 17 Tahun 2019", "Perda Jabar No. 1 Tahun 2017"],
    expertQuote: "Kami membantu industri mendapatkan kepastian hukum penggunaan air dengan tetap menjaga kelestarian CAT."
  }
]

const portfolioItems = [
  {
    title: "Penyusunan Dokumen UKL-UPL Industri Tekstil",
    slug: "ukl-upl-tekstil-maju",
    client: "PT Maju Tekstil Indonesia",
    year: 2023,
    category: "Lingkungan",
    location: "Bandung, Jawa Barat",
    description: "Penyusunan dokumen pengelolaan lingkungan untuk pabrik tekstil kapasitas 5000 ton/tahun.",
    challenge: "Lokasi pabrik berbatasan langsung dengan pemukiman padat penduduk, memerlukan kajian dampak kebisingan dan limbah cair yang ketat.",
    solution: "Implementasi desain IPAL tertutup dengan sistem scrubber untuk pengendalian bau dan noise barrier setinggi 4 meter.",
    result: "Dokumen UKL-UPL disetujui dalam 45 hari tanpa revisi mayor. Izin Lingkungan terbit tepat waktu.",
    imageUrl: "https://images.unsplash.com/photo-1565610222536-ef125c59da2e?q=80&w=2070&auto=format&fit=crop" // Placeholder
  },
  {
    title: "Pembangunan IPAL Domestik Apartemen",
    slug: "ipal-apartemen-grand-city",
    client: "Apartemen Grand City",
    year: 2023,
    category: "Konstruksi IPAL",
    location: "Bekasi, Jawa Barat",
    description: "Desain dan konstruksi IPAL sistem bio-aerob dengan kapasitas 200 m3/hari.",
    challenge: "Lahan yang tersedia sangat terbatas (hanya 50 m2) di area basement.",
    solution: "Desain IPAL vertikal dengan teknologi Moving Bed Biofilm Reactor (MBBR) untuk efisiensi ruang.",
    result: "Kualitas effluent memenuhi baku mutu Permen LHK 68/2016 dan digunakan kembali untuk penyiraman taman (water recycling).",
    imageUrl: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Andalalin Pusat Perbelanjaan",
    slug: "andalalin-mall-metro",
    client: "Mall Metro Bandung",
    year: 2022,
    category: "Andalalin",
    location: "Bandung, Jawa Barat",
    description: "Kajian dampak lalu lintas untuk pengembangan area komersial baru di jalan arteri.",
    challenge: "Lokasi berada di simpang bersinyal dengan V/C ratio eksisting sudah mencapai 0.85 (jenuh).",
    solution: "Rekomendasi pelebaran kaki simpang (flaring) dan pengaturan siklus lampu lalu lintas adaptif.",
    result: "Rekomendasi disetujui Dishub & Polda Jabar. Kinerja simpang pasca-konstruksi terjaga di V/C ratio 0.75.",
    imageUrl: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop"
  }
]

async function main() {
  console.log('Start seeding ...')

  // Seed Services
  for (const s of services) {
    const service = await prisma.service.upsert({
      where: { slug: s.slug },
      update: s,
      create: s,
    })
    console.log(`Created/Updated service: ${service.title}`)
  }

  // Seed Portfolio
  for (const p of portfolioItems) {
    const item = await prisma.portfolioItem.upsert({
      where: { slug: p.slug },
      update: p,
      create: p,
    })
    console.log(`Created/Updated portfolio item: ${item.title}`)
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
