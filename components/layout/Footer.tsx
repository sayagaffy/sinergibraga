import { Facebook, Globe, Instagram, Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-slate-50 text-slate-600 pt-16 pb-8 border-t border-slate-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 flex items-center justify-center">
                <img src="/images/logosvg-sbm.svg" alt="SBM Logo" className="w-full h-full object-contain" />
              </div>
              <span className="text-slate-900 font-bold text-lg">Sinergi Braga Mandiri</span>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              Konsultan lingkungan hidup terpercaya dengan semangat perubahan untuk masa depan yang berkelanjutan.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com/sinergi.braga.mandiri" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-sbm-blue transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="mailto:sbm.environment@gmail.com" className="text-slate-400 hover:text-sbm-blue transition-colors">
                <Mail className="w-5 h-5" />
              </a>
              <a href="https://www.sinergibragamandiri.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-sbm-blue transition-colors">
                <Globe className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-slate-900 font-semibold mb-4">Navigasi</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-sbm-blue transition-colors">Beranda</Link></li>
              <li><Link href="/about" className="hover:text-sbm-blue transition-colors">Tentang Kami</Link></li>
              <li><Link href="/services" className="hover:text-sbm-blue transition-colors">Layanan</Link></li>
              <li><Link href="/portfolio" className="hover:text-sbm-blue transition-colors">Portofolio</Link></li>
              <li><Link href="/contact" className="hover:text-sbm-blue transition-colors">Kontak</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-slate-900 font-semibold mb-4">Layanan Utama</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services/studi-atau-dokumen-lingkungan" className="hover:text-sbm-blue transition-colors">AMDAL & UKL-UPL</Link></li>
              <li><Link href="/services/bidang-instalasi-pengolahan-air-limbah-ipal-wwtp" className="hover:text-sbm-blue transition-colors">IPAL / WWTP</Link></li>
              <li><Link href="/services/andalalin" className="hover:text-sbm-blue transition-colors">Andalalin</Link></li>
              <li><Link href="/services/sertifikat-laik-fungsi" className="hover:text-sbm-blue transition-colors">Sertifikat Laik Fungsi</Link></li>
              <li><Link href="/services/sipa" className="hover:text-sbm-blue transition-colors">Perizinan SIPA</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-slate-900 font-semibold mb-4">Hubungi Kami</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-sbm-blue shrink-0" />
                <span>
                  OFFICE BPBD PHRI Jawa Barat, <br />
                  Jl. Sukabumi No.42, Kel. Kacapiring, <br />
                  Kota Bandung, Jawa Barat 40271
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone className="w-5 h-5 text-sbm-blue shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:081112149222" className="hover:text-sbm-blue">0811-1214-9222 (Mobile)</a>
                  <a href="tel:0227568800" className="hover:text-sbm-blue">022-7568800 (Office)</a>
                </div>
              </li>
              <li className="flex gap-3 items-center">
                <Mail className="w-5 h-5 text-sbm-blue shrink-0" />
                <a href="mailto:sbm.environment@gmail.com" className="hover:text-sbm-blue">sbm.environment@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} PT Sinergi Braga Mandiri. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-slate-900">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-slate-900">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
