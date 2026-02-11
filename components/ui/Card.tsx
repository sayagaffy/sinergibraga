'use client'

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { ReactNode } from "react"

interface CardProps {
  children: ReactNode
  className?: string
  hoverEffect?: boolean
}

export function Card({ children, className, hoverEffect = true }: CardProps) {
  return (
    <motion.div
      whileHover={hoverEffect ? { y: -4, boxShadow: "0 20px 40px -15px rgba(0, 86, 179, 0.1)" } : {}}
      className={cn(
        "rounded-2xl p-8 transition-all duration-300 relative overflow-hidden group",
        "bg-white border border-slate-100 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)]",
        className
      )}
    >
      {/* Subtle top highlighting for 'premium' feel */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-slate-100 to-transparent opacity-50" />
      {children}
    </motion.div>
  )
}
