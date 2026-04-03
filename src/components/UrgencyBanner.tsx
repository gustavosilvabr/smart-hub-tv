"use client"
import { motion } from "framer-motion"
import { AlertCircle } from "lucide-react"

export const UrgencyBanner = () => {
  return (
    <div className="bg-primary py-2 px-4 text-center overflow-hidden relative">
      <motion.div 
        initial={{ x: "100%" }}
        animate={{ x: "-100%" }}
        transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
        className="flex items-center justify-center gap-4 whitespace-nowrap"
      >
        <div className="flex items-center gap-2 text-white font-bold text-sm uppercase tracking-widest">
          <AlertCircle size={16} />
          PROMOÇÃO LIMITADA: 2 TELAS POR APENAS R$50/MÊS! 🔥 ÚLTIMAS VAGAS COM DESCONTO! 🔥 GARANTA SUA RENOVAÇÃO AGORA! 🔥
        </div>
      </motion.div>
    </div>
  )
}
