"use client"

import { Play } from "lucide-react"
import { motion } from "framer-motion"

export function IntroVideo() {
    return (
        <section className="py-24 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-12">Meet Your Financial Doctor</h2>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative max-w-4xl mx-auto aspect-video bg-black/5 rounded-3xl overflow-hidden border border-border/50 shadow-2xl flex items-center justify-center group cursor-pointer"
                >
                    {/* Placeholder for Video */}
                    <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/60" />

                    <div className="relative z-10 flex flex-col items-center gap-4">
                        <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                            <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center shadow-lg pl-1">
                                <Play className="w-6 h-6 text-white fill-current" />
                            </div>
                        </div>
                        <p className="text-white font-medium tracking-wide uppercase text-sm">Watch 90s Intro</p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
