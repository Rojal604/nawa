"use client"

import { ShieldCheck, Award, Lock, FileCheck } from "lucide-react"

const badges = [
    {
        icon: ShieldCheck,
        title: "Licensed Distributor",
        desc: "Authorized by Beema Samiti (IRDA equivalent)"
    },
    {
        icon: Award,
        title: "ISO 9001:2015",
        desc: "Certified for Quality Management"
    },
    {
        icon: Lock,
        title: "Data Privacy",
        desc: "Strict Client Confidentiality Protocols"
    },
    {
        icon: FileCheck,
        title: "Fiduciary Standard",
        desc: "Client Interest First, Always"
    }
]

export function TrustBadges() {
    return (
        <section className="py-12 border-y border-border/50 bg-secondary/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {badges.map((badge, index) => (
                        <div key={index} className="flex items-center gap-4 justify-center md:justify-start opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
                            <div className="w-12 h-12 bg-background border border-border rounded-full flex items-center justify-center shrink-0">
                                <badge.icon className="w-6 h-6 text-accent" />
                            </div>
                            <div>
                                <p className="font-bold text-foreground text-sm">{badge.title}</p>
                                <p className="text-xs text-muted-foreground">{badge.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
