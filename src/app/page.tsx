import dynamic from "next/dynamic"
import { UrgencyBanner } from "@/components/UrgencyBanner"
import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { MovieShowcase } from "@/components/MovieShowcase"
import { PlatformCarousel } from "@/components/PlatformCarousel"

// Heavy below-the-fold components → code-split for smaller initial bundle
const AppShowcase         = dynamic(() => import("@/components/AppShowcase").then(m => ({ default: m.AppShowcase })))
const Economy             = dynamic(() => import("@/components/Economy").then(m => ({ default: m.Economy })))
const TrustSeals          = dynamic(() => import("@/components/TrustSeals").then(m => ({ default: m.TrustSeals })))
const BestServer          = dynamic(() => import("@/components/BestServer").then(m => ({ default: m.BestServer })))
const DeviceCompatibility = dynamic(() => import("@/components/DeviceCompatibility").then(m => ({ default: m.DeviceCompatibility })))
const Testimonials        = dynamic(() => import("@/components/Testimonials").then(m => ({ default: m.Testimonials })))
const Plans               = dynamic(() => import("@/components/Plans").then(m => ({ default: m.Plans })))
const FAQ                 = dynamic(() => import("@/components/FAQ").then(m => ({ default: m.FAQ })))
const Footer              = dynamic(() => import("@/components/Footer").then(m => ({ default: m.Footer })))
const WhatsAppButton      = dynamic(() => import("@/components/WhatsAppButton").then(m => ({ default: m.WhatsAppButton })))

export default function Home() {
  return (
    <main className="min-h-screen bg-dark">
      {/* Above-the-fold: SSR'd for instant paint */}
      <UrgencyBanner />
      <Navbar />
      <Hero />
      <AppShowcase />
      <MovieShowcase />
      <PlatformCarousel />

      {/* Below-the-fold: lazy hydrated after LCP */}
      <Economy />
      <TrustSeals />
      <BestServer />
      <DeviceCompatibility />
      <Testimonials />
      <Plans />
      <FAQ />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
