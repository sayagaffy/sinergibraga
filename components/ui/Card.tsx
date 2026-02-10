'use client'

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { ReactNode } from "react"

interface CardProps {
  children: ReactNode
  className?: string
  hoverEffect?: boolean
}

export function Card({ children, className, hoverEffect = true }: CardProps) {
  return (
    <motion.div
      whileHover={hoverEffect ? { y: -5, boxShadow: "0 20px 40px -15px rgba(0, 86, 179, 0.15)" } : {}}
      className={cn(
        "glass-panel rounded-xl p-6 md:p-8 transition-all duration-300",
        "bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border border-slate-200 dark:border-slate-800",
        className
      )}
    >
      {children}
    </motion.div>
  )
}
