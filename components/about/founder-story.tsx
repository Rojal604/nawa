"use client"

import { motion } from "framer-motion"
import { MessageCircle, CalendarCheck, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { getAssetPath } from "@/lib/utils"
import Link from "next/link"

export function FounderStory() {
    return (
        <section className="py-24 bg-gradient-to-br from-[#0B1120] to-[#1a2e44] text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
                    {/* Photo */}
                    <div className="relative mx-auto lg:mx-0">
                        <div className="w-full max-w-md aspect-[3/4] rounded-3xl overflow-hidden border-4 border-white/10 relative shadow-2xl">
                            <Image src={getAssetPath("/founder-professional.png")} alt="Founder of NavaGanga" fill className="object-cover" />
                        </div>
                        <div className="absolute -bottom-4 right-4 sm:-bottom-6 sm:-right-6 w-40 sm:w-48 bg-accent/95 backdrop-blur shadow-xl p-4 sm:p-6 rounded-2xl border border-white/10">
                            <p className="font-heading font-bold text-2xl text-white">Founder</p>
                            <p className="text-white/80 text-sm">NavaGanga Financial Consultancy</p>
                        </div>
                    </div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-5xl mb-6 sm:mb-8">Why I Started This.</h2>
                        <Quote className="w-10 h-10 sm:w-12 sm:h-12 text-accent/50 rotate-180 mb-4 sm:mb-6" />

                        <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-white/80 leading-relaxed font-sans">
                            <p>
                                "I saw too many families in Pokhara buying random policies without understanding if they actually solved their problem. Agents were selling products; no one was diagnosing the need."
                            </p>
                            <p>
                                "I realized that financial advice should be like medical advice—diagnosis first, prescription second. That's why I created the 'Financial Health Check-up' model."
                            </p>
                            <p>
                                "My promise to you is simple: I will never recommend a product I wouldn't buy for my own family."
                            </p>
                        </div>

                        <div className="mt-10 flex flex-wrap gap-4">
                            <div className="bg-white/5 px-6 py-3 rounded-xl border border-white/10">
                                <span className="block font-bold text-2xl text-accent">500+</span>
                                <span className="text-xs text-white/60">Families Impacted</span>
                            </div>
                            <div className="bg-white/5 px-6 py-3 rounded-xl border border-white/10">
                                <span className="block font-bold text-2xl text-accent">100%</span>
                                <span className="text-xs text-white/60">Transparency</span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* CTA Block */}
                <div className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 md:p-12 text-center max-w-4xl mx-auto backdrop-blur-sm">
                    <h3 className="font-heading font-bold text-2xl sm:text-3xl mb-4">Ready for your Diagnosis?</h3>
                    <p className="text-white/70 mb-8 max-w-xl mx-auto">
                        Join 500+ Pokhara families who have secured their future with us.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold h-14 px-8 text-lg">
                            <Link href="/fhc" className="gap-2">
                                <CalendarCheck className="w-5 h-5" />
                                Book Free Check-up
                            </Link>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="bg-transparent border-white/20 text-white hover:bg-white/10 h-14 px-8 text-lg">
                            <a href="https://wa.me/9779847668986" target="_blank" rel="noopener noreferrer" className="gap-2">
                                <MessageCircle className="w-5 h-5" />
                                WhatsApp Me
                            </a>
                        </Button>
                    </div>
                </div>

            </div>
        </section>
    )
}
