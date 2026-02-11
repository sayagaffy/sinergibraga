'use client'

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/Button"

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
  const textColor = isTransparent ? "text-white" : "text-slate-900 dark:text-white"
  const subTextColor = isTransparent ? "text-slate-300" : "text-slate-500 dark:text-slate-400"
  const buttonVariant = isTransparent ? "bg-white text-sbm-blue hover:bg-white/90" : "bg-sbm-blue text-white shadow-lg shadow-sbm-blue/20"

  // Specific style for non-home pages (always have background unless scrolled logic overrides)
  const headerBackground = isHomePage
    ? (scrolled ? "bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-slate-200 dark:border-slate-800 shadow-sm" : "bg-transparent border-transparent")
    : "bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm"

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        headerBackground,
        isHomePage && !scrolled ? "py-5" : "py-3"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-gradient-to-br from-sbm-blue to-sbm-teal rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-sbm-blue/20 group-hover:scale-105 transition-transform">
            S
          </div>
          <div className="flex flex-col">
            <span className={cn("font-bold text-lg leading-tight transition-colors", textColor)}>
              Sinergi Braga Mandiri
            </span>
            <span className={cn("text-[10px] tracking-wider transition-colors", subTextColor)}>
              ENVIRONMENTAL CONSULTANT
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors relative py-1",
                  isActive
                    ? "text-sbm-blue font-semibold"
                    : (isTransparent ? "text-slate-200 hover:text-white" : "text-slate-600 dark:text-slate-300 hover:text-sbm-blue")
                )}
              >
                {item.name}
                {isActive && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-sbm-blue rounded-full"
                  />
                )}
              </Link>
            )
          })}
          <Link href="/contact">
            <Button size="sm" className={cn("gap-2 transition-all", buttonVariant)}>
              Hubungi Kami <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className={cn("md:hidden p-2 transition-colors", textColor)}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 overflow-hidden absolute top-full left-0 right-0 shadow-xl"
          >
            <nav className="flex flex-col p-4 gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-base font-medium p-3 rounded-xl transition-colors flex justify-between items-center",
                    pathname === item.href
                      ? "bg-sbm-blue/10 text-sbm-blue"
                      : "text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900"
                  )}
                >
                  {item.name}
                  {pathname === item.href && <div className="w-1.5 h-1.5 rounded-full bg-sbm-blue" />}
                </Link>
              ))}
              <div className="pt-4 mt-2 border-t border-slate-100 dark:border-slate-900">
                <Link href="/contact">
                   <Button className="w-full justify-between group">
                     Hubungi Kami
                     <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
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
