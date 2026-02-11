'use client'

import { Card } from "@/components/ui/Card"
import { FileText, Trophy, Scale, Quote } from "lucide-react"
import Link from "next/link"

interface GeoFactSheetProps {
  statistics?: Record<string, string | number> | null
  citations?: Array<{
    sourceTitle: string
    sourceUrl?: string | null
    contextClause?: string | null
  }> | null
  expertQuote?: string | null
}

export function GeoFactSheet({ statistics, citations, expertQuote }: GeoFactSheetProps) {
  if (!statistics && (!citations || citations.length === 0) && !expertQuote) return null

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {/* Statistics Card */}
      {statistics && (
        <Card className="bg-gradient-to-br from-white to-blue-50 dark:from-slate-900 dark:to-slate-800 border-l-4 border-l-sbm-blue group hover:shadow-xl hover:translate-y-[-4px] transition-all duration-300">
          <div className="flex items-center gap-4 mb-6 pb-4 border-b border-slate-200 dark:border-slate-700">
            <div className="p-3 bg-blue-100 text-sbm-blue rounded-xl group-hover:scale-110 group-hover:rotate-6 transition-transform shadow-sm">
              <Trophy className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-xl text-slate-900 dark:text-white">Fakta & Statistik</h3>
              <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold mt-1">Data Kuantitatif</p>
            </div>
          </div>
          <div className="grid gap-4">
            {Object.entries(statistics).map(([key, value]) => (
              <div key={key} className="flex justify-between items-center p-4 rounded-lg bg-white dark:bg-slate-900/50 border border-slate-100 dark:border-slate-700 hover:border-sbm-blue/50 hover:bg-blue-50/50 dark:hover:bg-slate-800 transition-all group/stat">
                <span className="text-slate-600 dark:text-slate-400 text-sm font-medium capitalize flex-1 pr-4 group-hover/stat:text-sbm-blue transition-colors">
                  {key.replace(/([A-Z])/g, ' ').trim()}
                </span>
                <span className="font-bold text-lg text-sbm-blue dark:text-blue-400 tabular-nums bg-blue-50 dark:bg-blue-900/20 px-3 py-1 rounded-md">{value}</span>
              </div>
            ))}
          </div>
        </Card>
      )}

      {/* Citations / Regulations Card */}
      {citations && citations.length > 0 && (
        <Card className="bg-gradient-to-br from-white to-teal-50 dark:from-slate-900 dark:to-slate-800 border-l-4 border-l-sbm-teal group hover:shadow-xl hover:translate-y-[-4px] transition-all duration-300">
          <div className="flex items-center gap-4 mb-6 pb-4 border-b border-slate-200 dark:border-slate-700">
            <div className="p-3 bg-teal-100 text-sbm-teal rounded-xl group-hover:scale-110 group-hover:-rotate-6 transition-transform shadow-sm">
              <Scale className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-xl text-slate-900 dark:text-white">Dasar Hukum & Referensi</h3>
              <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold mt-1">Regulasi Terkait</p>
            </div>
          </div>
          <ul className="space-y-4">
            {citations.map((cit, idx) => (
              <li key={idx} className="group/item relative pl-6 border-l-2 border-slate-200 hover:border-sbm-teal transition-colors py-1">
                <div className="absolute -left-[5px] top-2.5 w-2.5 h-2.5 rounded-full bg-slate-200 group-hover/item:bg-sbm-teal transition-colors ring-4 ring-white dark:ring-slate-900" />

                {cit.sourceUrl ? (
                  <Link href={cit.sourceUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center font-bold text-slate-800 dark:text-white hover:text-sbm-teal transition-colors mb-1 gap-1 group-hover/item:translate-x-1 transition-transform">
                    {cit.sourceTitle} <span className="text-xs text-slate-400 font-normal opacity-0 group-hover/item:opacity-100 transition-opacity">↗</span>
                  </Link>
                ) : (
                  <div className="font-bold text-slate-800 dark:text-white mb-1 group-hover/item:translate-x-1 transition-transform">{cit.sourceTitle}</div>
                )}

                {cit.contextClause && (
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed bg-slate-50 dark:bg-slate-900/30 p-3 rounded-lg italic border border-slate-100 dark:border-slate-800 mt-2 text-justify">
                    "{cit.contextClause}"
                  </p>
                )}
              </li>
            ))}
          </ul>
        </Card>
      )}

      {/* Expert Quote Card */}
      {expertQuote && (
        <Card className="col-span-1 md:col-span-2 bg-slate-900 text-white border-l-4 border-l-sbm-blue relative overflow-hidden group hover:shadow-xl hover:scale-[1.01] transition-all duration-500">
           <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Quote className="w-32 h-32" />
           </div>
           <div className="relative z-10 flex gap-4 p-4 items-start">
              <div className="p-3 bg-white/10 rounded-xl shrink-0">
                <Quote className="w-6 h-6 text-sbm-blue" />
              </div>
              <div>
                <h3 className="font-bold text-xl text-white mb-2">Kutipan Ahli</h3>
                <blockquote className="text-lg italic font-light text-slate-200 leading-relaxed">
                  "{expertQuote}"
                </blockquote>
              </div>
           </div>
        </Card>
      )}
    </div>
  )
}
