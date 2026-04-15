"use client"
import { motion } from "framer-motion"
import { Play, Volume2 } from "lucide-react"
import { useRef, useState } from "react"

export const AppShowcase = () => {
    const videoRef = useRef<HTMLVideoElement>(null)
    const [isPlaying, setIsPlaying] = useState(false)

    const togglePlay = () => {
        if (videoRef.current) {
            if (videoRef.current.paused) {
                videoRef.current.play()
                videoRef.current.muted = false
                setIsPlaying(true)
            } else {
                videoRef.current.pause()
                setIsPlaying(false)
            }
        }
    }

    return (
        <section id="app-demo" className="py-24 bg-dark relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[120px] -z-10" />

            <div className="container mx-auto px-6 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-black italic tracking-tighter uppercase mb-4 text-glow leading-[1.2] overflow-visible">
                        CONHEÇA NOSSO <span className="gradient-text pb-2 inline-block">APLICATIVO</span>
                    </h2>
                    <p className="text-gray-400 font-medium italic">APERTE NO VÍDEO ABAIXO PARA VER POR DENTRO!</p>
                </motion.div>

                <div className="max-w-4xl mx-auto relative group">
                    {/* TV FRAME DESIGN */}
                    <div className="relative glass p-2 md:p-6 rounded-[40px] border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.8)] overflow-hidden">
                        <div className="relative aspect-video rounded-[30px] overflow-hidden bg-black border border-white/5">
                            <video 
                                ref={videoRef}
                                className="w-full h-full object-cover"
                                playsInline
                                loop
                            >
                                <source src="/app-demo.mp4" type="video/mp4" />
                            </video>

                            {/* PLAY BUTTON OVERLAY */}
                            {!isPlaying && (
                                <div 
                                    onClick={togglePlay}
                                    className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 cursor-pointer group-hover:bg-black/40 transition-all z-20"
                                >
                                    <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center shadow-[0_0_30px_rgba(124,58,237,0.6)] animate-pulse-slow">
                                        <Play size={40} className="text-white fill-white ml-2" />
                                    </div>
                                    <span className="mt-6 text-white font-black italic uppercase tracking-[0.2em] text-[10px] md:text-sm animate-bounce">APERTE PARA CONHECER</span>
                                    <div className="mt-2 flex items-center gap-2 text-primary/80 font-bold text-[10px] uppercase">
                                        <Volume2 size={12} /> ÁUDIO ATIVADO AO CLICAR
                                    </div>
                                </div>
                            )}

                            {/* Small Controls when playing */}
                            {isPlaying && (
                                <button 
                                    onClick={togglePlay}
                                    className="absolute bottom-6 right-6 p-3 rounded-full glass border-white/10 text-white z-30 opacity-60 hover:opacity-100"
                                >
                                    PIXAR / PAUSAR
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 blur-3xl -z-10" />
                    <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent/10 blur-3xl -z-10" />
                </div>
                
                <div className="mt-16">
                     <motion.a 
                       href="https://wa.me/5561992030064?text=vim%20do%20site%20e%20quero%20testar%20o%20aplicativo!"
                       whileHover={{ scale: 1.05 }}
                       whileTap={{ scale: 0.95 }}
                       animate={{ scale: [1, 1.03, 1] }}
                       transition={{ repeat: Infinity, duration: 2.5 }}
                       className="bg-primary hover:bg-primary-dark text-white font-black py-4 md:py-6 px-8 md:px-12 rounded-full text-base md:text-lg shadow-[0_20px_50px_rgba(124,58,237,0.4)] transition-all uppercase italic block w-full sm:w-auto relative z-10"
                     >
                        TESTAR AGORA
                     </motion.a>
                </div>
            </div>
        </section>
    )
}
