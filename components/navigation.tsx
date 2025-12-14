"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Phone, ShieldCheck, Sparkles, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getAssetPath } from "@/lib/utils"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/fhc", label: "Health Check-up" },
  { href: "/trust", label: "Client Stories" },
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
      case "About Us": return <ShieldCheck className="w-4 h-4" />
      case "Health Check-up": return <Sparkles className="w-4 h-4" /> // Using Sparkles as generic, or import specific
      default: return <ChevronRight className="w-4 h-4" />
    }
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || isOpen
        ? "bg-[#0B1120]/90 backdrop-blur-xl border-b border-white/10 py-3 shadow-lg shadow-black/5"
        : "bg-transparent py-6 border-b border-transparent"
        }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Logo Section */}
          <Link href="/" className="group relative flex items-center gap-3">
            <div className="relative w-14 h-14 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center overflow-hidden p-0.5 shadow-lg shadow-black/5 group-hover:scale-105 transition-transform duration-300">
              <Image
                src={getAssetPath("/logo.jpeg")}
                alt="NavaGanga Logo"
                width={56}
                height={56}
                className="w-full h-full object-contain rounded-lg"
              />
              <div className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
              </div>
            </div>
            <div>
              <p className={`font-heading font-bold text-lg leading-none transition-colors duration-300 ${scrolled || isOpen ? "text-white" : "text-primary"}`}>NavaGanga</p>
              <p className={`text-[10px] tracking-widest uppercase mt-1 transition-colors duration-300 group-hover:text-accent ${scrolled || isOpen ? "text-white/60" : "text-primary/60"}`}>Financial Doctor</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className={`hidden md:flex items-center gap-1 p-1 rounded-full border backdrop-blur-sm transition-all duration-300 ${scrolled ? "bg-white/5 border-white/5" : "bg-white/40 border-primary/5"}`}>
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`relative px-5 py-2 text-sm font-medium transition-colors duration-300 ${scrolled
                  ? "text-white/80 hover:text-white"
                  : "text-primary/70 hover:text-primary"
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
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+9779857668986"
              className={`flex items-center gap-2 text-sm transition-colors duration-300 font-medium hover:text-accent ${scrolled ? "text-white/70" : "text-primary/70"}`}
            >
              <Phone className="w-4 h-4" />
              <span>985-766-8986</span>
            </a>
            <Button size="sm" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold shadow-lg shadow-accent/20 hover:shadow-accent/40 rounded-full px-6 transition-all hover:scale-105">
              <Link href="/fhc" className="gap-2">
                <ShieldCheck className="w-4 h-4" />
                Free Check-up
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 transition-colors duration-300 ${scrolled || isOpen ? "text-white/80 hover:text-white" : "text-primary/80 hover:text-primary"}`}
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
              className="md:hidden overflow-hidden bg-[#0B1120] border-t border-white/10 absolute top-[100%] left-0 right-0 shadow-2xl h-screen"
            >
              <div className="p-6 space-y-6">
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
                  <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold h-14 rounded-2xl text-lg shadow-lg shadow-accent/20">
                    <Link href="/fhc">
                      Get Protected Now
                    </Link>
                  </Button>
                  <Button variant="outline" asChild className="w-full bg-transparent border-white/10 text-white hover:bg-white/5 h-14 rounded-2xl text-base">
                    <a href="tel:+9779857668986" className="gap-2">
                      <Phone className="w-5 h-5" />
                      Call Us: 985-766-8986
                    </a>
                  </Button>

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
  )
}
