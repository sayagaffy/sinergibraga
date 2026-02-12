'use client'

import { Button } from "@/components/ui/Button"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle2, Leaf, ShieldCheck } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Hero() {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
            {/* Background Decor - Subtle & Professional */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50/50 skew-x-12 origin-top-right z-0" />
            <div className="absolute top-20 right-20 w-96 h-96 bg-sbm-blue/5 rounded-full blur-3xl z-0" />

            <div className="container px-4 md:px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="max-w-2xl"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-slate-50 border border-slate-100/80 shadow-sm text-slate-600 text-sm font-medium backdrop-blur-sm">
                            <span className="flex h-2 w-2 rounded-full bg-sbm-blue animate-pulse"></span>
                            Lingkungan & Perizinan Terpercaya
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 leading-[1.05] mb-8 text-balance">
                            Solusi Tepat untuk <br className="hidden lg:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sbm-blue to-blue-600">Keberlanjutan Bisnis</span>
                        </h1>

                        <p className="text-xl text-slate-500 leading-relaxed mb-10 max-w-lg font-light">
                            Sinergi Braga Mandiri hadir sebagai mitra strategis dalam penyusunan dokumen lingkungan (AMDAL/UKL-UPL), Persetujuan Teknis, dan Perizinan Berusaha.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-16">
                            <Link href="/contact">
                                <Button size="lg" className="h-14 px-8 text-lg font-semibold bg-sbm-blue hover:bg-blue-700 text-white shadow-[0_10px_30px_-10px_rgba(0,86,179,0.3)] hover:shadow-[0_20px_40px_-10px_rgba(0,86,179,0.4)] rounded-full w-full sm:w-auto transition-all duration-300">
                                    Hubungi Kami
                                </Button>
                            </Link>
                            <Link href="/services">
                                <Button size="lg" variant="outline" className="h-14 px-8 text-lg font-medium text-slate-600 border-slate-200 hover:bg-slate-50 hover:text-slate-900 rounded-full w-full sm:w-auto transition-all">
                                    Lihat Layanan
                                </Button>
                            </Link>
                        </div>

                        {/* Trust Indicators */}
                        <div className="grid grid-cols-2 gap-8 pt-8 border-t border-slate-100">
                            <div className="flex items-start gap-4 group">
                                <div className="p-3 bg-blue-50/50 rounded-2xl text-sbm-blue group-hover:bg-blue-50 transition-colors">
                                    <ShieldCheck className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 text-lg">Terakreditasi</h4>
                                    <p className="text-sm text-slate-500 leading-snug">Tim bersertifikasi resmi & berpengalaman</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 group">
                                <div className="p-3 bg-green-50/50 rounded-2xl text-green-600 group-hover:bg-green-50 transition-colors">
                                    <CheckCircle2 className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 text-lg">Tepat Waktu</h4>
                                    <p className="text-sm text-slate-500 leading-snug">Jaminan penyelesaian sesuai target</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Visual Content - Placeholder for SBM Image or High Quality Stock */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative h-[500px] lg:h-[600px] w-full hidden lg:block"
                    >
                        <div className="absolute inset-0 bg-slate-200 rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
                                alt="Modern Architecture and Nature"
                                fill
                                className="object-cover"
                                priority
                            />

                            {/* Floating Card */}
                            <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-xl border border-white/20 shadow-lg">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm font-medium text-slate-500 mb-1">Total Proyek Selesai</p>
                                        <p className="text-3xl font-bold text-slate-900">150+</p>
                                    </div>
                                    <div className="h-12 w-12 bg-sbm-blue rounded-full flex items-center justify-center text-white">
                                        <Leaf className="w-6 h-6" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-dots-pattern opacity-20" />
                    </motion.div>

                </div>
            </div>
        </section>
    )
}
