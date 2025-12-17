"use client"

import { motion } from "framer-motion"
import { Star, Clock, ShieldCheck, PieChart, Quote } from "lucide-react"

const benefits = [
    {
        icon: ShieldCheck,
        title: "Transparent Advice",
        description: "No hidden fees or product pushing. We recommend only what you need."
    },
    {
        icon: Clock,
        title: "24-hr Response",
        description: "We are always just a call or message away when you need us most."
    },
    {
        icon: PieChart,
        title: "360° Planning",
        description: "Complete financial picture: Insurance, Investments, and Retirement."
    }
]

const testimonials = [
    {
        name: "Ramesh Adhikari",
        role: "Business Owner",
        image: "/avatars/avatar-1.png",
        text: "NavaGanga helped me structure my business insurance and personal savings perfectly."
    },
    {
        name: "Sita Sharma",
        role: "Teacher",
        image: "/avatars/avatar-2.png",
        text: "The Financial Health Check-up opened my eyes. I finally have a tailored retirement plan."
    },
    {
        name: "Binod Gurung",
        role: "Software Engineer",
        image: "/avatars/avatar-3.png",
        text: "Honest advice and great service. I highly recommend their SIP planning."
    }
]

export function TrustBoosters() {
    return (
        <section className="py-20 bg-background relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Top Row: Google Rating & Partners */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16 border-b border-border/40 pb-12">
                    {/* Google Rating */}
                    <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-border/50">
                        <div className="bg-white p-2 rounded-full flex items-center justify-center">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                            </svg>
                        </div>
                        <div>
                            <div className="flex items-center gap-1">
                                <span className="font-bold text-lg">5.0</span>
                                <div className="flex text-amber-400">
                                    {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                                </div>
                            </div>
                            <p className="text-xs text-muted-foreground">Based on 100+ Reviews</p>
                        </div>
                    </div>

                    {/* Partner Logos (Placeholders for Insurers/AMCs) */}
                    <div className="hidden md:flex items-center gap-4 lg:gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500 flex-wrap">
                        <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-muted-foreground">Trusted Partners:</span>
                        <p className="font-heading font-bold text-lg lg:text-xl text-foreground">LIC Nepal</p>
                        <p className="font-heading font-bold text-lg lg:text-xl text-foreground">Himalayan Life</p>
                        <p className="font-heading font-bold text-lg lg:text-xl text-foreground">Nabil Invest</p>
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                    {/* Why Choose Us */}
                    <div>
                        <span className="text-accent font-semibold text-sm uppercase tracking-widest mb-4 block">Why Choose Us</span>
                        <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl mb-6 sm:mb-8">
                            Your Financial Peace of Mind is Our Priority
                        </h2>
                        <div className="space-y-8">
                            {benefits.map((benefit, index) => (
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    key={benefit.title}
                                    className="flex gap-4"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                                        <benefit.icon className="w-6 h-6 text-accent" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">{benefit.title}</h3>
                                        <p className="text-muted-foreground">{benefit.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Testimonials */}
                    <div className="bg-secondary/20 rounded-[2rem] p-6 sm:p-8 border border-white/10 relative mt-8 lg:mt-0">
                        <Quote className="absolute top-6 right-6 sm:top-8 sm:right-8 w-10 h-10 sm:w-12 sm:h-12 text-accent/10 rotate-180" />
                        <h3 className="font-heading font-bold text-xl sm:text-2xl mb-6 sm:mb-8">Voice of Families</h3>
                        <div className="space-y-6">
                            {testimonials.map((t, i) => (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    key={i}
                                    className="bg-background rounded-xl p-4 shadow-sm border border-border/50 flex gap-4 items-start"
                                >
                                    <div className="w-10 h-10 rounded-full bg-accent/20 shrink-0 overflow-hidden relative">
                                        {/* Placeholder for avatar if image fails */}
                                        <div className="absolute inset-0 flex items-center justify-center text-accent font-bold text-xs">
                                            {t.name[0]}
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-sm text-foreground/80 italic mb-2">"{t.text}"</p>
                                        <p className="text-xs font-bold text-foreground">{t.name}</p>
                                        <p className="text-[10px] text-muted-foreground">{t.role}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
