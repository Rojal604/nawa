import type React from "react"
import type { Metadata, Viewport } from "next"
import { Poppins, Open_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
})

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "NavaGanga Financial Consultancy | Pokhara, Nepal",
  description:
    "Trusted financial advisory for families in Pokhara. Insurance, health cover, SIPs, and retirement planning. Diagnose First. Plan Right. Protect Always.",
  keywords: [
    "financial consultancy",
    "Pokhara",
    "Nepal",
    "insurance",
    "SIP",
    "retirement planning",
    "health insurance",
  ],

}

export const viewport: Viewport = {
  themeColor: "#0B1120",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${openSans.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
