"use client"

import Link from "next/link"
import Image from "next/image"
import { Phone, MessageCircle, Mail, MapPin, Facebook, Linkedin, Instagram, ArrowRight, Sparkles } from "lucide-react"
import { motion } from "framer-motion"
import { getAssetPath } from "@/lib/utils"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook", color: "hover:bg-blue-600" },
    { icon: Instagram, href: "#", label: "Instagram", color: "hover:bg-pink-600" },
    { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:bg-blue-700" },
  ]

  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/fhc", label: "Free Health Check-up" },
    { href: "/trust", label: "Client Stories" },
  ]

  const services = [
    "Term Insurance",
    "Health Insurance",
    "SIP Planning",
    "Retirement Planning",
    "Education Planning",
    "Wealth Management"
  ]

  const legalLinks = [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms & Conditions" },
    { href: "/disclaimer", label: "Disclaimer" },
  ]

  return (
    <footer className="relative bg-gradient-to-br from-[#0A1628] via-[#0D1B2E] to-[#0A1628] text-white pb-24 lg:pb-0">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">

          {/* Brand Column - Spans 4 columns on large screens */}
          <div className="lg:col-span-4 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {/* Logo */}
              <div className="flex items-center gap-3 mb-6">
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center overflow-hidden p-1">
                    <Image
                      src={getAssetPath("/logo.jpeg")}
                      alt="NavaGanga Financial Consultancy Logo"
                      width={64}
                      height={64}
                      className="w-full h-full object-contain rounded-xl"
                    />
                  </div>
                  <div className="absolute -top-1 -right-1">
                    <Sparkles className="w-4 h-4 text-accent animate-pulse" />
                  </div>
                </div>
                <div>
                  <p className="font-heading font-bold text-xl tracking-tight">NavaGanga</p>
                  <p className="text-[10px] text-white/60 tracking-[0.2em] uppercase font-medium">Financial Consultancy</p>
                </div>
              </div>

              {/* Tagline */}
              <p className="text-sm text-white/70 leading-relaxed max-w-sm">
                Guiding Pokhara families toward <span className="text-accent font-semibold">absolute financial freedom</span> with ethical, data-driven, and personalized advisory services.
              </p>

              {/* Social Links */}
              <div className="flex items-center gap-3 pt-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className={`group relative w-11 h-11 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center transition-all duration-300 hover:border-white/30 hover:scale-110 ${social.color}`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Quick Links - Spans 2 columns */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h4 className="font-heading font-bold text-base mb-6 flex items-center gap-2">
                Quick Links
                <div className="h-px w-8 bg-gradient-to-r from-accent to-transparent" />
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group flex items-center text-sm text-white/60 hover:text-accent transition-all duration-300"
                    >
                      <ArrowRight className="w-0 h-3 mr-0 opacity-0 group-hover:w-3 group-hover:mr-2 group-hover:opacity-100 transition-all duration-300 text-accent" />
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Services - Spans 3 columns */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4 className="font-heading font-bold text-base mb-6 flex items-center gap-2">
                Our Services
                <div className="h-px w-8 bg-gradient-to-r from-accent to-transparent" />
              </h4>
              <ul className="grid grid-cols-1 gap-2.5">
                {services.map((service) => (
                  <li key={service}>
                    <div className="flex items-center text-sm text-white/60 hover:text-white/80 transition-colors group cursor-default">
                      <div className="w-1 h-1 rounded-full bg-accent/50 mr-3 group-hover:bg-accent group-hover:scale-150 transition-all duration-300" />
                      {service}
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Contact Information - Spans 3 columns */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h4 className="font-heading font-bold text-base mb-6 flex items-center gap-2">
                Get in Touch
                <div className="h-px w-8 bg-gradient-to-r from-accent to-transparent" />
              </h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href="tel:+9779857668986"
                    className="group flex items-start gap-3 text-sm text-white/70 hover:text-white transition-colors"
                  >
                    <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:border-accent transition-all duration-300">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] text-white/40 uppercase tracking-wider mb-0.5">Call Us</p>
                      <p className="font-semibold text-white">9857668986</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/9779847668986"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-3 text-sm text-white/70 hover:text-white transition-colors"
                  >
                    <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:border-accent transition-all duration-300">
                      <MessageCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] text-white/40 uppercase tracking-wider mb-0.5">WhatsApp</p>
                      <p className="font-semibold text-white">9847668986</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:navagangafinancialconsultancy@gmail.com"
                    className="group flex items-start gap-3 text-sm text-white/70 hover:text-white transition-colors"
                  >
                    <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:border-accent transition-all duration-300">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] text-white/40 uppercase tracking-wider mb-0.5">Email Us</p>
                      <p className="font-semibold text-white text-xs break-all">navagangafinancialconsultancy@gmail.com</p>
                    </div>
                  </a>
                </li>
                <li className="flex items-start gap-3 text-sm text-white/70">
                  <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] text-white/40 uppercase tracking-wider mb-0.5">Visit Us</p>
                    <p className="font-semibold text-white leading-snug">Pokhara-10, Amarsingh Chowk, Kaski, Nepal</p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Divider with gradient */}
        <div className="relative my-12">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center md:text-left"
          >
            <p className="text-sm text-white/80 font-medium">
              © {currentYear} NavaGanga Financial Consultancy
            </p>
            <p className="text-xs text-white/40 mt-1.5 flex items-center justify-center md:justify-start gap-1">
              Designed & Developed with <span className="text-red-400 animate-pulse">❤</span> by
              <a
                href="https://www.facebook.com/nepaetechno"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400 hover:from-white hover:to-white transition-all duration-300 hover:tracking-wide"
              >
                NEPA E-Techno
              </a>
            </p>
          </motion.div>

          {/* Legal Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap justify-center md:justify-end gap-6"
          >
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-white/50 hover:text-accent transition-colors duration-300 font-medium"
              >
                {link.label}
              </Link>
            ))}
          </motion.div>
        </div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8 pt-8 border-t border-white/5"
        >
          <p className="text-[10px] text-white/30 text-center leading-relaxed max-w-4xl mx-auto">
            Insurance and mutual fund investments are subject to market risks. Please read all scheme-related documents carefully before investing. Past performance is not indicative of future returns.
            <br />
            <span className="opacity-60 block mt-2">IRDAI Registration No: [Pending] | ARN: [Pending] </span>
          </p>
        </motion.div>
      </div>

      {/* Bottom Glow Effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
    </footer>
  )
}
