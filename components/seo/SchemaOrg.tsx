import Script from "next/script"

interface SchemaOrgProps {
  type?: 'Organization' | 'Service' | 'Project' | 'CreativeWork'
  data?: any
}

export function SchemaOrg({ type = 'Organization', data }: SchemaOrgProps) {
  const baseOrganization = {
    "@type": "Organization",
    "@id": "https://sinergibragamandiri.com/#organization",
    "name": "PT Sinergi Braga Mandiri",
    "url": "https://sinergibragamandiri.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://sinergibragamandiri.com/logo.png"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+62-22-7568800",
      "contactType": "customer service",
      "areaServed": "ID",
      "availableLanguage": "Indonesian"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jl. Sukabumi No.42, Kel. Kacapiring",
      "addressLocality": "Bandung",
      "addressRegion": "Jawa Barat",
      "postalCode": "40271",
      "addressCountry": "ID"
    }
  }

  const schemaGraph: any[] = [baseOrganization]

  if (type === 'Service' && data) {
    const serviceSchema = {
      "@type": "Service",
      "name": data.title,
      "description": data.description,
      "provider": {
        "@id": "https://sinergibragamandiri.com/#organization"
      },
      "areaServed": "Indonesia",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Layanan Lingkungan",
        "itemListElement": Array.isArray(data.features)
          ? data.features.map((feat: string) => ({
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": feat
              }
            }))
          : []
      }
    }
    schemaGraph.push(serviceSchema)

    // Add Expert schema if available
    if (data.expert) {
        const expertSchema = {
            "@type": "Person",
            "@id": `https://sinergibragamandiri.com/#person-${data.expert.id}`,
            "name": data.expert.name,
            "jobTitle": data.expert.role,
            "image": data.expert.photoUrl,
            "url": data.expert.linkedinUrl,
            "worksFor": {
                "@id": "https://sinergibragamandiri.com/#organization"
            }
        }
        schemaGraph.push(expertSchema)
    }

    // Add FAQ Schema
    if (data.faqs && data.faqs.length > 0) {
      const faqSchema = {
        "@type": "FAQPage",
        "mainEntity": data.faqs.map((faq: any) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      }
      schemaGraph.push(faqSchema)
    }
  }

  if ((type === 'Project' || type === 'CreativeWork') && data) {
    const projectSchema = {
      "@type": type,
      "name": data.title,
      "description": data.description,
      "provider": {
        "@id": "https://sinergibragamandiri.com/#organization"
      },
      "locationCreated": {
        "@type": "Place",
        "name": data.location
      },
      "dateCreated": data.year.toString(),
      "about": {
        "@type": "Thing",
        "name": data.category
      }
    }
    schemaGraph.push(projectSchema)
  }

  return (
    <Script id="schema-org" type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@graph": schemaGraph
      })}
    </Script>
  )
}
