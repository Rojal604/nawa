"use client"

import { motion } from "framer-motion"
import { Star, Users, Award, Heart, ShieldCheck, Quote } from "lucide-react"

const stats = [
  { icon: Users, value: "500+", label: "Families Secured" },
  { icon: Star, value: "4.9/5", label: "Client Rating" },
  { icon: Award, value: "100%", label: "Claim Settlement" },
  { icon: ShieldCheck, value: "12Cr+", label: "Assets Mananged" },
]

const recentReviews = [
  {
    initials: "RM",
    name: "Ramesh M.",
    text: "The financial health check-up was an eye opener. Finally have a clear path.",
    rating: 5,
    delay: 0
  },
  {
    initials: "SG",
    name: "Sita G.",
    text: "Honest advice without pushing policies. Rare to find in Pokhara.",
    rating: 5,
    delay: 1.5
  },
  {
    initials: "KP",
    name: "Kiran P.",
    text: "Helped me plan my child's education fund perfectly.",
    rating: 5,
    delay: 3
  }
]

export function TrustHero() {
  return (
    <section className="relative bg-primary text-primary-foreground pt-20 pb-0 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left Column: Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8">
              <div className="flex -space-x-2">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-6 h-6 rounded-full bg-accent/20 border border-primary flex items-center justify-center text-[8px] font-bold text-accent">
                    <Star className="w-3 h-3 fill-accent" />
                  </div>
                ))}
              </div>
              <span className="text-sm font-medium text-primary-foreground/90 pl-1">Pokhara's Most Trusted Team</span>
            </div>

            <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-7xl leading-[1.1] mb-6">
              Built on <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-white">Trust,</span><br />
              Grow on <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-white">Results.</span>
            </h1>

            <p className="text-lg text-primary-foreground/70 mb-8 leading-relaxed max-w-xl">
              We don't measure success by policies sold, but by families protected. Explore the stories that define our legacy.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="px-6 py-4 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-4">
                <div className="text-3xl font-bold font-heading">500+</div>
                <div className="text-xs text-primary-foreground/60 uppercase tracking-widest leading-tight">Families<br />Consulted</div>
              </div>
              <div className="px-6 py-4 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-4">
                <div className="text-3xl font-bold font-heading">4.9</div>
                <div className="flex flex-col">
                  <div className="flex text-amber-400">
                    <Star className="w-3 h-3 fill-current" />
                    <Star className="w-3 h-3 fill-current" />
                    <Star className="w-3 h-3 fill-current" />
                    <Star className="w-3 h-3 fill-current" />
                    <Star className="w-3 h-3 fill-current" />
                  </div>
                  <div className="text-xs text-primary-foreground/60 uppercase tracking-widest leading-tight mt-0.5">Stars</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Floating Testimonials */}
          <div className="relative h-[500px] w-full hidden lg:block">
            {/* Central Hub */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-accent/20 rounded-full blur-3xl animate-pulse" />

            {recentReviews.map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8, x: 50 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  x: 0,
                  y: [0, -10, 0]
                }}
                transition={{
                  opacity: { duration: 0.5, delay: review.delay * 0.2 },
                  scale: { duration: 0.5, delay: review.delay * 0.2 },
                  x: { duration: 0.5, delay: review.delay * 0.2 },
                  y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: i }
                }}
                className={`absolute p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl max-w-xs
                        ${i === 0 ? "top-10 left-10" : ""}
                        ${i === 1 ? "top-1/2 right-0 translate-y-10" : ""}
                        ${i === 2 ? "bottom-10 left-20" : ""}
                    `}
              >
                <Quote className="w-8 h-8 text-accent/20 absolute top-4 right-4" />
                <p className="text-sm text-primary-foreground/90 leading-relaxed mb-4 italic">"{review.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent to-blue-500 flex items-center justify-center text-xs font-bold text-white">
                    {review.initials}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">{review.name}</p>
                    <div className="flex text-amber-400">
                      {[...Array(review.rating)].map((_, r) => (
                        <Star key={r} className="w-2 h-2 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Hero Footer Stats Strip */}
      <div className="bg-black/20 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10">
            {stats.map((stat, i) => (
              <div key={i} className="py-8 px-4 flex flex-col items-center justify-center text-center group hover:bg-white/5 transition-colors duration-300">
                <stat.icon className="w-6 h-6 text-accent mb-3 group-hover:scale-110 transition-transform" />
                <div className="text-2xl font-bold font-heading text-white mb-1">{stat.value}</div>
                <div className="text-xs text-primary-foreground/50 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
