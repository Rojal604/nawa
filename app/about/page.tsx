import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about/about-hero"
import { BrandStory } from "@/components/about/brand-story"
import { ProcessSection } from "@/components/about/process-section"
import { ContactCTA } from "@/components/about/contact-cta"

export const metadata = {
  title: "About Us | NavaGanga Financial Consultancy",
  description:
    "Learn about NavaGanga Financial Consultancy - 5+ years of experience guiding 500+ Pokhara families toward financial freedom. Based in Amarsingh Chowk, Pokhara.",
}

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className="pt-20">
        <AboutHero />
        <BrandStory />
        <ProcessSection />
        <ContactCTA />
      </main>
      <Footer />
    </>
  )
}
