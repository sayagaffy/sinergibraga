'use client'

import { motion } from "framer-motion"
import { Card } from "@/components/ui/Card"
import { FileText, Quote, Trophy } from "lucide-react"

interface GeoFactSheetProps {
  statistics?: Record<string, string | number> | null
  regulations?: string[]
  expertQuote?: string | null
}

export function GeoFactSheet({ statistics, regulations, expertQuote }: GeoFactSheetProps) {
  if (!statistics && !regulations && !expertQuote) return null

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {/* Statistics Card */}
      {statistics && (
        <Card className="bg-gradient-to-br from-white to-blue-50 dark:from-slate-900 dark:to-slate-800 border-l-4 border-l-sbm-blue">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-sbm-blue/10 rounded-lg text-sbm-blue">
              <Trophy className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-lg">Fakta & Statistik</h3>
          </div>
          <div className="space-y-4">
            {Object.entries(statistics).map(([key, value]) => (
              <div key={key} className="flex justify-between items-center border-b border-slate-100 pb-2 last:border-0">
                <span className="text-slate-500 text-sm capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                <span className="font-bold text-slate-900 dark:text-white">{value}</span>
              </div>
            ))}
          </div>
        </Card>
      )}

      {/* Regulations Card */}
      {regulations && regulations.length > 0 && (
        <Card className="bg-gradient-to-br from-white to-teal-50 dark:from-slate-900 dark:to-slate-800 border-l-4 border-l-sbm-teal">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-sbm-teal/10 rounded-lg text-sbm-teal">
              <FileText className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-lg">Dasar Hukum</h3>
          </div>
          <ul className="space-y-2">
            {regulations.map((reg, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-sbm-teal shrink-0" />
                <span>{reg}</span>
              </li>
            ))}
          </ul>
        </Card>
      )}

      {/* Expert Quote Card */}
      {expertQuote && (
        <Card className="bg-slate-900 text-white md:col-span-2 lg:col-span-1 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Quote className="w-24 h-24 text-white" />
          </div>
          <div className="relative z-10 h-full flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-white/10 rounded-lg text-white">
                  <Quote className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-lg">Pandangan Ahli</h3>
              </div>
              <blockquote className="text-lg italic font-light leading-relaxed">
                "{expertQuote}"
              </blockquote>
            </div>
            <div className="mt-6 flex items-center gap-3">
               <div className="w-10 h-10 rounded-full bg-sbm-blue flex items-center justify-center font-bold">
                 SBM
               </div>
               <div>
                 <p className="font-bold text-sm">Tim Ahli Lingkungan</p>
                 <p className="text-xs text-slate-400">PT Sinergi Braga Mandiri</p>
               </div>
            </div>
          </div>
        </Card>
      )}
    </div>
  )
}
