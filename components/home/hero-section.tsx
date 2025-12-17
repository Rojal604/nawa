"use client"

import { motion } from "framer-motion"
import { MessageCircle, CheckCircle, ArrowRight, ShieldCheck, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { getAssetPath } from "@/lib/utils"

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-32 sm:pt-28 lg:pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute top-0 right-0 w-2/3 h-full bg-secondary/30 -skew-x-12 translate-x-1/3 hidden lg:block" />
      <div className="absolute -left-20 top-20 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* Left Column: Content */}
          <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left pt-4 lg:pt-0">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-accent/10 backdrop-blur-sm border border-accent/20 text-accent px-5 py-2.5 rounded-full mb-8"
            >
              <CheckCircle className="w-4 h-4 text-accent" />
              <span className="text-sm font-semibold tracking-wide uppercase">Trusted by 500+ Families</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] mb-6 tracking-tight text-foreground"
            >
              Trusted Financial Doctor for Families in
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent block mt-2">
                Pokhara.
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-heading font-medium text-xl sm:text-2xl text-muted-foreground mb-10 leading-relaxed max-w-lg mx-auto lg:mx-0"
            >
              Insurance + Mutual Fund + Health + Retirement.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
            >
              <Button
                size="lg"
                asChild
                className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-white font-semibold px-8 h-14 text-lg rounded-xl shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/40 transition-all hover:-translate-y-0.5"
              >
                <Link href="/fhc" className="flex items-center justify-center gap-2">
                  Book Free Financial Health Check-up
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-10 pt-8 border-t border-border/50 flex flex-wrap justify-center lg:justify-start gap-x-8 gap-y-4 text-sm text-muted-foreground"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-accent" />
                <span>Licensed & Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-accent" />
                <span>Why Diagnosis First?</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:h-[800px] flex items-center justify-center p-4 lg:p-0"
          >
            <div className="relative w-full max-w-lg lg:max-w-xl aspect-[4/5] lg:aspect-square">
              {/* Decorative Circle */}
              <div className="absolute inset-0 bg-accent/10 rounded-[2rem] -rotate-6 scale-95" />

              {/* Main Image Container */}
              <div className="relative w-full h-full rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white dark:border-white/10">
                <Image
                  src={getAssetPath("/hero-family.png")}
                  alt="Happy Nepali Family Planning Finances"
                  fill
                  className="object-cover"
                  priority
                />

                {/* Floating Card: Experience */}
                <div className="absolute bottom-8 left-8 bg-white/95 dark:bg-black/80 backdrop-blur-md p-4 rounded-2xl shadow-xl flex items-center gap-4 max-w-[200px] border border-white/20">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                    <CheckCircle className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-bold text-2xl leading-none text-foreground">5+</p>
                    <p className="text-xs font-medium text-muted-foreground mt-1">Years of Excellence</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
