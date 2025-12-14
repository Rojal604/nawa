import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { HowItWorks } from "@/components/home/how-it-works"
import { WhyNavaGanga } from "@/components/home/why-navaganga"
import { ServicesSection } from "@/components/home/services-section"
import { CTASection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <HowItWorks />
        <WhyNavaGanga />
        <ServicesSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
