"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ShieldCheck, Lock } from "lucide-react"

const faqs = [
    {
        question: "Is this really free?",
        answer: "Yes. The initial Financial Health Check-up and Report Card are 100% free. We charge only if you choose to implement specific investment plans through us, or opt for our advanced paid consultancy."
    },
    {
        question: "Do I have to share my bank details?",
        answer: "No. We only need approximate figures to understand your cash flow. We never ask for account numbers, PINs, or passwords."
    },
    {
        question: "Will you spam me with calls?",
        answer: "Never. We are advisors, not telemarketers. We will contact you only to discuss your report at the scheduled time."
    }
]

export function FHCFaq() {
    return (
        <section className="py-20 bg-secondary/30">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="font-heading font-bold text-3xl text-center mb-12">Frequently Asked Questions</h2>

                <Accordion type="single" collapsible className="w-full space-y-4">
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`} className="bg-background border border-border rounded-xl px-6">
                            <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline py-6">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground text-base pb-6 leading-relaxed">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>

                <div className="mt-12 flex items-center justify-center gap-2 text-sm text-muted-foreground bg-accent/5 p-4 rounded-lg border border-accent/10">
                    <Lock className="w-4 h-4 text-accent" />
                    <span>Your data is <strong>256-bit encrypted</strong> and never shared with 3rd parties.</span>
                </div>
            </div>
        </section>
    )
}
