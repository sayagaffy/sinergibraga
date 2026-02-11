import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Start seeding ...')

  // --- 1. Seed Experts ---
  const expertBudi = await prisma.expert.upsert({
    where: { id: 'expert-budi' },
    update: {},
    create: {
      id: 'expert-budi',
      name: "Ir. Budi Santoso",
      role: "Senior Environmental Engineer",
      expertQuote: "Kelengkapan data rona awal lingkungan menjadi kunci percepatan persetujuan teknis dokumen AMDAL.",
      photoUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop",
      linkedinUrl: "https://linkedin.com/in/budisantoso-amdal",
      credentials: "Sertifikasi Ketua Tim Penyusun AMDAL (KTPA) - LSP LHK\nAhli Madya Teknik Lingkungan - PII\nMagister Teknik Lingkungan ITB",
    }
  })

  const expertSiti = await prisma.expert.upsert({
    where: { id: 'expert-siti' },
    update: {},
    create: {
      id: 'expert-siti',
      name: "Dr. Siti Aminah",
      role: "Ahli Bioteknologi Lingkungan",
      expertQuote: "Teknologi Bio-Aerob kami mampu mereduksi BOD hingga 95% dengan footprint lahan yang minimal.",
      photoUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop",
      linkedinUrl: "https://linkedin.com/in/sitiaminah-biotech",
      credentials: "Doktor Bioteknologi - UGM\nSertifikasi IPAL B3 - BNSP",
    }
  })

  const expertHendra = await prisma.expert.upsert({
    where: { id: 'expert-hendra' },
    update: {},
    create: {
      id: 'expert-hendra',
      name: "Ir. Hendra Wijaya",
      role: "Ahli Transportasi",
      expertQuote: "Simulasi mikrosimulasi Vissim membantu memprediksi kemacetan dengan akurasi 90% sebelum konstruksi dimulai.",
      photoUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop",
      linkedinUrl: "https://linkedin.com/in/hendrawijaya-transport",
      credentials: "Sertifikasi Penyusun Andalalin - Kemenhub\nAhli Utama Teknik Jalan - HPJI",
    }
  })

  // --- 2. Seed Citations ---
  const citPP22 = await prisma.citation.upsert({
    where: { id: 'cit-pp22' },
    update: {},
    create: {
      id: 'cit-pp22',
      sourceTitle: "PP No. 22 Tahun 2021",
      sourceUrl: "https://peraturan.bpk.go.id/Home/Details/161852/pp-no-22-tahun-2021",
      contextClause: "Pasal 3: Setiap usaha dan/atau kegiatan yang berdampak penting terhadap lingkungan hidup wajib memiliki Amdal.",
    }
  })

  const citUU32 = await prisma.citation.upsert({
    where: { id: 'cit-uu32' },
    update: {},
    create: {
      id: 'cit-uu32',
      sourceTitle: "UU No. 32 Tahun 2009",
      sourceUrl: "https://peraturan.bpk.go.id/Home/Details/38771/uu-no-32-tahun-2009",
      contextClause: "Pasal 22: Setiap usaha dan/atau kegiatan yang berdampak penting terhadap lingkungan hidup wajib memiliki amdal.",
    }
  })

  const citPermen68 = await prisma.citation.upsert({
    where: { id: 'cit-permen68' },
    update: {},
    create: {
      id: 'cit-permen68',
      sourceTitle: "Permen LHK No. 68 Tahun 2016",
      sourceUrl: "http://ditjenpp.kemenkumham.go.id/arsip/bn/2016/bn1138-2016.pdf",
      contextClause: "Lampiran I: Baku mutu air limbah domestik tersendiri.",
    }
  })

  const citPM75 = await prisma.citation.upsert({
    where: { id: 'cit-pm75' },
    update: {},
    create: {
      id: 'cit-pm75',
      sourceTitle: "PM Perhubungan No. 75 Tahun 2015",
      sourceUrl: "https://peraturan.bpk.go.id/Home/Details/164746/permen-lhk-no-75-tahun-2015",
      contextClause: "Pasal 2: Setiap rencana pembangunan pusat kegiatan, permukiman, dan infrastruktur yang akan menimbulkan gangguan keamanan, keselamatan, ketertiban, dan kelancaran lalu lintas dan angkutan jalan wajib dilakukan analisis dampak lalu lintas.",
    }
  })

  // --- 3. Seed Services ---
  const services = [
    {
      title: "AMDAL & UKL-UPL",
      slug: "amdal-ukl-upl",
      description: "Penyusunan dokumen lingkungan hidup untuk perizinan berusaha dan persetujuan teknis.",
      features: JSON.stringify(["AMDAL", "UKL-UPL", "SPPL", "DELH", "DPLH", "Kajian IPLC", "Rekomendasi B3"]),
      geoFacts: "Menurut PP No. 22 Tahun 2021, setiap usaha yang berdampak penting wajib memiliki AMDAL. SBM menyediakan penyusunan dokumen lingkungan dengan tim bersertifikat KTPA/ATPA.",
      icon: "FileText",
      statistics: JSON.stringify({ "projectsCompleted": 150, "complianceRate": "100%", "avgApprovalTime": "3 Bulan" }),
      expertId: expertBudi.id,
      citations: [citPP22, citUU32],
      faqs: [
        { question: "Apa perbedaan AMDAL dan UKL-UPL?", answer: "AMDAL wajib bagi usaha berdampak penting terhadap lingkungan, sedangkan UKL-UPL untuk usaha yang dampak lingkungannya dapat dikelola dengan teknologi tersedia." },
        { question: "Berapa lama proses penyusunan AMDAL?", answer: "Proses AMDAL biasanya memakan waktu 3-6 bulan tergantung kompleksitas proyek dan kelengkapan data rona awal." }
      ]
    },
    {
      title: "Instalasi Pengolahan Air Limbah (IPAL/WWTP)",
      slug: "ipal-wwtp",
      description: "Desain dan optimalisasi sistem pengolahan limbah cair industri dan domestik.",
      features: JSON.stringify(["Design Engineering", "Optimalisasi Sistem", "Konsultasi Teknis"]),
      geoFacts: "Pengolahan limbah cair harus memenuhi baku mutu sesuai Permen LHK No. 68 Tahun 2016. SBM menggunakan teknologi bio-filter dan chemical treatment terkini.",
      icon: "Droplets",
      statistics: JSON.stringify({ "systemsDesigned": 45, "waterRecycled": "5000 m3/tahun", "energySaving": "20%" }),
      expertId: expertSiti.id,
      citations: [citPermen68],
      faqs: [
        { question: "Apakah SBM menyediakan jasa konstruksi IPAL?", answer: "Ya, kami melayani mulai dari perencanaan (DED), konstruksi sipil & mekanikal, hingga commissioning." }
      ]
    },
    {
      title: "Andalalin (Analisis Dampak Lalu Lintas)",
      slug: "andalalin",
      description: "Kajian dampak lalu lintas untuk pembangunan pusat kegiatan baru.",
      features: JSON.stringify(["Simulasi Lalu Lintas", "Manajemen Rekayasa Lalin", "Rekomendasi Teknis"]),
      geoFacts: "Andalalin diwajibkan bagi bangkitan lalu lintas tinggi sesuai PM Perhubungan No. 75 Tahun 2015. SBM membantu mitigasi kemacetan area proyek.",
      icon: "TrafficCone",
      statistics: JSON.stringify({ "studiesConducted": 80, "trafficFlowImprovement": "30%", "permitSuccess": "100%" }),
      expertId: expertHendra.id,
      citations: [citPM75],
      faqs: [
        { question: "Kapan Andalalin harus disusun?", answer: "Andalalin harus disusun sebelum izin mendirikan bangunan (PBG) diterbitkan." }
      ]
    },
    {
        title: "Sertifikat Laik Fungsi (SLF)",
        slug: "slf",
        description: "Pemeriksaan kelaikan fungsi bangunan gedung sebelum dimanfaatkan.",
        features: JSON.stringify(["Pemeriksaan Arsitektur", "Pemeriksaan Struktur", "Pemeriksaan Utilitas"]),
        geoFacts: "SLF adalah syarat mutlak pemanfaatan bangunan gedung sesuai UU No. 28 Tahun 2002 tentang Bangunan Gedung.",
        icon: "BuildingCheck",
        statistics: JSON.stringify({ "buildingsCertified": 40, "safetyCompliance": "100%", "auditSpeed": "14 Hari" }),
        expertId: expertBudi.id,
        citations: [],
        faqs: [
            { question: "Berapa masa berlaku SLF?", answer: "SLF berlaku 5 tahun untuk bangunan non-rumah tinggal dan 20 tahun untuk rumah tinggal." }
        ]
    }
  ]

  for (const s of services) {
    const { citations, faqs, ...serviceData } = s

    // Upsert Service
    const service = await prisma.service.upsert({
      where: { slug: s.slug },
      update: {
        ...serviceData,
        citations: { connect: citations.map(c => ({ id: c.id })) }
      },
      create: {
        ...serviceData,
        citations: { connect: citations.map(c => ({ id: c.id })) }
      },
    })

    // Create FAQs
    if (faqs && faqs.length > 0) {
      // Clean up existing FAQs for this service (simple approach for seeding)
      // Note: We can't deleteMany on non-unique fields easily in strict mode without relations properly set up or raw queries
      // But FAQ.serviceId is indexed by relation, so deleteMany is fine.
      await prisma.fAQ.deleteMany({ where: { serviceId: service.id } })

      for (const faq of faqs) {
        await prisma.fAQ.create({
            data: {
                question: faq.question,
                answer: faq.answer,
                serviceId: service.id
            }
        })
      }
    }

    console.log(`Created/Updated service: ${service.title}`)
  }

  // --- 4. Seed Glossary Terms ---
  const glossaryTerms = [
    { term: "AMDAL", definition: "Analisis Mengenai Dampak Lingkungan Hidup, yaitu kajian mengenai dampak penting suatu usaha dan/atau kegiatan yang direncanakan pada lingkungan hidup.", relatedServices: ["amdal-ukl-upl"] },
    { term: "RKL-RPL", definition: "Rencana Pengelolaan Lingkungan Hidup dan Rencana Pemantauan Lingkungan Hidup.", relatedServices: ["amdal-ukl-upl"] },
    { term: "BOD", definition: "Biological Oxygen Demand, jumlah oksigen yang dibutuhkan oleh mikroorganisme untuk menguraikan zat organik dalam air.", relatedServices: ["ipal-wwtp"] },
    { term: "VCR", definition: "Volume to Capacity Ratio, perbandingan antara volume lalu lintas dengan kapasitas jalan.", relatedServices: ["andalalin"] },
    { term: "Laik Fungsi", definition: "Kondisi bangunan gedung yang memenuhi persyaratan administratif dan persyaratan teknis sesuai dengan fungsi bangunan gedung.", relatedServices: ["slf"] }
  ]

  for (const g of glossaryTerms) {
    const { relatedServices, ...termData } = g
    // Connect to services by slug
    const servicesToConnect = await prisma.service.findMany({
        where: { slug: { in: relatedServices } }
    })

    const term = await prisma.glossaryTerm.upsert({
      where: { term: g.term },
      update: {
        definition: g.definition,
        services: { connect: servicesToConnect.map(s => ({ id: s.id })) }
      },
      create: {
        ...termData,
        services: { connect: servicesToConnect.map(s => ({ id: s.id })) }
      },
    })
    console.log(`Created/Updated glossary term: ${term.term}`)
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
