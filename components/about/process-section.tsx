"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Stethoscope, BookOpen, FileCheck, RefreshCw } from "lucide-react"

const steps = [
  {
    icon: Stethoscope,
    title: "Diagnose",
    step: "01",
    description: "We start by understanding your complete financial picture — income, expenses, existing covers, goals, and concerns.",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    border: "group-hover:border-blue-500/50",
    shadow: "group-hover:shadow-blue-500/20",
  },
  {
    icon: BookOpen,
    title: "Explain",
    step: "02",
    description: "We educate you about your options in simple terms, ensuring you understand every aspect before making decisions.",
    color: "text-amber-500",
    bg: "bg-amber-500/10",
    border: "group-hover:border-amber-500/50",
    shadow: "group-hover:shadow-amber-500/20",
  },
  {
    icon: FileCheck,
    title: "Prescribe",
    step: "03",
    description: "Only after thorough diagnosis and explanation do we recommend solutions tailored specifically to your family.",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
    border: "group-hover:border-emerald-500/50",
    shadow: "group-hover:shadow-emerald-500/20",
  },
  {
    icon: RefreshCw,
    title: "Review",
    step: "04",
    description: "We conduct yearly reviews to ensure your financial plan stays aligned with your changing life circumstances.",
    color: "text-purple-500",
    bg: "bg-purple-500/10",
    border: "group-hover:border-purple-500/50",
    shadow: "group-hover:shadow-purple-500/20",
  },
]

export function ProcessSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 bg-background relative overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-widest bg-accent/10 px-4 py-2 rounded-full border border-accent/20">Our Process</span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-foreground mt-6 text-balance">
            The NavaGanga Way
          </h2>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto text-lg">
            A systematic, ethical approach to financial planning that puts your family&apos;s needs first.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[60px] left-0 right-0 h-0.5 bg-border z-0">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="h-full bg-accent origin-left"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative group bg-card border border-border rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300 ${step.border} ${step.shadow} hover:shadow-xl`}
              >
                {/* Step Number Watermark */}
                <div className="absolute top-4 right-6 text-6xl font-heading font-bold text-foreground/5 group-hover:text-foreground/10 transition-colors select-none">
                  {step.step}
                </div>

                {/* Icon Node */}
                <div className={`relative w-16 h-16 rounded-2xl ${step.bg} flex items-center justify-center mb-6 z-10 mx-auto lg:mx-0 group-hover:scale-110 transition-transform duration-300 ring-8 ring-card`}>
                  <step.icon className={`w-8 h-8 ${step.color}`} />

                  {/* Pulse Dot for active connection */}
                  <div className={`absolute inset-0 rounded-2xl ${step.bg} animate-ping opacity-20`} />
                </div>

                {/* Content */}
                <div className="relative z-10 text-center lg:text-left">
                  <h3 className="font-heading font-bold text-xl text-foreground mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
