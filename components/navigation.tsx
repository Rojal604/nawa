"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Phone, ShieldCheck, Sparkles, ChevronRight, MessageCircle, CalendarCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getAssetPath } from "@/lib/utils"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#services", label: "Services" },
  { href: "/fhc", label: "Financial Health Check-up" },
  { href: "/trust", label: "Testimonials" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const getLinkIcon = (label: string) => {
    switch (label) {
      case "Home": return <Sparkles className="w-4 h-4" />
      case "About": return <ShieldCheck className="w-4 h-4" />
      case "Financial Health Check-up": return <CalendarCheck className="w-4 h-4" />
      case "Testimonials": return <MessageCircle className="w-4 h-4" />
      default: return <ChevronRight className="w-4 h-4" />
    }
  }

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#0B1120]/95 backdrop-blur-xl border-b border-white/10 shadow-lg ${scrolled || isOpen ? "py-3" : "py-4"}`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">

            {/* Logo Section */}
            <Link href="/" className="group relative flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center overflow-hidden p-0.5 shadow-lg shadow-black/5 group-hover:scale-105 transition-transform duration-300">
                <Image
                  src={getAssetPath("/logo.jpeg")}
                  alt="NavaGanga Logo"
                  width={48}
                  height={48}
                  className="object-cover rounded-lg"
                />
                <div className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
                </div>
              </div>
              <div>
                <p className="font-heading font-bold text-base sm:text-lg text-white leading-none transition-colors duration-300">NavaGanga</p>
                <p className="text-[10px] tracking-widest uppercase mt-1 text-white/60 transition-colors duration-300 group-hover:text-accent">Financial Doctor</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className={`hidden lg:flex items-center gap-1 p-1 rounded-full border backdrop-blur-sm transition-all duration-300 ${scrolled ? "bg-white/10 border-white/10" : "bg-white/10 border-white/10"}`}>
              {navLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 ${scrolled
                    ? "text-white hover:text-accent"
                    : "text-white/90 hover:text-white"
                    }`}
                >
                  {hoveredIndex === index && (
                    <motion.div
                      layoutId="nav-pill"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      className={`absolute inset-0 rounded-full ${scrolled ? "bg-white/10" : "bg-primary/5"}`}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </Link>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="https://wa.me/9779847668986"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm transition-colors duration-300 font-medium text-white/90 hover:text-white"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
              <Button size="sm" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold shadow-lg shadow-accent/20 hover:shadow-accent/40 rounded-full px-6 transition-all hover:scale-105">
                <Link href="/fhc" className="gap-2">
                  <ShieldCheck className="w-4 h-4" />
                  Free Check-up
                </Link>
              </Button>
            </div>

            {/* Mobile Menu Button - visible on lg and below */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-white hover:text-accent transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu Overlay */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "100vh" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: "circOut" }}
                className="lg:hidden overflow-hidden bg-[#0B1120] border-t border-white/10 absolute top-[100%] left-0 right-0 shadow-2xl h-screen"
              >
                <div className="p-6 space-y-6 pb-24 overflow-y-auto max-h-[calc(100vh-80px)]">
                  <div className="space-y-2">
                    {navLinks.map((link, i) => (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setIsOpen(false)}
                          className="flex items-center justify-between p-4 rounded-xl text-white/80 hover:text-white hover:bg-white/5 border border-white/5 hover:border-accent/20 transition-all group active:scale-[0.98]"
                        >
                          <span className="font-heading font-semibold text-lg">{link.label}</span>
                          <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                            {getLinkIcon(link.label)}
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="pt-6 mt-4 border-t border-white/10 grid gap-4"
                  >
                    <p className="text-center text-xs text-white/30 pt-4">
                      NavaGanga Financial Consultancy<br />
                      Pokhara's Most Trusted
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </motion.header>

      {/* Sticky Mobile CTA Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-[#0B1120] border-t border-white/10 p-3 pb-safe">
        <div className="grid grid-cols-2 gap-3">
          <Button
            variant="outline"
            asChild
            className="w-full bg-[#25D366] hover:bg-[#25D366]/90 text-white border-transparent font-bold h-12 rounded-xl"
          >
            <a href="https://wa.me/9779847668986" target="_blank" rel="noopener noreferrer" className="gap-2">
              <MessageCircle className="w-5 h-5 fill-current" />
              WhatsApp
            </a>
          </Button>
          <Button
            asChild
            className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold h-12 rounded-xl shadow-lg shadow-accent/20"
          >
            <Link href="/fhc" className="gap-2">
              <CalendarCheck className="w-5 h-5" />
              Book Check-up
            </Link>
          </Button>
        </div>
      </div>
    </>
  )
}
