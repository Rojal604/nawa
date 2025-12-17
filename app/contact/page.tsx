import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactHero } from "@/components/contact/contact-hero"
import { ContactInfo } from "@/components/contact/contact-info"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactMap } from "@/components/contact/contact-map"

export default function ContactPage() {
    return (
        <>
            <Navigation />
            <main className="min-h-screen">
                <ContactHero />
                <ContactInfo />
                <ContactForm />
                <ContactMap />
            </main>
            <Footer />
        </>
    )
}
