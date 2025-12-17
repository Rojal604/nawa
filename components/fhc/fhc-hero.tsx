"use client"

import { motion } from "framer-motion"
import { Stethoscope, Clock, CheckCircle2, Shield, TrendingUp, Activity, ArrowRight } from "lucide-react"

export function FHCHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-primary text-primary-foreground pt-28 pb-20 lg:py-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent opacity-60" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-primary to-transparent" />

      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%) pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-accent/10 backdrop-blur-sm border border-accent/20 text-accent px-5 py-2.5 rounded-full"
            >
              <Stethoscope className="w-4 h-4" />
              <span className="text-sm font-semibold tracking-wide uppercase">Financial Doctor Mode</span>
            </motion.div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-7xl leading-[1.1]">
                Take the First Step to <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-white">Financial Immunity.</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-primary-foreground/70 leading-relaxed max-w-xl">
                Get your comprehensive <strong>Financial Health Report Card</strong> (Worth ₹5,000) for FREE. Diagnose gaps before they become emergencies.
              </p>
            </div>

            {/* CTA & Benefits */}
            <div className="flex flex-col sm:flex-row gap-5 pt-4">
              <button className="relative group bg-accent text-accent-foreground font-bold px-8 py-4 rounded-xl shadow-[0_0_20px_-5px_rgba(20,184,166,0.5)] hover:shadow-[0_0_30px_-5px_rgba(20,184,166,0.7)] transition-all duration-300 overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">
                  Start Diagnosis
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>

              <div className="flex items-center gap-6 px-4">
                <div className="flex items-center gap-2 text-sm font-medium text-primary-foreground/80">
                  <Clock className="w-4 h-4 text-accent" />
                  <span>10 Mins</span>
                </div>
                <div className="flex items-center gap-2 text-sm font-medium text-primary-foreground/80">
                  <Shield className="w-4 h-4 text-accent" />
                  <span>100% Free</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Visualization Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:h-[600px] flex items-center justify-center p-8"
          >
            {/* Main Health Card */}
            <div className="relative w-full max-w-md bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 shadow-2xl">
              {/* Card Header */}
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="text-xl font-bold font-heading">Financial Health Report</h3>
                  <p className="text-xs text-primary-foreground/50">Patient ID: #NEW-CLIENT</p>
                </div>
                <Activity className="w-6 h-6 text-accent animate-pulse" />
              </div>

              {/* Score Gauge */}
              <div className="flex justify-center mb-8 relative">
                {/* Decorative background circle */}
                <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-full transform scale-75" />

                <div className="relative w-48 h-48">
                  {/* SVG Gauge */}
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="8" className="text-white/5" />
                    <motion.circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="8"
                      className="text-accent"
                      strokeDasharray="283"
                      strokeDashoffset="283"
                      animate={{ strokeDashoffset: 56 }} // ~80% full
                      transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                      strokeLinecap="round"
                    />
                  </svg>
                  {/* Center Text */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1 }}
                      className="text-4xl font-bold font-heading"
                    >
                      80%
                    </motion.span>
                    <span className="text-xs text-accent font-medium uppercase tracking-widest">Optimized</span>
                  </div>
                </div>
              </div>

              {/* Checklist */}
              <div className="space-y-4">
                {[
                  { label: "Protection Analysis", status: "Secure", icon: Shield },
                  { label: "Investment Growth", status: "Review", icon: TrendingUp },
                  { label: "Emergency Fund", status: "Healthy", icon: CheckCircle2 },
                ].map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.2 + (i * 0.1) }}
                    className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/30 flex items-center justify-center">
                        <item.icon className="w-4 h-4 text-accent" />
                      </div>
                      <span className="text-sm font-medium">{item.label}</span>
                    </div>
                    <span className="text-xs font-semibold px-2 py-1 rounded bg-accent/20 text-accent">
                      {item.status}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Decorative Floating Elements */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 right-0 w-20 h-20 bg-accent rounded-2xl opacity-20 blur-xl"
            />
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-10 left-0 w-32 h-32 bg-blue-500 rounded-full opacity-20 blur-2xl"
            />
          </motion.div>

        </div>
      </div>
    </section>
  )
}
