"use client"
import { motion } from "framer-motion"

export const WhatsAppButton = () => (
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
        aria-label="Fale conosco no WhatsApp"
        className="fixed bottom-4 right-4 md:bottom-10 md:right-10 z-[100] bg-[#25D366] p-3 md:p-4 rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.5)] flex items-center justify-center transition-all duration-300"
    >
        <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp"
            loading="lazy"
            decoding="async"
            width={32}
            height={32}
            className="w-8 h-8 md:w-10 md:h-10"
        />
    </motion.a>
)
