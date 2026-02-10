import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SchemaOrg } from "@/components/seo/SchemaOrg";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    template: "%s | PT Sinergi Braga Mandiri",
    default: "PT Sinergi Braga Mandiri - Environmental Consultant",
  },
  description: "Konsultan lingkungan hidup terpercaya (AMDAL, UKL-UPL, IPAL) di Bandung, Jawa Barat. Sambut masa depan dengan semangat perubahan.",
  keywords: ["AMDAL", "UKL-UPL", "IPAL", "Lingkungan Hidup", "Konsultan Lingkungan", "Bandung", "Andalalin", "SBM"],
  authors: [{ name: "PT Sinergi Braga Mandiri" }],
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://sinergibragamandiri.com",
    title: "PT Sinergi Braga Mandiri - Solusi Lingkungan Terpercaya",
    description: "Melayani penyusunan dokumen lingkungan, desain IPAL/WWTP, dan perizinan terkait lingkungan hidup.",
    siteName: "PT Sinergi Braga Mandiri",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={cn(inter.variable, "font-sans antialiased min-h-screen flex flex-col")}>
        <Navbar />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
        <SchemaOrg />
      </body>
    </html>
  );
}
