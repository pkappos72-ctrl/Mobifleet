import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "MobiFleet — Making Mobility Possible | Vehicle Accessibility Solutions",
  description:
    "MobiFleet specializes in retrofitting vehicles for the disabled across Canada. Accessible vans, adaptive controls, and custom mobility solutions.",
  generator: "v0.app",
  keywords:
    "handicap accessible vehicles, wheelchair vans, adaptive driving controls, mobility solutions, vehicle retrofitting, disability services",
  openGraph: {
    title: "MobiFleet — Making Mobility Possible",
    description: "Professional vehicle retrofitting for accessibility, safety, and independence.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
