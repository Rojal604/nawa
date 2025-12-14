"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Phone, MessageCircle, Mail, MapPin, ArrowRight, Coffee } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const contactMethods = [
  {
    icon: Phone,
    label: "Call Us",
    value: "9857668986",
    href: "tel:+9779857668986",
    bg: "bg-blue-500/10 dark:bg-blue-500/20",
    text: "text-blue-600 dark:text-blue-400",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "9847668986",
    href: "https://wa.me/9779847668986",
    bg: "bg-green-500/10 dark:bg-green-500/20",
    text: "text-green-600 dark:text-green-400",
  },
  {
    icon: Mail,
    label: "Email",
    value: "navagangafinancial...",
    displayValue: "navagangafinancialconsultancy@gmail.com",
    href: "mailto:navagangafinancialconsultancy@gmail.com",
    bg: "bg-amber-500/10 dark:bg-amber-500/20",
    text: "text-amber-600 dark:text-amber-400",
  },
  {
    icon: MapPin,
    label: "Visit Us",
    value: "Pokhara-10, Amarsingh",
    href: "https://maps.google.com/?q=Amarsingh+Chowk,+Pokhara",
    bg: "bg-rose-500/10 dark:bg-rose-500/20",
    text: "text-rose-600 dark:text-rose-400",
  },
]

export function ContactCTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 relative overflow-hidden bg-slate-50 dark:bg-slate-950" ref={ref}>
      {/* Background Map Pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 md:p-16 shadow-2xl border border-slate-200 dark:border-slate-800 text-center relative overflow-hidden"
        >
          {/* Decor */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-accent to-emerald-500" />

          <span className="inline-block py-1 px-3 rounded-full bg-accent/10 text-accent text-xs font-bold tracking-widest uppercase mb-6">
            Let's Connect
          </span>

          <h2 className="font-heading font-bold text-3xl sm:text-5xl text-foreground mb-6 text-balance">
            Start a Conversation.
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-12">
            Whether you have a specific question or just want to explore your options over a cup of tea, our doors are always open.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.label}
                href={method.href}
                target={method.href.startsWith("http") ? "_blank" : undefined}
                rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                className="group flex flex-col items-center p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 hover:border-accent/30 hover:shadow-lg transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl ${method.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <method.icon className={`w-6 h-6 ${method.text}`} />
                </div>
                <h3 className="font-bold text-foreground mb-1">{method.label}</h3>
                <p className="text-xs text-muted-foreground truncate w-full px-2">
                  {method.displayValue || method.value}
                </p>
              </motion.a>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Button size="lg" className="rounded-full px-8 bg-foreground text-background hover:bg-foreground/90">
              <Link href="/fhc" className="flex items-center gap-2">
                <Coffee className="w-4 h-4" />
                Visit Our Office
              </Link>
            </Button>
          </div>

        </motion.div>
      </div>
    </section>
  )
}
