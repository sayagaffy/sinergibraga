'use client'

import { useState } from 'react'
import { Section } from "@/components/ui/Section"
import { Card } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear error on change
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) newErrors.name = "Nama wajib diisi"
    if (!formData.email.trim()) newErrors.email = "Email wajib diisi"
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Format email tidak valid"

    if (!formData.message.trim()) newErrors.message = "Pesan wajib diisi"

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    // Simulate submission
    console.log("Submitting form:", formData)
    setIsSubmitted(true)
    setErrors({})
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

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

              {isSubmitted ? (
                <div className="bg-green-50 text-green-700 p-4 rounded-lg border border-green-200 mb-6" role="alert">
                  <h3 className="font-bold">Pesan Terkirim!</h3>
                  <p>Terima kasih telah menghubungi kami. Tim kami akan segera merespons pesan Anda.</p>
                  <Button variant="outline" className="mt-4" onClick={() => setIsSubmitted(false)}>Kirim Pesan Lain</Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">Nama Lengkap *</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full p-3 rounded-lg border ${errors.name ? 'border-red-500' : 'border-slate-300'} focus:ring-2 focus:ring-sbm-blue outline-none`}
                        placeholder="John Doe"
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">Email *</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full p-3 rounded-lg border ${errors.email ? 'border-red-500' : 'border-slate-300'} focus:ring-2 focus:ring-sbm-blue outline-none`}
                        placeholder="email@company.com"
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">Nomor Telepon</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-sbm-blue outline-none"
                      placeholder="081234567890"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">Pesan / Kebutuhan *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full p-3 rounded-lg border ${errors.message ? 'border-red-500' : 'border-slate-300'} focus:ring-2 focus:ring-sbm-blue outline-none h-32`}
                      placeholder="Jelaskan kebutuhan Anda..."
                    />
                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                  </div>

                  <Button type="submit" className="w-full">Kirim Pesan</Button>
                </form>
              )}
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
                 <div className="w-full h-full bg-slate-300" />
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}
