"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Heart, Shield, Handshake, Eye, TrendingUp, Anchor, Sparkles } from "lucide-react"

const storyPhases = [
  {
    icon: TrendingUp,
    title: "The Observation",
    subtitle: "Seeing the Gap",
    description: "We saw too many families in Pokhara being sold financial products they didn't need — policies that didn't match their actual requirements, investments that didn't align with their goals.",
    alignment: "left",
    color: "bg-blue-500",
  },
  {
    icon: Sparkles,
    title: "The Vision",
    subtitle: "A New Beginning",
    description: "NavaGanga was born from the belief that every family deserves a 'Financial Doctor' — someone who diagnoses first, explains clearly, and only then prescribes the right solution.",
    alignment: "right",
    color: "bg-amber-500",
  },
  {
    icon: Anchor,
    title: "The Commitment",
    subtitle: "Rooted in Trust",
    description: "Based in Amarsingh Chowk, we've spent over 5 years building trust with 500+ local families. We speak your language, understand your concerns, and are always just a phone call away.",
    alignment: "left",
    color: "bg-emerald-500",
  },
]

const values = [
  {
    icon: Heart,
    title: "Family First",
    description:
      "Every recommendation is centered around your family's long-term wellbeing.",
  },
  {
    icon: Shield,
    title: "Protection Focus",
    description:
      "We build a strong financial foundation with adequate protection first.",
  },
  {
    icon: Handshake,
    title: "Lifetime Partnership",
    description:
      "We're your financial partners for life, through claims and reviews.",
  },
  {
    icon: Eye,
    title: "Full Transparency",
    description:
      "No hidden fees, no jargon. Just clear, honest advice.",
  },
]

export function BrandStory() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-32 bg-secondary/20 relative overflow-hidden" ref={ref}>
      {/* Background River Element */}
      <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-1 bg-gradient-to-b from-transparent via-accent/30 to-transparent hidden md:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-widest bg-accent/10 px-4 py-2 rounded-full border border-accent/20">Our Journey</span>
          <h2 className="font-heading font-bold text-3xl sm:text-5xl text-foreground mt-6 text-balance">
            Why We Started NavaGanga
          </h2>
        </motion.div>

        {/* Timeline Story */}
        <div className="space-y-24 mb-32 relative">
          {storyPhases.map((phase, index) => (
            <motion.div
              key={phase.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`flex flex-col md:flex-row gap-8 md:gap-16 items-center ${phase.alignment === 'right' ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Timeline Node (Mobile Only) */}
              <div className={`md:hidden w-4 h-4 rounded-full ${phase.color} mx-auto`} />

              {/* Content */}
              <div className={`flex-1 text-center ${phase.alignment === 'left' ? 'md:text-right' : 'md:text-left'}`}>
                <h3 className="text-accent font-bold text-xl mb-2 uppercase tracking-wider">{phase.subtitle}</h3>
                <h4 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">{phase.title}</h4>
                <p className="text-lg text-muted-foreground leading-relaxed">{phase.description}</p>
              </div>

              {/* Center Icon */}
              <div className="relative shrink-0 hidden md:flex items-center justify-center">
                <div className={`w-16 h-16 rounded-full ${phase.color} flex items-center justify-center shadow-lg ring-8 ring-background z-10`}>
                  <phase.icon className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Empty Space for Balance */}
              <div className="flex-1 hidden md:block" />
            </motion.div>
          ))}
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white/40 dark:bg-black/20 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-12 border border-white/20 dark:border-white/5"
        >
          <div className="text-center mb-12">
            <h3 className="font-heading font-bold text-3xl text-foreground">Our Core Values</h3>
            <p className="text-muted-foreground mt-2">The principles that guide every decision we make.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={value.title} className="text-center group">
                <div className="w-16 h-16 mx-auto bg-accent/10 rounded-2xl flex items-center justify-center mb-6 text-accent group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  <value.icon className="w-8 h-8" />
                </div>
                <h4 className="font-bold text-lg text-foreground mb-3">{value.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
