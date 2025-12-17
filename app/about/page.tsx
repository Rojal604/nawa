import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about/about-hero"
import { BrandStory } from "@/components/about/brand-story"
import { ProcessSection } from "@/components/about/process-section"
import { FounderStory } from "@/components/about/founder-story"

export const metadata = {
  title: "About Us | NavaGanga Financial Consultancy",
  description:
    "We are Financial Doctors for families in Pokhara. Licensed & regulated financial advice for Insurance, Mutual Funds, and Retirement.",
}

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main>
        <AboutHero />
        <BrandStory />
        <ProcessSection />
        <FounderStory />
      </main>
      <Footer />
    </>
  )
}
