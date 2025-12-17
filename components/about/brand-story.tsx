"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Users, Briefcase, MapPin, Building2, Quote } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const testimonials = [
  {
    text: "Clear, honest advice. No pushy sales.",
    author: "Raju K.",
    role: "Small Business Owner"
  },
  {
    text: "Helped me plan my child's education fund perfectly.",
    author: "Anita S.",
    role: "Nurse"
  },
  {
    text: "Best financial friend in Pokhara.",
    author: "Deepak G.",
    role: "Ex-Army"
  }
]

export function BrandStory() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 bg-secondary/20 relative overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-widest bg-accent/10 px-4 py-2 rounded-full border border-accent/20">Our Mission</span>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-foreground mt-6 leading-tight px-4 sm:px-0">
            To provide every family in Pokhara with honest, data-driven financial prescriptions for a secure future.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Who We Serve */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-card border border-border/50 rounded-3xl p-8 shadow-xl"
          >
            <h3 className="font-heading font-bold text-2xl mb-6 flex items-center gap-3">
              <Users className="text-accent" />
              Who We Serve
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-4">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center shrink-0">
                  <Briefcase className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="font-bold">Salaried Professionals</h4>
                  <p className="text-sm text-muted-foreground">Teachers, Bankers, Nurses looking for tax saving & wealth creation.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-10 h-10 bg-amber-100 dark:bg-amber-900/30 rounded-lg flex items-center justify-center shrink-0">
                  <Users className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                </div>
                <div>
                  <h4 className="font-bold">Self-Employed / Business</h4>
                  <p className="text-sm text-muted-foreground">Shop owners, freelancers needing income protection & retirement.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div>
                  <h4 className="font-bold">Pokhara Locals</h4>
                  <p className="text-sm text-muted-foreground">Families in Kaski region wanting a trusted local advisor.</p>
                </div>
              </li>
            </ul>
          </motion.div>

          {/* Credibility */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-heading font-bold text-2xl mb-6 flex items-center gap-3">
                <Building2 className="text-accent" />
                Trusted Partners
              </h3>
              <div className="flex gap-6 items-center flex-wrap">
                {/* Placeholders for Logos */}
                <span className="text-lg font-bold text-muted-foreground/60">LIC Nepal</span>
                <span className="text-lg font-bold text-muted-foreground/60">Himalayan Life</span>
                <span className="text-lg font-bold text-muted-foreground/60">Nabil Invest</span>
                <span className="text-lg font-bold text-muted-foreground/60">Citizen Life</span>
              </div>
            </div>

            <div>
              <h3 className="font-heading font-bold text-2xl mb-6">What Families Say</h3>
              <div className="grid gap-4">
                {testimonials.map((t, i) => (
                  <div key={i} className="bg-background p-4 rounded-xl border border-border/50 flex gap-3">
                    <Quote className="w-5 h-5 text-accent/50 shrink-0" />
                    <div>
                      <p className="text-sm text-foreground/80 mb-1">"{t.text}"</p>
                      <p className="text-xs font-bold text-muted-foreground">- {t.author}, {t.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
