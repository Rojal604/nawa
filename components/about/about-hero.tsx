"use client"

import { motion } from "framer-motion"
import { Droplets, Users, ShieldCheck } from "lucide-react"
import Image from "next/image"
import { getAssetPath } from "@/lib/utils"

export function AboutHero() {
  return (
    <section className="relative py-32 sm:py-28 lg:py-24 bg-gradient-to-br from-secondary via-background to-secondary/50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30 dark:opacity-5" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left Column: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 text-accent px-5 py-2.5 rounded-full mb-8">
              <Droplets className="w-4 h-4" />
              <span className="text-sm font-semibold tracking-wide uppercase">Financial Doctors</span>
            </div>

            <h1 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-tight text-balance">
              We are Financial Doctors for Families in <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent/70">Pokhara.</span>
            </h1>

            <p className="text-muted-foreground text-base sm:text-lg md:text-xl leading-relaxed mb-8 max-w-lg">
              Insurance + Mutual Funds + Health + Retirement.
              <br />
              <span className="text-foreground font-medium mt-2 block">We diagnose before we prescribe.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-6 border-t border-border pt-8">
              <div>
                <h3 className="font-bold text-2xl text-foreground">5+</h3>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div className="hidden sm:block w-px bg-border h-12" />
              <div>
                <h3 className="font-bold text-2xl text-foreground">500+</h3>
                <p className="text-sm text-muted-foreground">Families Served</p>
              </div>
              <div className="hidden sm:block w-px bg-border h-12" />
              <div>
                <h3 className="font-bold text-2xl text-foreground">4.9/5</h3>
                <p className="text-sm text-muted-foreground">Google Rating</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white dark:border-white/10 aspect-[4/3] lg:aspect-square">
              <Image
                src="/about-consultation.png"
                alt="Professional Financial Consultation at NavaGanga"
                fill
                className="object-cover"
                priority
              />

              {/* Floating Tag */}
              <div className="absolute bottom-6 left-6 right-6 sm:right-auto bg-white/95 dark:bg-black/80 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/20 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="font-bold text-foreground">Certified Experts</p>
                  <p className="text-xs text-muted-foreground">Local Presence in Amarsingh Chowk</p>
                </div>
              </div>
            </div>

            {/* Decor Blob */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent/5 rounded-full blur-3xl pointer-events-none" />
          </motion.div>

        </div>
      </div>
    </section>
  )
}
