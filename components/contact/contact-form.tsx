"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Send } from "lucide-react"

export function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.id]: e.target.value
        }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        setSubmitStatus('idle')

        // Basic validation
        if (!formData.name || !formData.email || !formData.message) {
            alert('Please fill in all required fields')
            setIsSubmitting(false)
            return
        }

        try {
            // Simulate form submission
            await new Promise(resolve => setTimeout(resolve, 1500))

            console.log('Contact form submitted:', formData)

            setSubmitStatus('success')

            // Reset form
            setTimeout(() => {
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    message: ''
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
        <section className="py-24 bg-secondary/20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-4">Send Us a Message</h2>
                    <p className="text-muted-foreground">We'll get back to you within 24 hours</p>
                </div>

                <div className="bg-background border border-border rounded-3xl p-8 md:p-12 shadow-xl">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="name">Full Name *</Label>
                                <Input
                                    id="name"
                                    placeholder="Your name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                    className="h-12"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">Email Address *</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="your@email.com"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    className="h-12"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="phone">Phone Number (Optional)</Label>
                            <Input
                                id="phone"
                                type="tel"
                                placeholder="+977"
                                value={formData.phone}
                                onChange={handleInputChange}
                                className="h-12"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="message">Message *</Label>
                            <Textarea
                                id="message"
                                placeholder="How can we help you?"
                                value={formData.message}
                                onChange={handleInputChange}
                                required
                                rows={6}
                                className="resize-none"
                            />
                        </div>

                        <Button
                            type="submit"
                            size="lg"
                            disabled={isSubmitting}
                            className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold h-12 disabled:opacity-50"
                        >
                            {isSubmitting ? (
                                'Sending...'
                            ) : submitStatus === 'success' ? (
                                '✓ Message Sent!'
                            ) : (
                                <>
                                    <Send className="w-4 h-4 mr-2" />
                                    Send Message
                                </>
                            )}
                        </Button>

                        {submitStatus === 'success' && (
                            <p className="text-sm text-center text-accent animate-pulse">
                                Thank you! We'll get back to you soon.
                            </p>
                        )}

                        {submitStatus === 'error' && (
                            <p className="text-sm text-center text-red-500">
                                Something went wrong. Please try again or contact us directly.
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </section>
    )
}
