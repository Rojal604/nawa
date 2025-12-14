"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Stethoscope, HandHeart, MapPin, ShieldCheck, Users, TrendingUp } from "lucide-react"

const features = [
  {
    icon: Stethoscope,
    title: "Doctor-First Advisory",
    description: "We prescribe products only after a complete financial diagnosis. Your health comes first, always.",
    className: "md:col-span-2 bg-gradient-to-br from-accent/5 via-card/50 to-card",
    iconColor: "text-accent",
  },
  {
    icon: Users,
    title: "500+ Families",
    description: "Trusted by hundreds in Pokhara.",
    className: "md:row-span-2 bg-primary text-primary-foreground",
    iconColor: "text-accent",
    isDark: true,
  },
  {
    icon: HandHeart,
    title: "Claims Handholding",
    description: "We stand with you during claims and conduct yearly reviews.",
    className: "bg-card/50",
    iconColor: "text-blue-500",
  },
  {
    icon: ShieldCheck,
    title: "100% Transparent",
    description: "Clear fee structure with complete data privacy.",
    className: "bg-card/50",
    iconColor: "text-green-500",
  },
  {
    icon: MapPin,
    title: "Local Pokhara Trust",
    description: "Amarsingh Chowk based, accessible anytime.",
    className: "bg-card/50",
    iconColor: "text-orange-500",
  },
  {
    icon: TrendingUp,
    title: "Yearly Reviews",
    description: "We don't just sell; we track your growth annually.",
    className: "md:col-span-2 bg-gradient-to-tl from-accent/5 via-card/50 to-card",
    iconColor: "text-purple-500",
  },
]

export function WhyNavaGanga() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 bg-secondary/20 relative overflow-hidden" ref={ref}>
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[128px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-widest bg-white/50 dark:bg-white/5 px-4 py-2 rounded-full backdrop-blur-sm border border-accent/10">Why Choose Us</span>
          <h2 className="font-heading font-bold text-3xl sm:text-5xl text-foreground mt-6 text-balance">
            Why NavaGanga?
          </h2>
          <p className="text-muted-foreground mt-6 text-lg max-w-2xl mx-auto">
            We believe in building trust through transparency, expertise, and genuine care for your family&apos;s
            financial future.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[minmax(180px,auto)]">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative rounded-3xl p-8 border hover:shadow-2xl hover:shadow-accent/5 transition-all duration-500 flex flex-col justify-between overflow-hidden ${feature.className
                } ${feature.isDark ? "border-transparent" : "border-white/40 dark:border-white/5 bg-white/40 dark:bg-black/20 backdrop-blur-md"}`}
            >
              <div className="relative z-10">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 ${feature.isDark ? "bg-white/10" : "bg-background shadow-sm"
                  }`}>
                  <feature.icon className={`w-6 h-6 ${feature.iconColor} ${feature.isDark ? "text-white" : ""}`} />
                </div>
                <h3 className={`font-heading font-bold text-xl mb-3 ${feature.isDark ? "text-white" : "text-foreground"}`}>
                  {feature.title}
                </h3>
                <p className={`text-sm leading-relaxed ${feature.isDark ? "text-white/80" : "text-muted-foreground"}`}>
                  {feature.description}
                </p>
              </div>

              {/* Hover Effect Gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/5 to-accent/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
