"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { FileText, Stethoscope, TrendingUp, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"

const miniOffers = [
    {
        icon: FileText,
        title: "Term Plan Review",
        desc: "Is your family truly covered? Get a free policy audit."
    },
    {
        icon: Stethoscope,
        title: "Health Policy Audit",
        desc: "Check if your policy covers modern treatments & No Claim Bonus."
    },
    {
        icon: TrendingUp,
        title: "SIP Goal Planner",
        desc: "Map your SIPs to real life goals: House, Car, or Education."
    }
]

export function OffersSection() {
    const [formData, setFormData] = useState({
        name: '',
        city: '',
        phone: '',
        need: 'protection'
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.id]: e.target.value
        }))
    }

    const handleNeedChange = (value: string) => {
        setFormData(prev => ({
            ...prev,
            need: value
        }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        setSubmitStatus('idle')

        // Basic validation
        if (!formData.name || !formData.phone) {
            alert('Please fill in your name and phone number')
            setIsSubmitting(false)
            return
        }

        try {
            // Simulate form submission
            await new Promise(resolve => setTimeout(resolve, 1500))

            // Log the data to console
            console.log('Form submitted:', formData)

            setSubmitStatus('success')

            // Reset form after 2 seconds
            setTimeout(() => {
                setFormData({
                    name: '',
                    city: '',
                    phone: '',
                    need: 'protection'
                })
                setSubmitStatus('idle')
            }, 3000)

        } catch (error) {
            console.error('Form submission error:', error)
            setSubmitStatus('error')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <section className="py-24 bg-gradient-to-br from-[#0B1120] to-[#1a2e44] text-white relative isolate overflow-hidden">

            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] -z-10 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Lead Form */}
                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 md:p-10 shadow-2xl">
                        <div className="mb-8">
                            <span className="text-accent font-bold uppercase tracking-widest text-xs mb-2 block">Free Diagnosis</span>
                            <h2 className="font-heading font-bold text-2xl sm:text-3xl">Get Your Annual Financial Health Report</h2>
                            <p className="text-white/60 mt-2 text-sm sm:text-base">Zero cost. Zero obligation. 100% Confidential.</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="name" className="text-white/80">Full Name *</Label>
                                    <Input
                                        id="name"
                                        placeholder="Enter your name"
                                        className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus-visible:ring-accent h-12"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="city" className="text-white/80">City</Label>
                                    <Input
                                        id="city"
                                        placeholder="e.g. Pokhara"
                                        className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus-visible:ring-accent h-12"
                                        value={formData.city}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="phone" className="text-white/80">Phone Number (WhatsApp) *</Label>
                                <Input
                                    id="phone"
                                    type="tel"
                                    placeholder="+977"
                                    className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus-visible:ring-accent h-12"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>

                            <div className="space-y-3">
                                <Label className="text-white/80">Primary Financial Need</Label>
                                <RadioGroup value={formData.need} onValueChange={handleNeedChange} className="grid grid-cols-2 gap-3">
                                    <div className="flex items-center space-x-2 border border-white/10 rounded-lg p-3 hover:bg-white/5 transition-colors cursor-pointer">
                                        <RadioGroupItem value="protection" id="protection" className="text-accent border-white/30" />
                                        <Label htmlFor="protection" className="cursor-pointer">Family Protection</Label>
                                    </div>
                                    <div className="flex items-center space-x-2 border border-white/10 rounded-lg p-3 hover:bg-white/5 transition-colors cursor-pointer">
                                        <RadioGroupItem value="wealth" id="wealth" className="text-accent border-white/30" />
                                        <Label htmlFor="wealth" className="cursor-pointer">Wealth Creation</Label>
                                    </div>
                                    <div className="flex items-center space-x-2 border border-white/10 rounded-lg p-3 hover:bg-white/5 transition-colors cursor-pointer">
                                        <RadioGroupItem value="retirement" id="retirement" className="text-accent border-white/30" />
                                        <Label htmlFor="retirement" className="cursor-pointer">Retirement</Label>
                                    </div>
                                    <div className="flex items-center space-x-2 border border-white/10 rounded-lg p-3 hover:bg-white/5 transition-colors cursor-pointer">
                                        <RadioGroupItem value="health" id="health" className="text-accent border-white/30" />
                                        <Label htmlFor="health" className="cursor-pointer">Health Audit</Label>
                                    </div>
                                </RadioGroup>
                            </div>

                            <Button
                                type="submit"
                                size="lg"
                                disabled={isSubmitting}
                                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold h-12 text-lg mt-2 disabled:opacity-50"
                            >
                                {isSubmitting ? 'Submitting...' : submitStatus === 'success' ? '✓ Report Requested!' : 'Book Free Check-up'}
                            </Button>

                            {submitStatus === 'success' && (
                                <div className="bg-accent/10 border border-accent/30 rounded-lg p-4 animate-pulse">
                                    <p className="text-center text-accent font-semibold text-sm">
                                        ✓ Success! Your Annual Financial Health Report request has been submitted.
                                    </p>
                                    <p className="text-center text-white/70 text-xs mt-2">
                                        We'll contact you on WhatsApp within 24 hours to schedule your free consultation.
                                    </p>
                                </div>
                            )}

                            {submitStatus === 'error' && (
                                <p className="text-sm text-center text-red-400">
                                    Something went wrong. Please try again or contact us directly.
                                </p>
                            )}

                            <p className="text-xs text-center text-white/40">
                                By booking, you agree to our <Link href="/privacy" className="underline hover:text-white">Privacy Policy</Link>. We respect your data privacy.
                            </p>
                        </form>
                    </div>

                    {/* Right: Mini Offers */}
                    <div className="space-y-6 mt-12 lg:mt-0">
                        <h3 className="font-heading font-bold text-xl sm:text-2xl mb-6 lg:mb-8">Or Choose a Specific Solution</h3>
                        {miniOffers.map((offer, index) => (
                            <motion.div
                                key={offer.title}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: 1.02 }}
                                className="group bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-6 flex items-start gap-5 cursor-pointer transition-all"
                            >
                                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                    <offer.icon className="w-6 h-6 text-accent" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg text-white mb-2">{offer.title}</h4>
                                    <p className="text-sm text-white/70 leading-relaxed">{offer.desc}</p>
                                </div>
                            </motion.div>
                        ))}

                        <div className="pt-8 border-t border-white/10 mt-8">
                            <p className="text-sm text-white/50 mb-4">Unsure where to start?</p>
                            <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-white">
                                <a href="https://wa.me/9779847668986" target="_blank" rel="noopener noreferrer">Message us on WhatsApp</a>
                            </Button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

