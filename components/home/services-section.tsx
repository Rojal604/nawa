"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Shield, TrendingUp, HandCoins, Leaf, ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const services = [
  {
    icon: Shield,
    title: "Protect Income",
    description: "Ensure your family's lifestyle never downgrades, even if you aren't around.",
    color: "blue",
    gradient: "from-blue-500 to-blue-600",
    items: ["Term Life Insurance", "Salary Protection", "Critical Illness Cover"],
  },
  {
    icon: TrendingUp,
    title: "Beat Inflation",
    description: "Grow your wealth faster than rising costs with disciplined investing.",
    color: "emerald",
    gradient: "from-emerald-500 to-emerald-600",
    items: ["High-Growth SIPs", "Mutual Funds", "Goal-Based Investing"],
  },
  {
    icon: HandCoins,
    title: "Tax Save",
    description: "Legally reduce your tax burden while building long-term assets.",
    color: "amber",
    gradient: "from-amber-500 to-amber-600",
    items: ["Tax Saving ElSS", "Insurance Tax Benefits", "Retirement Benefits"],
  },
  {
    icon: Leaf,
    title: "Retirement Cashflow",
    description: "Create a monthly pension that lasts as long as you do.",
    color: "rose",
    gradient: "from-rose-500 to-rose-600",
    items: ["Pension Plans", "Annuity Strategy", "Senior Citizen Funds"],
  },
]

export function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="services" className="py-24 bg-secondary/30 relative overflow-hidden" ref={ref}>
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[128px] -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-widest bg-accent/10 px-4 py-2 rounded-full">Real Outcomes</span>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-5xl text-foreground mt-6 text-balance">
            Solutions, Not Jargon
          </h2>
          <p className="text-muted-foreground mt-4 sm:mt-6 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed px-4">
            We don't just sell plans; we solve specific life problems. Here is how we help you win.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-10">
          {services.map((service, index) => {
            // Simplified styling logic for cleaner code
            const iconColor = {
              blue: "text-blue-600 dark:text-blue-400",
              emerald: "text-emerald-600 dark:text-emerald-400",
              amber: "text-amber-600 dark:text-amber-400",
              rose: "text-rose-600 dark:text-rose-400",
            }[service.color];

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative rounded-3xl p-8 border border-white/20 dark:border-white/5 bg-white/40 dark:bg-black/20 backdrop-blur-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center mb-6">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg`}>
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-2xl text-foreground">{service.title}</h3>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>

                <ul className="space-y-3 mb-8">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm font-medium text-foreground/80">
                      <CheckCircle2 className={`w-4 h-4 ${iconColor}`} />
                      {item}
                    </li>
                  ))}
                </ul>

                <Button variant="outline" asChild className="rounded-full w-full sm:w-auto hover:bg-accent hover:text-white hover:border-accent transition-all group-hover:scale-105">
                  <Link href="/fhc">
                    Start {service.title} Plan
                  </Link>
                </Button>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
