"use client"
import { motion } from "framer-motion"

const COMPARISON_DATA = [
    { name: "NETFLIX 4K", price: "55,90" },
    { name: "DISNEY+ PREMIUM", price: "43,90" },
    { name: "PRIME VIDEO", price: "19,90" },
    { name: "GLOBOPLAY + CANAIS", price: "42,90" },
    { name: "PREMIERE", price: "59,90" }
]

export const Economy = () => {
    return (
        <section className="py-32 bg-dark relative border-y border-white/5 overflow-hidden">
             <div className="container mx-auto px-6">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 30 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="glass lg:p-12 p-8 rounded-[40px] flex flex-col md:flex-row items-center gap-16 max-w-6xl mx-auto shadow-[0_40px_80px_rgba(0,0,0,0.5)] border-white/5 relative"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[120px] -z-10" />
                    
                    <div className="md:w-1/2 text-left">
                        <h4 className="text-4xl font-black italic uppercase mb-6 leading-[1.2] text-glow overflow-visible">ECONOMIA <span className="gradient-text italic uppercase pr-12 pb-2 inline-block">TOTAL</span></h4>
                        <p className="text-gray-400 mb-8 leading-loose text-lg">
                            Pare de rasgar dinheiro com dezenas de faturas mensais. O Smart Hub Play oferece todo o conteúdo premium por uma fração do preço oficial em 2026.
                        </p>
                        
                        <div className="space-y-4 mb-10 w-full overflow-hidden">
                            {COMPARISON_DATA.map((item, i) => (
                                <div key={i} className="flex justify-between items-center bg-white/5 px-6 py-3 rounded-2xl border border-white/5">
                                     <span className="text-xs font-black uppercase tracking-widest text-gray-400 italic truncate mr-4">{item.name}</span>
                                     <span className="text-red-500 font-bold italic shrink-0">R$ {item.price}</span>
                                 </div>
                            ))}
                        </div>

                        <motion.a 
                          href="https://wa.me/5561992030064?text=vim%20do%20site%20e%20quero%20testar%20o%20aplicativo!"
                          whileTap={{ scale: 0.95 }}
                          whileHover={{ scale: 1.02 }}
                          animate={{ scale: [1, 1.03, 1] }}
                          transition={{ repeat: Infinity, duration: 3 }}
                          className="w-full bg-primary py-5 rounded-2xl font-black text-center text-xl inline-block uppercase italic tracking-wider transition-all shadow-[0_0_30px_rgba(124,58,237,0.4)]"
                        >
                             TESTAR AGORA
                        </motion.a>
                    </div>

                    <div className="md:w-1/2 w-full">
                         <div className="relative p-10 rounded-[50px] bg-gradient-to-br from-primary/20 via-primary/5 to-transparent border border-primary/20 overflow-hidden group">
                              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent opacity-50 animate-pulse-slow" />
                              
                              <div className="relative z-10 text-center">
                                   <div className="text-[10px] md:text-sm font-black text-primary uppercase tracking-widest md:tracking-[0.6em] mb-8 block overflow-visible">RESUMO DA RENOVAÇÃO</div>
                                   <div className="space-y-4 md:space-y-8 overflow-visible">
                                        <div className="flex flex-col">
                                            <span className="text-gray-500 text-[10px] font-black uppercase mb-1">CUSTO TOTAL SEPARADO</span>
                                            <span className="text-gray-400 text-2xl font-black italic line-through decoration-red-500/50 decoration-4">R$ 222,50</span>
                                        </div>
                                        <div className="py-6 md:py-8 px-2 bg-dark/40 rounded-[30px] border border-primary/30 shadow-[0_0_60_rgba(124,58,237,0.2)] flex flex-col items-center justify-center overflow-visible">
                                            <span className="text-white text-[10px] font-black uppercase mb-2 block tracking-widest">SMART HUB PLAY VIP</span>
                                            <span className="text-5xl md:text-8xl font-black italic uppercase tracking-tighter gradient-text leading-none text-glow px-4 md:px-16 pb-2 md:pb-4 inline-block">R$ 30</span>
                                        </div>
                                        <div className="pt-4 overflow-visible">
                                            <span className="text-green-500 text-[10px] font-black uppercase tracking-widest block mb-1 animate-bounce uppercase">VOCÊ ECONOMIZA</span>
                                            <span className="text-2xl md:text-5xl font-black italic uppercase tracking-tighter text-white block px-4 overflow-visible">R$ 192,50 <span className="text-green-500">/ MÊS</span></span>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
                </motion.div>
             </div>
        </section>
    )
}
