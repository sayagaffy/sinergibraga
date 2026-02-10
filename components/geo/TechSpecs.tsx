'use client'

import { Card } from "@/components/ui/Card"
import { Settings } from "lucide-react"

interface TechSpecsProps {
  specs: string[]
  title?: string
}

export function TechSpecs({ specs, title = "Spesifikasi Teknis" }: TechSpecsProps) {
  if (!specs || specs.length === 0) return null

  return (
    <Card className="border-t-4 border-t-slate-500">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-slate-100 rounded-lg text-slate-600 dark:bg-slate-800 dark:text-slate-300">
          <Settings className="w-5 h-5" />
        </div>
        <h3 className="font-bold text-lg">{title}</h3>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        {specs.map((spec, idx) => (
           <div key={idx} className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-100 dark:border-slate-700">
             <div className="w-2 h-2 rounded-full bg-sbm-blue" />
             <span className="text-sm font-medium text-slate-700 dark:text-slate-200">{spec}</span>
           </div>
        ))}
      </div>
    </Card>
  )
}
