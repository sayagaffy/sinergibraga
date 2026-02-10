import Script from "next/script"

export function SchemaOrg() {
  return (
    <Script id="schema-org" type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          {
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
          },
          {
            "@type": "Service",
            "name": "Konsultan Lingkungan Hidup",
            "provider": {
              "@id": "https://sinergibragamandiri.com/#organization"
            },
            "areaServed": "Indonesia",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Layanan SBM",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "AMDAL & UKL-UPL"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Instalasi Pengolahan Air Limbah (IPAL)"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Andalalin (Analisis Dampak Lalu Lintas)"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Sertifikat Laik Fungsi (SLF)"
                  }
                }
              ]
            }
          }
        ]
      })}
    </Script>
  )
}
