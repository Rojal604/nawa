"use client"

import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react"

const contactDetails = [
    {
        icon: Phone,
        label: "Phone",
        value: "+977-9847668986",
        href: "tel:+9779847668986"
    },
    {
        icon: MessageCircle,
        label: "WhatsApp",
        value: "+977-9847668986",
        href: "https://wa.me/9779847668986"
    },
    {
        icon: Mail,
        label: "Email",
        value: "navagangafinancialconsultancy@gmail.com",
        href: "mailto:navagangafinancialconsultancy@gmail.com"
    },
    {
        icon: MapPin,
        label: "Office",
        value: "Pokhara, Nepal",
        href: "#map"
    },
    {
        icon: Clock,
        label: "Hours",
        value: "Sun - Fri: 9AM - 6PM",
        href: null
    }
]

export function ContactInfo() {
    return (
        <section className="py-16 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                    {contactDetails.map((item, index) => (
                        <div
                            key={index}
                            className="group bg-secondary/30 border border-border/50 rounded-2xl p-6 hover:bg-secondary/50 hover:border-accent/30 transition-all duration-300"
                        >
                            {item.href ? (
                                <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined} className="block">
                                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                                        <item.icon className="w-5 h-5 text-accent group-hover:text-white" />
                                    </div>
                                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{item.label}</p>
                                    <p className="font-semibold text-foreground group-hover:text-accent transition-colors break-all text-sm">{item.value}</p>
                                </a>
                            ) : (
                                <>
                                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                                        <item.icon className="w-5 h-5 text-accent" />
                                    </div>
                                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{item.label}</p>
                                    <p className="font-semibold text-foreground break-all text-sm">{item.value}</p>
                                </>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
