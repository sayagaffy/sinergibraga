'use client'

import { motion } from "framer-motion"
import { ArrowRight, LucideIcon } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface ServiceCardProps {
  title: string
  description: string
  details: string
  href: string
  icon?: LucideIcon
}

export function ServiceCard({ title, description, details, href, icon: Icon }: ServiceCardProps) {
  return (
    <Link href={href} className="block h-full">
      <motion.div
        className="group relative h-full overflow-hidden rounded-2xl bg-white/50 dark:bg-slate-900/50 backdrop-blur-md border border-slate-200 dark:border-slate-800 p-6 md:p-8 transition-all duration-300 hover:border-sbm-blue/50 hover:shadow-lg hover:shadow-sbm-blue/5"
        initial={{ y: 0 }}
        whileHover={{ y: -5 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-sbm-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative z-10 flex flex-col h-full justify-between">
          <div className="space-y-4">
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-sbm-blue transition-colors">
                {title}
              </h3>
              {Icon && (
                <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 group-hover:text-sbm-blue group-hover:bg-sbm-blue/10 transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
              )}
            </div>

            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
              {description}
            </p>

            <motion.div
              initial={{ height: 0, opacity: 0 }}
              whileHover={{ height: "auto", opacity: 1 }}
              className="overflow-hidden"
            >
              <p className="pt-4 text-xs font-medium text-sbm-teal dark:text-teal-400 border-t border-slate-100 dark:border-slate-800 mt-4">
                {details}
              </p>
            </motion.div>
          </div>

          <div className="mt-6 flex items-center text-sbm-blue text-sm font-semibold group-hover:gap-2 transition-all">
            Selengkapnya <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </motion.div>
    </Link>
  )
}
