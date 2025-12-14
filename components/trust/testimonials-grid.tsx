"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Star, Quote, CheckCircle2, MapPin } from "lucide-react"

const testimonials = [
  {
    name: "Ramesh Gurung",
    initials: "RG",
    location: "Lakeside, Pokhara",
    rating: 5,
    text: "Finally found an advisor who explains everything clearly. No pushy sales, just genuine advice. My family's financial plan is now properly sorted regarding education and health.",
    highlight: "Clear explanations",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    name: "Sunita Sharma",
    initials: "SS",
    location: "Chipledhunga, Pokhara",
    rating: 5,
    text: "The health insurance claim support was amazing. They guided us through every step when we needed it most. I was worried it would be rejected, but they handled the paperwork perfectly.",
    highlight: "Claim support",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    name: "Dipak Thapa",
    initials: "DT",
    location: "Amarsingh Chowk",
    rating: 5,
    text: "Started SIPs for my children's education after their guidance. The yearly review calls help me stay on track with my goals. It feels good to see the growth.",
    highlight: "Goal planning",
    gradient: "from-amber-500 to-orange-500"
  },
  {
    name: "Kamala Poudel",
    initials: "KP",
    location: "Prithvi Chowk",
    rating: 5,
    text: "They diagnosed that my existing LIC policy wasn't right for my needs and helped me find better coverage without extra cost. Very ethical team.",
    highlight: "Ethical advice",
    gradient: "from-emerald-500 to-green-500"
  },
  {
    name: "Bikash Adhikari",
    initials: "BA",
    location: "Mahendrapool",
    rating: 5,
    text: "As a first-time investor, I was confused. NavaGanga made it simple. Now I'm confident about my retirement planning and even started a small fund for travel.",
    highlight: "Simplifying finance",
    gradient: "from-indigo-500 to-blue-600"
  },
  {
    name: "Gita Shrestha",
    initials: "GS",
    location: "New Road, Pokhara",
    rating: 5,
    text: "The Financial Health Check-up was eye-opening. I didn't realize how under-insured my family was. Now we're properly protected against unforeseen medical costs.",
    highlight: "Family protection",
    gradient: "from-rose-500 to-red-500"
  },
]

export function TestimonialsGrid() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 bg-background relative overflow-hidden" ref={ref}>
      {/* Background Decor */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            <CheckCircle2 className="w-4 h-4" />
            <span>Verified Success Stories</span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            Voices of <span className="text-accent">Confidence</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From detailed planning to emergency claims support, here is how we are making a difference in the lives of Pokhareli families.
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="break-inside-avoid"
            >
              <div className="relative bg-card hover:bg-card/80 border border-border hover:border-accent/40 rounded-2xl p-6 transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/5">

                {/* Quote Decor */}
                <Quote className="absolute top-6 right-6 w-8 h-8 text-accent/10 rotate-180" />

                {/* Header: Avatar & Info */}
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                    {testimonial.initials}
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-foreground leading-tight">{testimonial.name}</h4>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground mt-0.5">
                      <MapPin className="w-3 h-3" />
                      {testimonial.location}
                    </div>
                  </div>
                </div>

                {/* Rating & Highlight */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-0.5">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-secondary px-2 py-1 rounded text-foreground/70">
                    {testimonial.highlight}
                  </span>
                </div>

                {/* Content */}
                <p className="text-muted-foreground leading-relaxed text-sm">
                  &quot;{testimonial.text}&quot;
                </p>

                {/* Verified Badge */}
                <div className="mt-4 pt-4 border-t border-border/50 flex items-center gap-2 opacity-50 group-hover:opacity-100 transition-opacity">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  <span className="text-xs font-medium text-accent">Verified Client</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
