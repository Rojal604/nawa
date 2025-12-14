"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { MessageCircle, ArrowRight, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 relative overflow-hidden" ref={ref}>
      {/* Premium Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/90 via-background to-background z-0" />

      {/* Ambient Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="bg-primary text-primary-foreground border border-white/10 rounded-[2.5rem] p-8 md:p-16 text-center shadow-2xl relative overflow-hidden"
        >
          {/* Glass Reflection */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full mb-8">
            <ShieldCheck className="w-4 h-4 text-accent" />
            <span className="text-accent text-sm font-semibold tracking-wide uppercase">Secure & Confidential</span>
          </div>

          <h2 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl text-white mb-8 text-balance leading-tight">
            Ready to Secure Your Family&apos;s <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent/70">Financial Future?</span>
          </h2>

          <p className="text-primary-foreground/80 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Take the first step with a free 10-minute Financial Health Check-up. No obligations, just absolute clarity on where you stand.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button
              size="lg"
              asChild
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-10 py-7 text-lg rounded-2xl shadow-lg shadow-accent/20 hover:shadow-accent/40 hover:-translate-y-1 transition-all duration-300"
            >
              <Link href="/fhc" className="gap-2">
                Start Free Check-up
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>

            <Button
              variant="outline"
              size="lg"
              asChild
              className="border-white/20 hover:border-white/50 text-white hover:bg-white/10 px-8 py-7 text-lg rounded-2xl bg-transparent backdrop-blur-sm transition-all duration-300"
            >
              <a href="https://wa.me/9779847668986" target="_blank" rel="noopener noreferrer" className="gap-2">
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </a>
            </Button>
          </div>

          <p className="mt-8 text-sm text-primary-foreground/40">
            Trusted by 500+ families in Pokhara
          </p>
        </motion.div>
      </div>
    </section>
  )
}
