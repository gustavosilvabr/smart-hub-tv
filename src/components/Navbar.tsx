"use client"
import { motion } from "framer-motion"
import { Tv } from "lucide-react"

export const Navbar = () => {
  return (
    <nav className="relative z-[100]">
      <div className="w-full glass border-b border-white/5 px-6 md:px-16 py-1 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center"
        >
          <img 
            src="/logo.png" 
            alt="Smart Hub Play TV Official Logo" 
            className="h-14 md:h-48 w-auto object-contain brightness-125 drop-shadow-[0_0_20px_rgba(124,58,237,0.6)]"
          />
        </motion.div>
        
        <div className="hidden lg:flex items-center gap-10 font-black italic uppercase text-[11px] tracking-[0.2em] text-white">
            <a href="#hero" className="hover:text-primary transition-all hover:scale-110">Início</a>
            <a href="#catalog" className="hover:text-primary transition-all hover:scale-110">Catálogo</a>
            <a href="#app-demo" className="hover:text-primary transition-all hover:scale-110">App Demo</a>
            <a href="#plans" className="hover:text-primary transition-all hover:scale-110">Planos</a>
            <a href="#faq" className="hover:text-primary transition-all hover:scale-110">Dúvidas</a>
        </div>

        <motion.a 
          href="https://wa.me/5561992030064"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-6 rounded-full text-sm shadow-[0_0_20px_rgba(124,58,237,0.5)] transition-all"
        >
          ASSINAR AGORA
        </motion.a>
      </div>
    </nav>
  )
}
