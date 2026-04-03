"use client"
import { motion } from "framer-motion"
import { Star } from "lucide-react"

const REVIEWS = [
  { name: "João Pedro S.", text: "Melhor estabilidade que já testei. Assisto os jogos do meu time em 4K sem nenhum travamento. Recomendo demais!", stars: 5 },
  { name: "Maria Clara R.", text: "O suporte pelo WhatsApp é muito rápido. Tive uma dúvida na instalação e resolveram em 2 minutos. Show!", stars: 5 },
  { name: "Carlos Eduardo M.", text: "Economia absurda. Cancelei todos os outros streamings e agora tenho tudo em um lugar só por R$30. Sensacional.", stars: 5 },
  { name: "Amanda L.", text: "Filmes que saíram agora no cinema já estão no catálogo. A qualidade da imagem é impressionante.", stars: 5 }
]

export const Testimonials = () => {
    return (
        <section className="py-24 bg-dark relative overflow-hidden">
            {/* Background Light */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-primary/5 blur-[160px] -z-10" />

            <div className="container mx-auto px-6 text-center">
                <div className="mb-20">
                     <h2 className="text-3xl md:text-5xl font-black italic tracking-tighter uppercase mb-4 text-glow leading-[1.2] overflow-visible">
                        PROVA REAL DE <span className="gradient-text pr-12 pb-2 inline-block">QUEM JÁ ASSINA</span>
                    </h2>
                    <p className="text-gray-400 font-medium">Veja as conversas de quem abandonou as faturas caras em 2026.</p>
                </div>

                {/* PRINTS GALLERY */}
                <div className="relative mb-24 max-w-5xl mx-auto">
                     <div className="glass p-2 md:p-10 rounded-[60px] border-white/5 shadow-[0_50px_100px_rgba(0,0,0,0.6)] group">
                          {/* Image mapping for the generated prints */}
                          <div className="relative overflow-hidden rounded-[50px] aspect-[16/9] md:aspect-[21/9]">
                              <img 
                                src="/whatsapp_testimonials_prints_1775129953126.png" 
                                alt="Prints de Clientes" 
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-transparent to-transparent flex flex-col justify-end p-10">
                                   <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-primary/20 backdrop-blur-md w-fit border border-primary/30">
                                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                        <span className="text-[10px] font-black uppercase tracking-[0.4em]">100% REAIS • VIA WHATSAPP</span>
                                   </div>
                              </div>
                          </div>
                     </div>
                     {/* Decorative blur */}
                     <div className="absolute -inset-10 bg-primary/5 blur-3xl -z-10" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {REVIEWS.map((review, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 }}
                          className="glass p-8 rounded-3xl border border-white/5 flex flex-col items-start text-left shadow-2xl"
                        >
                            <div className="flex gap-1 mb-4 text-orange-500">
                                {[...Array(review.stars)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                            </div>
                            <p className="text-gray-300 italic mb-6 leading-relaxed">"{review.text}"</p>
                            <div className="mt-auto">
                                <span className="font-black text-white italic uppercase tracking-widest text-xs">- {review.name}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 flex items-center justify-center gap-12 opacity-40 grayscale group hover:grayscale-0 hover:opacity-100 transition-all duration-700">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/3/3a/Reclame_Aqui_logo.svg" alt="Reclame Aqui" className="h-4 w-auto" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Google_Play_2022_logo.svg" alt="Google Play" className="h-6 w-auto" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple" className="h-6 w-auto" />
                </div>
            </div>
        </section>
    )
}
