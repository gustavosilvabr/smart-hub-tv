"use client"
import { motion } from "framer-motion"
import { ShieldCheck, RotateCcw, Headset, Star } from "lucide-react"

const PAYMENTS = [
  { name: "PIX", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlV045p_LH4FozXQPsuP09GQzOmQkG_3T8CA&s" },
  { name: "VISA", url: "https://static.vecteezy.com/system/resources/thumbnails/020/975/570/small/visa-logo-visa-icon-transparent-free-png.png" },
  { name: "MASTERCARD", url: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Mastercard_2019_logo.svg" },
  { name: "ELO", url: "https://upload.wikimedia.org/wikipedia/commons/5/51/Elo_logo.png" },
  { name: "BOLETO", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCEsGnxPLF-bdtE3F4cSAftI4nuL-tc6QkgA&s" }
]

export const TrustSeals = () => {
    return (
        <section className="py-24 bg-darker relative overflow-hidden">
             <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center text-left">
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                      className="w-full"
                    >
                         <div className="flex flex-col gap-6 mb-10 group">
                             <div className="flex items-center gap-4">
                                  <div className="flex -space-x-3">
                                      {[1,2,3,4,5].map((idx) => (
                                          <div key={idx} className="w-10 h-10 rounded-full border-2 border-darker bg-dark flex items-center justify-center overflow-hidden">
                                              <img src={`https://i.pravatar.cc/100?img=${idx + 10}`} alt="User" />
                                          </div>
                                      ))}
                                      <div className="w-10 h-10 rounded-full border-2 border-darker bg-primary flex items-center justify-center text-[10px] font-black">+</div>
                                  </div>
                                  <span className="text-yellow-500 flex gap-0.5">
                                      {[1,2,3,4,5].map((s) => <Star key={s} size={14} fill="currentColor" />)}
                                  </span>
                             </div>

                             <div>
                                 <h3 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter leading-none mb-4 overflow-visible">
                                      RECOMENDADO POR <span className="gradient-text uppercase pr-12 pb-2 inline-block">2.000+ CLIENTES</span>
                                 </h3>
                                 <p className="font-bold text-gray-200 uppercase tracking-widest text-xs md:text-sm">SUA SATISFAÇÃO É NOSSA ÚNICA PRIORIDADE EM 2026!</p>
                             </div>
                         </div>
                         <p className="text-gray-400 mb-10 leading-relaxed max-w-xl text-lg md:text-xl italic">
                             Junte-se a maior comunidade de entretenimento do Brasil. Estabilidade absoluta, suporte VIP e a melhor grade do mercado.
                         </p>
                         
                         <div className="grid grid-cols-2 gap-6 max-w-sm">
                              <div className="glass p-4 rounded-2xl border-white/10 flex items-center gap-3">
                                   <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">
                                        <ShieldCheck size={20} />
                                   </div>
                                   <div className="text-[10px] font-black text-white leading-tight uppercase italic">TRANSAÇÃO<br/>PROTEGIDA</div>
                              </div>
                              <div className="glass p-4 rounded-2xl border-white/10 flex items-center gap-3">
                                   <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                        <Headset size={20} />
                                   </div>
                                   <div className="text-[10px] font-black text-white leading-tight uppercase italic">SUPORTE<br/>24 HORAS</div>
                              </div>
                         </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2 }}
                      className="glass p-8 md:p-16 rounded-[60px] relative overflow-hidden border-primary/20 shadow-[0_50px_100px_rgba(0,0,0,0.8)] w-full text-center"
                    >
                         <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent -z-10" />
                         
                         <div className="flex flex-col items-center gap-12">
                              <div className="w-full">
                                  <div className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary font-black text-[10px] tracking-[0.3em] uppercase mb-8">SEGURANÇA VERIFICADA</div>
                                  <h4 className="text-2xl md:text-3xl font-black italic uppercase mb-10 tracking-tight">PAGAMENTO <span className="text-primary uppercase">100% BLINDADO</span></h4>
                                  
                                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-8 md:gap-12 items-center justify-center w-full mb-12">
                                       {PAYMENTS.map((pay, i) => (
                                           <div key={i} className="group">
                                               <img 
                                                  src={pay.url} 
                                                  alt={pay.name} 
                                                  className="h-8 md:h-12 w-auto object-contain mx-auto brightness-100 group-hover:scale-110 transition-transform" 
                                               />
                                           </div>
                                       ))}
                                  </div>
                              </div>
                              
                              <div className="h-px w-full bg-white/5" />

                              <div className="flex flex-wrap items-center justify-center gap-12 pt-4">
                                   <div className="flex flex-col items-center gap-4">
                                        <ShieldCheck size={64} className="text-green-500 drop-shadow-[0_0_20px_rgba(34,197,94,0.4)]" />
                                        <span className="text-[11px] font-black uppercase tracking-[0.2em] text-white">GOOGLE SAFE<br/>BROWSING</span>
                                   </div>
                                   <div className="flex flex-col items-center gap-4">
                                        <ShieldCheck size={64} className="text-primary drop-shadow-[0_0_20px_rgba(124,58,237,0.4)]" />
                                        <span className="text-[11px] font-black uppercase tracking-[0.2em] text-white">SITE TOTALMENTE<br/>CRIPTOGRAFADO</span>
                                   </div>
                              </div>
                         </div>
                    </motion.div>
                </div>
             </div>
        </section>
    )
}
