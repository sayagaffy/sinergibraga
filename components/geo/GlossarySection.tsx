'use client'

import { BookOpen } from "lucide-react"

interface GlossaryTerm {
  term: string
  definition: string
}

interface GlossarySectionProps {
  terms: GlossaryTerm[]
}

export function GlossarySection({ terms }: GlossarySectionProps) {
  if (!terms || terms.length === 0) return null

  return (
    <div id="glossary" className="py-12 bg-white border-t border-slate-100">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex items-center gap-3 mb-8">
          <BookOpen className="w-6 h-6 text-sbm-teal" />
          <h2 className="text-2xl font-bold text-slate-900">Glosarium Teknis</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {terms.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-slate-50 border border-slate-200 hover:border-sbm-teal/30 hover:shadow-md transition-all group"
            >
              <h3 className="font-bold text-sbm-teal text-lg mb-2 group-hover:text-teal-600 transition-colors">
                {item.term}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {item.definition}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
