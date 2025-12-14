"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { CheckCircle2, Shield, ArrowRight, HeartPulse, Clock, FileCheck, Banknote } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const claimStories = [
  {
    id: "CASE-2023-001",
    type: "Medical Emergency",
    icon: HeartPulse,
    title: "Emergency Surgery Support",
    amount: "NPR 3.2 Lakhs",
    client: "Mr. Gurung's Family",
    timeline: "7 Days",
    challenge: "Sudden hospitalization required immediate surgery. Family was worried about the upfront cash deposit.",
    solution: "We activated the Cashless Facility within 2 hours. Our team handled all hospital coordination while the family focused on recovery.",
    verdict: "Full Claim Settled",
    color: "text-rose-500",
    bg: "bg-rose-500/10",
    border: "border-rose-500/20"
  },
  {
    id: "CASE-2023-045",
    type: "Life Insurance",
    icon: Shield,
    title: "Family Income Protection",
    amount: "NPR 50 Lakhs",
    client: "The Sharma Family",
    timeline: "45 Days",
    challenge: "Breadwinner passed away unexpectedly. Family was grieving and overwhelmed by paperwork.",
    solution: "We personally visited the home to collect documents. We chased the insurer daily to expedite the settlement.",
    verdict: "Family Secured",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20"
  },
]

export function ClaimStories() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 bg-secondary/30 relative" ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50 dark:opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            <Shield className="w-4 h-4" />
            <span>The NavaGanga Promise</span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mt-2 mb-4">
            We Stand By You <br className="hidden sm:block" />When It Matters Most
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A policy is just a piece of paper until a claim happens. That's when we step in to ensure that paper turns into a promise kept.
          </p>
        </motion.div>

        {/* Case Files */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {claimStories.map((story, index) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative bg-background rounded-3xl p-8 border hover:border-accent/40 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Top Accent Line */}
              <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-accent to-transparent opacity-50`} />

              {/* Header */}
              <div className="flex justify-between items-start mb-6 pb-6 border-b border-border border-dashed">
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${story.bg} ${story.color}`}>
                    <story.icon className="w-7 h-7" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">Case ID: {story.id}</div>
                    <h3 className="font-heading font-bold text-xl text-foreground">{story.title}</h3>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-muted-foreground mb-1">Claim Value</div>
                  <div className="text-xl font-bold text-accent">{story.amount}</div>
                </div>
              </div>

              {/* Body */}
              <div className="space-y-6">
                <div className="bg-secondary/20 rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 min-w-fit">
                      <span className="text-xs font-bold bg-amber-500/10 text-amber-600 dark:text-amber-400 px-2 py-0.5 rounded uppercase">Challenge</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {story.challenge}
                    </p>
                  </div>
                </div>

                <div className="bg-accent/5 rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 min-w-fit">
                      <span className="text-xs font-bold bg-accent/10 text-accent px-2 py-0.5 rounded uppercase">Solution</span>
                    </div>
                    <p className="text-sm text-foreground/80 leading-relaxed font-medium">
                      {story.solution}
                    </p>
                  </div>
                </div>
              </div>

              {/* Footer Metrics */}
              <div className="mt-8 pt-6 border-t border-border flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <div>
                      <p className="text-[10px] text-muted-foreground uppercase">Time Taken</p>
                      <p className="text-sm font-bold text-foreground">{story.timeline}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <FileCheck className="w-4 h-4 text-muted-foreground" />
                    <div>
                      <p className="text-[10px] text-muted-foreground uppercase">Paperwork</p>
                      <p className="text-sm font-bold text-foreground">100% By Us</p>
                    </div>
                  </div>
                </div>

                {/* Settlement Stamp Animation */}
                <motion.div
                  initial={{ scale: 2, opacity: 0, rotate: -20 }}
                  animate={isInView ? { scale: 1, opacity: 1, rotate: -12 } : {}}
                  transition={{ delay: 0.8 + (index * 0.3), type: "spring", stiffness: 200 }}
                  className="border-2 border-accent text-accent px-3 py-1 rounded font-black uppercase text-xs tracking-widest opacity-20 transform -rotate-12 select-none"
                >
                  {story.verdict}
                </motion.div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-6">Want to ensure your family's future is this secure?</p>
          <Button asChild className="h-12 px-8 rounded-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold shadow-lg shadow-accent/25 hover:shadow-accent/40 transition-all hover:scale-105">
            <Link href="/fhc">
              Get Your Protection Plan
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
