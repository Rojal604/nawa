import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FHCHero } from "@/components/fhc/fhc-hero"
import { WhatYouGet } from "@/components/fhc/what-you-get"
import { FHCForm } from "@/components/fhc/fhc-form"
import { FHCFaq } from "@/components/fhc/fhc-faq"

export const metadata = {
  title: "Free Financial Health Check-up | NavaGanga Financial Consultancy",
  description:
    "Get a free 10-minute Financial Health Check-up. We diagnose your financial health before recommending any solutions. Based in Pokhara, Nepal.",
}

export default function FHCPage() {
  return (
    <>
      <Navigation />
      <main>
        <FHCHero />
        <WhatYouGet />
        <FHCForm />
        <FHCFaq />
      </main>
      <Footer />
    </>
  )
}
