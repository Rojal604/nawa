"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Stethoscope, FileText, Rocket } from "lucide-react"

const steps = [
  {
    icon: Stethoscope,
    title: "Financial Health Check-up",
    step: "01",
    description: "We analyze your income, expenses, risks, and goals in a 20-minute session.",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    icon: FileText,
    title: "Financial Kundli",
    step: "02",
    description: "We generate a report card of your finances, highlighting red flags and green zones.",
    color: "text-amber-500",
    bg: "bg-amber-500/10",
  },
  {
    icon: Rocket,
    title: "90-Day Action Plan",
    step: "03",
    description: "You get a clear step-by-step prescription to fix gaps and start wealth creation.",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
]

export function ProcessSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 bg-background relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-widest bg-accent/10 px-4 py-2 rounded-full border border-accent/20">Our Method</span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-foreground mt-6">
            The 3-Step Treatment Plan
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-border -z-10" />

          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-card border border-border rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300 text-center group hover:shadow-xl"
            >
              <div className={`w-20 h-20 mx-auto rounded-full ${step.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform bg-background border-4 border-card`}>
                <step.icon className={`w-10 h-10 ${step.color}`} />
              </div>
              <h3 className="font-heading font-bold text-xl mb-3">{step.title}</h3>
              <p className="text-muted-foreground text-sm">{step.description}</p>
              <span className="block mt-4 text-xs font-bold text-muted-foreground/50 uppercase tracking-widest">Step {step.step}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
