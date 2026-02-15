'use client'

import { motion } from "framer-motion"
import { Award, Linkedin, Quote, UserCheck } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface ExpertInsightProps {
  expert: {
    name: string
    role: string
    expertQuote: string
    photoUrl?: string | null
    linkedinUrl?: string | null
    credentials?: string | null
  }
}

export function ExpertInsight({ expert }: ExpertInsightProps) {
  if (!expert) return null

  // Split credentials by newline and take the first 3
  const credentialList = expert.credentials
    ? expert.credentials.split('\n').filter(c => c.trim().length > 0).slice(0, 3)
    : []

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white text-slate-900 relative overflow-hidden group rounded-2xl p-8 shadow-sm border border-slate-200"
    >
      {/* Background Decor */}
      <div className="absolute top-0 right-0 p-8 opacity-5 transition-opacity duration-500 group-hover:opacity-10 group-hover:scale-110 transform origin-top-right">
        <Quote className="w-48 h-48 text-sbm-blue" />
      </div>

      <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
        {/* Expert Photo */}
        <div className="shrink-0 mx-auto md:mx-0">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-sbm-blue shadow-[0_0_30px_rgba(0,86,179,0.1)] group-hover:shadow-[0_0_50px_rgba(0,86,179,0.2)] transition-shadow duration-500 relative">
            {expert.photoUrl ? (
              <Image
                src={expert.photoUrl}
                alt={expert.name}
                fill sizes="(max-width: 768px) 128px, 160px"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            ) : (
              <div className="w-full h-full bg-slate-100 flex items-center justify-center">
                <UserCheck className="w-12 h-12 text-slate-400" />
              </div>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 space-y-4 text-center md:text-left w-full">
          <div>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-2 mb-2 justify-center md:justify-start">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
                {expert.name}
              </h3>
              {expert.linkedinUrl && (
                <Link href={expert.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-colors p-1 hover:bg-blue-50 rounded-full">
                  <Linkedin className="w-5 h-5" />
                </Link>
              )}
            </div>
            <p className="text-sbm-teal font-medium text-sm tracking-[0.2em] uppercase">{expert.role}</p>
          </div>

          <blockquote className="text-lg md:text-xl italic font-light leading-relaxed border-t md:border-t-0 md:border-l-4 border-sbm-blue pt-4 md:pt-0 md:pl-6 text-slate-600">
            &quot;{expert.expertQuote}&quot;
          </blockquote>

          {credentialList.length > 0 && (
            <div className="pt-6 mt-2 border-t border-slate-100">
              <div className="flex flex-wrap justify-center md:justify-start gap-3">
                {credentialList.map((cred, idx) => (
                  <div key={idx} className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 rounded-full border border-slate-200 text-xs text-slate-600 hover:bg-slate-100 transition-colors cursor-default">
                    <Award className="w-3 h-3 text-sbm-teal" />
                    <span>{cred}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}
