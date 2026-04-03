"use client"
import { motion } from "framer-motion"
import { Play, Sparkles } from "lucide-react"

export const Hero = () => {
    return (
        <section id="hero" className="relative min-h-[90vh] flex items-center justify-center pt-10 pb-40 overflow-hidden bg-dark">
            {/* High Quality Local Video Background */}
            <div className="absolute inset-0 z-0 overflow-hidden bg-dark pointer-events-none">
                {/* Fallback/Loading Image - CINEMATIC SHIP */}
                <img 
                    src="/cinematic_sailing_ship_ocean_1775177231007.png" 
                    alt="Loading Background" 
                    className="absolute inset-0 w-full h-full object-cover opacity-30 z-0 scale-110"
                />

                {/* Overlay for readability and seamless merge */}
                <div className="absolute inset-0 bg-gradient-to-b from-darker via-darker/60 to-darker z-20" />
                
                <video 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    className="absolute inset-0 w-full h-full object-cover opacity-80"
                >
                    <source src="/hero-video.mp4" type="video/mp4" />
                </video>
            </div>

            <div className="container relative z-20 px-6 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                      className="max-w-xl"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 text-primary font-black text-xs tracking-[0.2em] uppercase">
                            <Sparkles size={14} />
                            SITE OFICIAL • SMART HUB PLAY TV
                        </div>
                        <h1 className="text-4xl sm:text-5xl md:text-8xl font-black mb-10 leading-[1.2] italic tracking-tighter text-glow drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] overflow-visible">
                            <span className="block text-white uppercase">O MELHOR</span>
                            <span className="gradient-text uppercase block pb-2">DA TV</span>
                            <span className="block text-xl md:text-3xl font-bold tracking-widest text-gray-400 mt-8 not-italic uppercase opacity-80">EM UM SÓ LUGAR</span>
                        </h1>
                        
                        <div className="space-y-6 mb-12">
                            <div className="flex items-center gap-4">
                                <div className="w-1.5 h-10 bg-primary shadow-[0_0_15px_rgba(124,58,237,0.5)]" />
                                <p className="text-white font-black uppercase text-sm tracking-widest leading-none">TV VIA INTERNET EM HD • FULL HD & 4K</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-1.5 h-10 bg-accent shadow-[0_0_15px_rgba(255,0,255,0.5)]" />
                                <p className="text-white font-black uppercase text-sm tracking-widest leading-none">+15.000 Filmes • Séries • Lançamentos</p>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-6">
                            <motion.a 
                              href="https://wa.me/5561992030064?text=Olá,%20vim%20pelo%20site%20e%20quero%20conhecer%20o%20aplicativo!"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              animate={{ 
                                scale: [1, 1.05, 1],
                                boxShadow: ["0 0 20px rgba(124,58,237,0.3)", "0 0 50px rgba(124,58,237,0.6)", "0 0 20px rgba(124,58,237,0.3)"]
                              }}
                              transition={{ 
                                duration: 2, 
                                repeat: Infinity,
                                ease: "easeInOut"
                              }}
                              className="bg-primary hover:bg-primary-dark group relative overflow-hidden text-white font-black py-7 px-14 rounded-full text-xl flex items-center justify-center gap-4 shadow-[0_20px_60px_rgba(124,58,237,0.5)] transition-all"
                            >
                                <span className="relative z-10">QUERO TESTAR AGORA!</span>
                                <Play size={24} className="fill-white relative z-10" />
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                            </motion.a>
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2 }}
                        className="relative hidden lg:block"
                    >
                         <div className="relative group">
                            <div className="absolute -inset-2 bg-gradient-to-r from-primary to-accent rounded-[40px] blur opacity-30 group-hover:opacity-60 transition duration-1000" />
                            <div className="relative glass p-2 rounded-[40px] border-white/10 shadow-[0_50px_100px_rgba(0,0,0,0.8)] overflow-hidden">
                                 <img 
                                   src="/hero-banner.jpg" 
                                   alt="SMART HUB PLAY TV VIP" 
                                   className="w-full h-auto object-cover rounded-[35px]"
                                 />
                            </div>
                            
                         </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
            >
                <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40 italic">SCROLL PARA VER MAIS</span>
            </motion.div>
        </section>
    )
}
