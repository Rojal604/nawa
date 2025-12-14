"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Shield, Heart, Target, Leaf, ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const services = [
  {
    icon: Shield,
    title: "Protection",
    description: "Secure your family's future against life's uncertainties.",
    color: "blue",
    gradient: "from-blue-500 to-blue-600",
    bgGradient: "from-blue-500/10 to-blue-500/5",
    items: ["Term Life Insurance", "Income Protection", "Critical Illness Cover", "Accidental Death Benefit"],
  },
  {
    icon: Heart,
    title: "Health",
    description: "Comprehensive medical coverage for you and your loved ones.",
    color: "rose",
    gradient: "from-rose-500 to-rose-600",
    bgGradient: "from-rose-500/10 to-rose-500/5",
    items: ["Family Floater Plans", "Senior Citizen Care", "OPD & Day Care", "Cashless Hospitalization"],
  },
  {
    icon: Target,
    title: "Wealth Goals",
    description: "Strategic planning to achieve your life's biggest milestones.",
    color: "amber",
    gradient: "from-amber-500 to-amber-600",
    bgGradient: "from-amber-500/10 to-amber-500/5",
    items: ["Child Education Fund", "Dream Home Planning", "High-Growth SIPs", "Emergency Corpus"],
  },
  {
    icon: Leaf,
    title: "Retirement",
    description: "Live your second innings with dignity and financial independence.",
    color: "emerald",
    gradient: "from-emerald-500 to-emerald-600",
    bgGradient: "from-emerald-500/10 to-emerald-500/5",
    items: ["Pension Plans", "Annuity Strategy", "Inflation-Proofing", "Legacy Planning"],
  },
]

export function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-32 bg-secondary/30 relative overflow-hidden" ref={ref}>
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[128px] -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-widest bg-accent/10 px-4 py-2 rounded-full">Our Expertise</span>
          <h2 className="font-heading font-bold text-3xl sm:text-5xl text-foreground mt-6 text-balance">
            Your Financial Thali
          </h2>
          <p className="text-muted-foreground mt-6 text-lg max-w-2xl mx-auto leading-relaxed">
            Just like a balanced meal keeps you healthy, a balanced portfolio keeps you wealthy. We serve a complete "Financial Thali" tailored to your taste.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {services.map((service, index) => {
            // Dynamic style mapping based on color prop
            const glowColor = {
              blue: "group-hover:shadow-blue-500/20 group-hover:border-blue-500/30",
              rose: "group-hover:shadow-rose-500/20 group-hover:border-rose-500/30",
              amber: "group-hover:shadow-amber-500/20 group-hover:border-amber-500/30",
              emerald: "group-hover:shadow-emerald-500/20 group-hover:border-emerald-500/30",
            }[service.color];

            const iconColor = {
              blue: "text-blue-600 dark:text-blue-400",
              rose: "text-rose-600 dark:text-rose-400",
              amber: "text-amber-600 dark:text-amber-400",
              emerald: "text-emerald-600 dark:text-emerald-400",
            }[service.color];

            const checkColor = {
              blue: "text-blue-500",
              rose: "text-rose-500",
              amber: "text-amber-500",
              emerald: "text-emerald-500",
            }[service.color];

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`group relative rounded-3xl p-8 border border-white/20 dark:border-white/5 bg-white/40 dark:bg-black/20 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${glowColor}`}
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center mb-8">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg transform group-hover:rotate-6 transition-transform duration-500`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-2xl text-foreground mb-1">{service.title}</h3>
                    <p className="text-muted-foreground text-sm">{service.description}</p>
                  </div>
                </div>

                {/* Items */}
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4 mb-8">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                      <CheckCircle2 className={`w-4 h-4 ${checkColor}`} />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="pt-6 border-t border-border/50 flex justify-between items-center">
                  <span className={`text-sm font-semibold tracking-wide uppercase ${iconColor}`}>Learn more</span>
                  <Button variant="ghost" size="icon" asChild className="rounded-full hover:bg-white/50 dark:hover:bg-white/10">
                    <Link href="/fhc">
                      <ArrowRight className={`w-5 h-5 ${iconColor}`} />
                    </Link>
                  </Button>
                </div>

                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 pointer-events-none rounded-3xl" />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
