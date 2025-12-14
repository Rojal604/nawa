"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Phone, FileText, Rocket, ArrowRight } from "lucide-react"

const steps = [
  {
    icon: Phone,
    step: "01",
    title: "10-min Discovery Call",
    description: "A quick, no-obligation chat or WhatsApp to understand your goals and current financial health.",
  },
  {
    icon: FileText,
    step: "02",
    title: "Financial Insight Report",
    description: "We analyze your data to create a 'Financial Kundli' diagnosing gaps in protection and growth.",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Your Growth Roadmap",
    description: "Receive a personalized action plan covering Insurance, SIPs, and Retirement strategies.",
  },
]

export function HowItWorks() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="relative py-32 bg-secondary/30 overflow-hidden" ref={ref}>
      {/* Ambient background blur */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-widest bg-accent/10 px-4 py-2 rounded-full">Simple Process</span>
          <h2 className="font-heading font-bold text-3xl sm:text-5xl text-foreground mt-6 text-balance">
            Your Path to Financial Freedom
          </h2>
          <p className="text-muted-foreground mt-6 text-lg max-w-2xl mx-auto leading-relaxed">
            Our doctor-first approach ensures we diagnose before we prescribe, giving you a treatment plan that actually works.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="relative h-full bg-background/60 backdrop-blur-xl rounded-3xl p-8 border border-white/20 dark:border-white/5 hover:border-accent/40 hover:shadow-2xl hover:shadow-accent/5 transition-all duration-500 ease-out group-hover:-translate-y-2">

                {/* Watermark Step Number */}
                <div className="absolute top-4 right-6 text-9xl font-bold text-foreground/5 pointer-events-none select-none font-heading group-hover:text-accent/10 transition-colors duration-500">
                  {step.step}
                </div>

                {/* Icon Container */}
                <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center mb-8 shadow-lg shadow-accent/20 group-hover:scale-110 transition-transform duration-500 rounded-tr-[2rem] rounded-bl-[2rem]">
                  <step.icon className="w-10 h-10 text-white" />
                </div>

                {/* Content */}
                <h3 className="font-heading font-bold text-2xl text-foreground mb-4 relative z-10">{step.title}</h3>
                <p className="text-muted-foreground text-base leading-relaxed relative z-10">{step.description}</p>
              </div>

              {/* Desktop Connector */}
              {index < steps.length - 1 && (
                <div className="hidden md:flex absolute top-1/2 -right-6 lg:-right-8 w-12 items-center justify-center z-20 -translate-y-1/2">
                  <ArrowRight className="w-6 h-6 text-accent/30" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
