"use client"

import { useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Send, RefreshCw, ShieldCheck } from "lucide-react"

// Generate random math captcha
function generateCaptcha() {
    const num1 = Math.floor(Math.random() * 10) + 1
    const num2 = Math.floor(Math.random() * 10) + 1
    const operators = ['+', '-'] as const
    const operator = operators[Math.floor(Math.random() * operators.length)]

    let answer: number
    if (operator === '+') {
        answer = num1 + num2
    } else {
        // Ensure positive result for subtraction
        const larger = Math.max(num1, num2)
        const smaller = Math.min(num1, num2)
        answer = larger - smaller
        return { question: `${larger} ${operator} ${smaller}`, answer }
    }

    return { question: `${num1} ${operator} ${num2}`, answer }
}

export function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

    // Captcha state
    const [captcha, setCaptcha] = useState({ question: '', answer: 0 })
    const [captchaInput, setCaptchaInput] = useState('')
    const [captchaError, setCaptchaError] = useState(false)

    // Generate captcha on mount
    const refreshCaptcha = useCallback(() => {
        setCaptcha(generateCaptcha())
        setCaptchaInput('')
        setCaptchaError(false)
    }, [])

    useEffect(() => {
        refreshCaptcha()
    }, [refreshCaptcha])

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.id]: e.target.value
        }))
    }

    // Handle phone input - only allow numbers, max 10 digits
    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/\D/g, '') // Remove non-digits
        if (value.length <= 10) {
            setFormData(prev => ({
                ...prev,
                phone: value
            }))
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        setSubmitStatus('idle')
        setCaptchaError(false)

        // Basic validation
        if (!formData.name || !formData.email || !formData.message) {
            alert('Please fill in all required fields')
            setIsSubmitting(false)
            return
        }

        // Captcha validation
        if (parseInt(captchaInput) !== captcha.answer) {
            setCaptchaError(true)
            setIsSubmitting(false)
            refreshCaptcha()
            return
        }

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })

            if (!response.ok) {
                throw new Error('Failed to send message')
            }

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
                refreshCaptcha()
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
                                inputMode="numeric"
                                placeholder="9812345678"
                                value={formData.phone}
                                onChange={handlePhoneChange}
                                maxLength={10}
                                className="h-12"
                            />
                            <p className="text-xs text-muted-foreground">Numbers only, max 10 digits</p>
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

                        {/* Security Captcha */}
                        <div className="space-y-3 p-4 bg-secondary/30 rounded-xl border border-border">
                            <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                                <ShieldCheck className="w-4 h-4 text-accent" />
                                Security Verification
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-3 bg-background px-4 py-2.5 rounded-lg border border-border">
                                    <span className="text-lg font-bold text-foreground">{captcha.question} = ?</span>
                                </div>
                                <Input
                                    type="text"
                                    inputMode="numeric"
                                    placeholder="Answer"
                                    value={captchaInput}
                                    onChange={(e) => {
                                        const val = e.target.value.replace(/\D/g, '')
                                        setCaptchaInput(val)
                                        setCaptchaError(false)
                                    }}
                                    className={`h-11 w-24 text-center font-bold ${captchaError ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                                    required
                                />
                                <Button
                                    type="button"
                                    variant="ghost"
                                    size="icon"
                                    onClick={refreshCaptcha}
                                    className="h-11 w-11 shrink-0"
                                    title="Refresh captcha"
                                >
                                    <RefreshCw className="w-4 h-4" />
                                </Button>
                            </div>
                            {captchaError && (
                                <p className="text-sm text-red-500">Incorrect answer. Please try again.</p>
                            )}
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
