"use client"

import { motion } from "framer-motion"
import { MapPin } from "lucide-react"

export function ContactHero() {
    return (
        <section className="relative bg-primary text-primary-foreground pt-32 pb-20 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent opacity-60" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto"
                >
                    <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 text-accent px-5 py-2.5 rounded-full mb-8">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm font-semibold tracking-wide uppercase">Get In Touch</span>
                    </div>

                    <h1 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-6">
                        Let's Secure Your <br className="hidden sm:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-white">Financial Future</span>
                    </h1>

                    <p className="text-base sm:text-lg text-primary-foreground/70 leading-relaxed">
                        Have questions? Need a free consultation? We're here to help you achieve financial immunity.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}
