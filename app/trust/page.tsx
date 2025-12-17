import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { TrustHero } from "@/components/trust/trust-hero"
import { TrustBadges } from "@/components/trust/trust-badges"
import { TestimonialsGrid } from "@/components/trust/testimonials-grid"
import { ClaimStories } from "@/components/trust/claim-stories"

export const metadata = {
  title: "Client Stories & Trust | NavaGanga Financial Consultancy",
  description:
    "Read real stories from 500+ families we've helped in Pokhara. Google reviews, claim success stories, and client testimonials.",
}

export default function TrustPage() {
  return (
    <>
      <Navigation />
      <main className="pt-20">
        <TrustHero />
        <TrustBadges />
        <TestimonialsGrid />
        <ClaimStories />
      </main>
      <Footer />
    </>
  )
}
