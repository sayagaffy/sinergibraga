'use client'

import { Button } from "@/components/ui/Button"
import { cn } from "@/lib/utils"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowRight, Menu, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import * as React from "react"

const navItems = [
  { name: "Beranda", href: "/" },
  { name: "Layanan", href: "/services" },
  { name: "Portofolio", href: "/portfolio" },
  { name: "Tentang Kami", href: "/about" },
  { name: "Kontak", href: "/contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)
  const pathname = usePathname()

  // Determine if we are on the homepage (transparent/white text initially)
  const isHomePage = pathname === "/"

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    // Check initial scroll position
    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu on route change
  React.useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  // Determine styles based on scroll and route
  const isTransparent = isHomePage && !scrolled

  // FIXED: Hero is now White/Light, so we need DARK text even when transparent.
  const textColor = "text-slate-900"
  const subTextColor = "text-slate-500"

  // Button should always be consistent (Solid Blue) for call-to-action visibility
  const buttonVariant = "bg-sbm-blue text-white shadow-lg shadow-sbm-blue/20 hover:bg-blue-700"

  // Specific style for non-home pages (always have background unless scrolled logic overrides)
  const headerBackground = scrolled
    ? "bg-white/80 backdrop-blur-xl border-b border-white/20 shadow-sm"
    : "bg-transparent border-transparent"

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500 will-change-transform",
        headerBackground,
        isHomePage && !scrolled ? "py-6" : "py-4"
      )}
    >
      <div className="container mx-auto px-6 md:px-8 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-12 h-12 bg-gradient-to-br from-sbm-blue to-blue-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-sbm-blue/20 group-hover:scale-105 transition-transform duration-300">
            S
          </div>
          <div className="flex flex-col">
            <span className={cn("font-bold text-xl leading-none tracking-tight transition-colors", textColor)}>
              Sinergi Braga Mandiri
            </span>
            <span className={cn("text-[11px] font-medium tracking-[0.2em] uppercase transition-colors mt-1", subTextColor)}>
              Environmental Consultant
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-all duration-300 relative py-1",
                  isActive
                    ? "text-sbm-blue font-semibold scale-105"
                    : "text-slate-600 hover:text-sbm-blue hover:scale-105"
                )}
              >
                {item.name}
                {isActive && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-sbm-blue rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            )
          })}
          <Link href="/contact">
            <Button size="md" className={cn("gap-2 transition-all rounded-full px-6", buttonVariant)}>
              Hubungi Kami <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className={cn("md:hidden p-2 transition-colors", textColor)}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden absolute top-full left-0 right-0 shadow-xl"
          >
            <nav className="flex flex-col p-6 gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-lg font-medium p-4 rounded-2xl transition-all flex justify-between items-center",
                    pathname === item.href
                      ? "bg-slate-50 text-sbm-blue translate-x-2"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                  {pathname === item.href && <div className="w-2 h-2 rounded-full bg-sbm-blue" />}
                </Link>
              ))}
              <div className="pt-6 mt-4 border-t border-slate-100">
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  <Button className="w-full justify-between group rounded-xl py-6 text-lg">
                    Hubungi Kami
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
