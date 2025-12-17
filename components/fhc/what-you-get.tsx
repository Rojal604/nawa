"use client"

import { FileBarChart, AlertTriangle, Map } from "lucide-react"

const features = [
    {
        icon: FileBarChart,
        title: "Detailed Report Card",
        description: "A clear Scorecard of where you stand on Protection, Liquidity, and Assets."
    },
    {
        icon: AlertTriangle,
        title: "Gap Analysis",
        description: "Identify hidden risks—under-insurance, bad investments, or tax leaks."
    },
    {
        icon: Map,
        title: "Recovery Roadmap",
        description: "Step-by-step 90-day action plan to fix the gaps and boost your score."
    }
]

export function WhatYouGet() {
    return (
        <section className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="font-heading font-bold text-3xl sm:text-4xl text-foreground">What You Get in Your Report</h2>
                    <p className="text-muted-foreground mt-4">We do not just give advice; we give you a written plan.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-all text-center">
                            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 text-accent">
                                <feature.icon className="w-8 h-8" />
                            </div>
                            <h3 className="font-bold text-xl mb-3">{feature.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
