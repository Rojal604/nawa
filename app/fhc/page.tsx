import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FHCForm } from "@/components/fhc/fhc-form"
import { FHCHero } from "@/components/fhc/fhc-hero"

export const metadata = {
  title: "Free Financial Health Check-up | NavaGanga Financial Consultancy",
  description:
    "Get a free 10-minute Financial Health Check-up. We diagnose your financial health before recommending any solutions. Based in Pokhara, Nepal.",
}

export default function FHCPage() {
  return (
    <>
      <Navigation />
      <main className="pt-20">
        <FHCHero />
        <FHCForm />
      </main>
      <Footer />
    </>
  )
}
