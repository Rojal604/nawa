import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { TrustBoosters } from "@/components/home/trust-boosters"
import { OffersSection } from "@/components/home/offers-section"
import { ServicesSection } from "@/components/home/services-section"
import { IntroVideo } from "@/components/home/intro-video"

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <TrustBoosters />
        <OffersSection />
        <ServicesSection />
        <IntroVideo />
      </main>
      <Footer />
    </>
  )
}
