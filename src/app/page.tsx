"use client"
import { motion } from "framer-motion"
import { UrgencyBanner } from "@/components/UrgencyBanner"
import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { PlatformCarousel } from "@/components/PlatformCarousel"
import { AppShowcase } from "@/components/AppShowcase"
import { Plans } from "@/components/Plans"
import { MovieShowcase } from "@/components/MovieShowcase"
import { BestServer } from "@/components/BestServer"
import { DeviceCompatibility } from "@/components/DeviceCompatibility"
import { Economy } from "@/components/Economy"
import { TrustSeals } from "@/components/TrustSeals"
import { Testimonials } from "@/components/Testimonials"
import { FAQ } from "@/components/FAQ"
import { Footer } from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-dark">
      <UrgencyBanner />
      <Navbar />
      <Hero />
      <MovieShowcase />
      <PlatformCarousel />
      <AppShowcase />
      <Economy />
      <TrustSeals />
      <BestServer />
      <DeviceCompatibility />
      <Testimonials />
      <Plans />
      <FAQ />
      <Footer />
      
      {/* WhatsApp Floating Button */}
      <motion.a 
         href="https://wa.me/5561992030064?text=Olá,%20vim%20pelo%20site%20e%20quero%20conhecer%20o%20aplicativo!"
         target="_blank"
         rel="noopener noreferrer"
         initial={{ scale: 0, opacity: 0 }}
         animate={{ scale: [1, 1.1, 1], opacity: 1 }}
         transition={{ 
           scale: { repeat: Infinity, duration: 2 },
           default: { delay: 1, type: "spring" }
         }}
         whileHover={{ scale: 1.2 }}
         className="fixed bottom-10 right-10 z-[100] bg-[#25D366] p-4 rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.5)] flex items-center justify-center"
      >
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
          alt="WhatsApp" 
          className="w-10 h-10"
        />
      </motion.a>
    </main>
  )
}
