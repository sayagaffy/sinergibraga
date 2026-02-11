'use client'

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { ReactNode } from "react"

interface ServiceCardProps {
  title: string
  description: string
  details: string
  href: string
  icon?: ReactNode
}

const cardVariants = {
  hover: {
    y: -5,
    transition: { type: "spring", stiffness: 300, damping: 20 }
  }
}

const detailsVariants = {
  hidden: { height: 0, opacity: 0 },
  hover: {
    height: "auto",
    opacity: 1,
    transition: { duration: 0.3, ease: "easeOut" }
  }
}

export function ServiceCard({ title, description, details, href, icon }: ServiceCardProps) {
  return (
    <Link href={href} className="block h-full">
      <motion.div
        className="group relative h-full overflow-hidden rounded-2xl bg-white border border-slate-200 p-6 md:p-8 transition-all duration-300 hover:border-sbm-blue/50 hover:shadow-lg hover:shadow-sbm-blue/5"
        initial="rest"
        whileHover="hover"
        variants={cardVariants}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-sbm-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative z-10 flex flex-col h-full justify-between">
          <div className="space-y-4">
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-sbm-blue transition-colors">
                {title}
              </h3>
              {icon && (
                <div className="p-2 rounded-lg bg-slate-50 text-slate-500 group-hover:text-sbm-blue group-hover:bg-sbm-blue/10 transition-colors">
                  {icon}
                </div>
              )}
            </div>

            <p className="text-slate-600 text-sm leading-relaxed">
              {description}
            </p>

            <motion.div
              variants={detailsVariants}
              initial="hidden"
              className="overflow-hidden"
            >
              <p className="pt-4 text-xs font-medium text-sbm-teal border-t border-slate-100 mt-4">
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
