"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Star, ExternalLink, Heart, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ReviewRequest() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section className="py-24 bg-primary relative overflow-hidden" ref={ref}>
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 to-transparent opacity-20 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="relative bg-white/5 backdrop-blur-2xl rounded-3xl p-8 sm:p-16 border border-white/10 text-center shadow-2xl overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Glow Effect on Hover */}
          <motion.div
            animate={{ opacity: isHovered ? 0.2 : 0 }}
            className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent to-transparent transition-opacity duration-700 pointer-events-none"
          />

          {/* Google Logo Placeholder / Icon */}
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-lg shadow-black/10">
              <svg viewBox="0 0 24 24" className="w-8 h-8">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.21.81-.63z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                <path d="M1 1h22v22H1z" fill="none" />
              </svg>
            </div>
          </div>

          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-6">
            Help Your Neighbors Find Us
          </h2>

          <p className="text-primary-foreground/80 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Financial trust is built on community feedback. If our session added clarity to your life, your <span className="text-accent font-semibold">5-star review</span> helps another Pokhara family find the same peace of mind.
          </p>

          {/* Interactive Stars */}
          <div className="flex justify-center gap-2 sm:gap-4 mb-10">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0, y: 20 }}
                animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.1, type: "spring" }}
                className="group cursor-default"
              >
                <Star
                  className={`w-10 h-10 sm:w-12 sm:h-12 text-amber-400 group-hover:scale-110 transition-transform duration-300 ${isHovered ? 'fill-amber-400' : 'fill-amber-400/50'}`}
                  strokeWidth={1.5}
                />
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col items-center gap-6">
            <Button
              size="lg"
              asChild
              className="bg-white text-primary hover:bg-white/90 font-bold text-lg px-10 py-7 rounded-2xl shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.5)] transition-all transform hover:-translate-y-1"
            >
              <a
                href="https://g.page/r/navaganga-financial-consultancy/review"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3"
              >
                <MessageSquare className="w-5 h-5" />
                Write a Google Review
              </a>
            </Button>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 1 }}
              className="flex items-center gap-2 text-sm text-primary-foreground/50"
            >
              <Heart className="w-4 h-4 text-rose-400" />
              <span>Takes less than 30 seconds</span>
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  )
}
