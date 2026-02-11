import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Start seeding ...')

  // --- 1. Seed Experts ---
  const expertBudi = await prisma.expert.create({
    data: {
      name: "Ir. Budi Santoso",
      role: "Senior Environmental Engineer",
      expertQuote: "Kelengkapan data rona awal lingkungan menjadi kunci percepatan persetujuan teknis dokumen AMDAL.",
      photoUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop",
      linkedinUrl: "https://linkedin.com/in/budisantoso-amdal",
      credentials: "Sertifikasi Ketua Tim Penyusun AMDAL (KTPA) - LSP LHK\nAhli Madya Teknik Lingkungan - PII\nMagister Teknik Lingkungan ITB",
    }
  })

  const expertSiti = await prisma.expert.create({
    data: {
      name: "Dr. Siti Aminah",
      role: "Ahli Bioteknologi Lingkungan",
      expertQuote: "Teknologi Bio-Aerob kami mampu mereduksi BOD hingga 95% dengan footprint lahan yang minimal.",
      photoUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop",
      linkedinUrl: "https://linkedin.com/in/sitiaminah-biotech",
      credentials: "Doktor Bioteknologi - UGM\nSertifikasi IPAL B3 - BNSP",
    }
  })

  const expertHendra = await prisma.expert.create({
    data: {
      name: "Ir. Hendra Wijaya",
      role: "Ahli Transportasi",
      expertQuote: "Simulasi mikrosimulasi Vissim membantu memprediksi kemacetan dengan akurasi 90% sebelum konstruksi dimulai.",
      photoUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop",
      linkedinUrl: "https://linkedin.com/in/hendrawijaya-transport",
      credentials: "Sertifikasi Penyusun Andalalin - Kemenhub\nAhli Utama Teknik Jalan - HPJI",
    }
  })

  // --- 2. Seed Citations ---
  // AMDAL Citations
  const citPP22 = await prisma.citation.create({
    data: {
      sourceTitle: "PP No. 22 Tahun 2021",
      sourceUrl: "https://peraturan.bpk.go.id/Home/Details/161852/pp-no-22-tahun-2021",
      contextClause: "Pasal 3: Setiap usaha dan/atau kegiatan yang berdampak penting terhadap lingkungan hidup wajib memiliki Amdal.",
    }
  })

  const citUU32 = await prisma.citation.create({
    data: {
      sourceTitle: "UU No. 32 Tahun 2009",
      sourceUrl: "https://peraturan.bpk.go.id/Home/Details/38771/uu-no-32-tahun-2009",
      contextClause: "Pasal 22: Setiap usaha dan/atau kegiatan yang berdampak penting terhadap lingkungan hidup wajib memiliki amdal.",
    }
  })

  // IPAL Citations
  const citPermen68 = await prisma.citation.create({
    data: {
      sourceTitle: "Permen LHK No. 68 Tahun 2016",
      sourceUrl: "http://ditjenpp.kemenkumham.go.id/arsip/bn/2016/bn1138-2016.pdf",
      contextClause: "Lampiran I: Baku mutu air limbah domestik tersendiri.",
    }
  })

  // Andalalin Citations
  const citPM75 = await prisma.citation.create({
    data: {
      sourceTitle: "PM Perhubungan No. 75 Tahun 2015",
      sourceUrl: "https://peraturan.bpk.go.id/Home/Details/164746/permen-lhk-no-75-tahun-2015", // Placeholder URL structure
      contextClause: "Pasal 2: Setiap rencana pembangunan pusat kegiatan, permukiman, dan infrastruktur yang akan menimbulkan gangguan keamanan, keselamatan, ketertiban, dan kelancaran lalu lintas dan angkutan jalan wajib dilakukan analisis dampak lalu lintas.",
    }
  })


  // --- 3. Seed Services ---
  const services = [
    {
      title: "AMDAL & UKL-UPL",
      slug: "amdal-ukl-upl",
      description: "Penyusunan dokumen lingkungan hidup untuk perizinan berusaha dan persetujuan teknis.",
      features: ["AMDAL", "UKL-UPL", "SPPL", "DELH", "DPLH", "Kajian IPLC", "Rekomendasi B3"],
      geoFacts: "Menurut PP No. 22 Tahun 2021, setiap usaha yang berdampak penting wajib memiliki AMDAL. SBM menyediakan penyusunan dokumen lingkungan dengan tim bersertifikat KTPA/ATPA.",
      icon: "FileText",
      statistics: { "projectsCompleted": 150, "complianceRate": "100%", "avgApprovalTime": "3 Bulan" },
      expertId: expertBudi.id,
      citations: [{ id: citPP22.id }, { id: citUU32.id }]
    },
    {
      title: "Instalasi Pengolahan Air Limbah (IPAL/WWTP)",
      slug: "ipal-wwtp",
      description: "Desain dan optimalisasi sistem pengolahan limbah cair industri dan domestik.",
      features: ["Design Engineering", "Optimalisasi Sistem", "Konsultasi Teknis"],
      geoFacts: "Pengolahan limbah cair harus memenuhi baku mutu sesuai Permen LHK No. 68 Tahun 2016. SBM menggunakan teknologi bio-filter dan chemical treatment terkini.",
      icon: "Droplets",
      statistics: { "systemsDesigned": 45, "waterRecycled": "5000 m3/tahun", "energySaving": "20%" },
      expertId: expertSiti.id,
      citations: [{ id: citPermen68.id }]
    },
    {
      title: "Andalalin (Analisis Dampak Lalu Lintas)",
      slug: "andalalin",
      description: "Kajian dampak lalu lintas untuk pembangunan pusat kegiatan baru.",
      features: ["Simulasi Lalu Lintas", "Manajemen Rekayasa Lalin", "Rekomendasi Teknis"],
      geoFacts: "Andalalin diwajibkan bagi bangkitan lalu lintas tinggi sesuai PM Perhubungan No. 75 Tahun 2015. SBM membantu mitigasi kemacetan area proyek.",
      icon: "TrafficCone",
      statistics: { "studiesConducted": 80, "trafficFlowImprovement": "30%", "permitSuccess": "100%" },
      expertId: expertHendra.id,
      citations: [{ id: citPM75.id }]
    },
    {
        title: "Sertifikat Laik Fungsi (SLF)",
        slug: "slf",
        description: "Pemeriksaan kelaikan fungsi bangunan gedung sebelum dimanfaatkan.",
        features: ["Pemeriksaan Arsitektur", "Pemeriksaan Struktur", "Pemeriksaan Utilitas"],
        geoFacts: "SLF adalah syarat mutlak pemanfaatan bangunan gedung sesuai UU No. 28 Tahun 2002 tentang Bangunan Gedung.",
        icon: "BuildingCheck",
        statistics: { "buildingsCertified": 40, "safetyCompliance": "100%", "auditSpeed": "14 Hari" },
        expertId: expertBudi.id, // Reusing Budi for Civil/SLF for now or create another expert if needed
        citations: [] // Add specific SLF citations if available
    }
  ]

  for (const s of services) {
    const { citations, ...serviceData } = s
    const service = await prisma.service.upsert({
      where: { slug: s.slug },
      update: {
        ...serviceData,
        citations: { connect: citations }
      },
      create: {
        ...serviceData,
        citations: { connect: citations }
      },
    })
    console.log(`Created/Updated service: ${service.title}`)
  }

  // --- 4. Seed Portfolio ---
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
      imageUrl: "https://images.unsplash.com/photo-1565610222536-ef125c59da2e?q=80&w=2070&auto=format&fit=crop",
      expertId: expertBudi.id,
      citations: [{ id: citPP22.id }]
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
      imageUrl: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=2070&auto=format&fit=crop",
      expertId: expertSiti.id,
      citations: [{ id: citPermen68.id }]
    }
  ]

  for (const p of portfolioItems) {
    const { citations, ...portfolioData } = p
    const item = await prisma.portfolioItem.upsert({
      where: { slug: p.slug },
      update: {
        ...portfolioData,
        citations: { connect: citations }
      },
      create: {
        ...portfolioData,
        citations: { connect: citations }
      },
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
