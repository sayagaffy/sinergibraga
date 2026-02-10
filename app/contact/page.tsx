'use client'

import { Section } from "@/components/ui/Section"
import { Card } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { MapPin, Phone, Mail, Instagram, Clock } from "lucide-react"
import { motion } from "framer-motion"

export default function ContactPage() {
  return (
    <div className="pt-10">
      <section className="bg-slate-900 py-20 text-white">
        <div className="container px-4 md:px-6 text-center">
          <h1 className="text-4xl font-bold mb-6">Hubungi Kami</h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Tim kami siap membantu Anda memberikan solusi terbaik untuk kebutuhan lingkungan perusahaan Anda.
          </p>
        </div>
      </section>

      <Section>
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">Kirim Pesan</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Nama Lengkap</label>
                    <input type="text" className="w-full p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-sbm-blue outline-none" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <input type="email" className="w-full p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-sbm-blue outline-none" placeholder="email@company.com" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Nomor Telepon</label>
                  <input type="tel" className="w-full p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-sbm-blue outline-none" placeholder="081234567890" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Pesan / Kebutuhan</label>
                  <textarea className="w-full p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-sbm-blue outline-none h-32" placeholder="Jelaskan kebutuhan Anda..." />
                </div>

                <Button className="w-full">Kirim Pesan</Button>
              </form>
            </Card>

            {/* Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">Informasi Kontak</h2>
                <div className="space-y-6">
                  <div className="flex gap-4 items-start">
                    <div className="p-3 bg-sbm-blue/10 rounded-lg text-sbm-blue">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Alamat Kantor</h3>
                      <p className="text-slate-600">
                        OFFICE BPBD PHRI Jawa Barat<br />
                        Jl. Sukabumi No.42, Kel. Kacapiring,<br />
                        Kota Bandung, Jawa Barat 40271
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="p-3 bg-sbm-blue/10 rounded-lg text-sbm-blue">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Telepon</h3>
                      <p className="text-slate-600">Mobile: 0811-1214-9222</p>
                      <p className="text-slate-600">Office: 022-7568800</p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="p-3 bg-sbm-blue/10 rounded-lg text-sbm-blue">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Email</h3>
                      <p className="text-slate-600">sbm.environment@gmail.com</p>
                      <p className="text-slate-600">sinergi.braga.mandiri@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="p-3 bg-sbm-blue/10 rounded-lg text-sbm-blue">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Jam Operasional</h3>
                      <p className="text-slate-600">Senin - Jumat: 08.00 - 17.00 WIB</p>
                      <p className="text-slate-600">Sabtu - Minggu: Tutup</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="w-full h-64 bg-slate-200 rounded-xl overflow-hidden relative">
                 <div className="absolute inset-0 flex items-center justify-center text-slate-500">
                    <span className="flex items-center gap-2"><MapPin /> Google Maps Embed</span>
                 </div>
                 {/* Simulate Map */}
                 <div className="w-full h-full bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=-6.914744,107.609810&zoom=15&size=600x300&key=YOUR_API_KEY')] bg-cover bg-center" />
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}
