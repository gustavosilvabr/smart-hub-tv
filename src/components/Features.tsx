"use client"
import { motion } from "framer-motion"

const DEVICE_DATA = [
  { name: "SMART TV", img: "https://images.unsplash.com/photo-1593784991095-a205029471b6?auto=format&fit=crop&q=80&w=400" },
  { name: "TV BOX", img: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=400" },
  { name: "CELULAR", img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=400" },
  { name: "NOTEBOOK", img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80&w=400" },
  { name: "VIDEO GAMES", img: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?auto=format&fit=crop&q=80&w=400" },
  { name: "TABLET", img: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=400" }
]

const BRANDS = [
    "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/b/bf/LG_logo_%282015%29.svg",
    "https://upload.wikimedia.org/wikipedia/commons/e/ec/Roku_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/2/21/Logo_Globoplay.png",
    "https://upload.wikimedia.org/wikipedia/commons/7/7a/TNT_Logo_2016.svg",
    "https://upload.wikimedia.org/wikipedia/commons/b/bd/Premiere_logo_%282019%29.png"
]

const COMPARISON_DATA = [
    { name: "NETFLIX 4K", price: "55,90" },
    { name: "DISNEY+ PREMIUM", price: "43,90" },
    { name: "PRIME VIDEO", price: "19,90" },
    { name: "GLOBOPLAY + CANAIS", price: "42,90" },
    { name: "PREMIERE", price: "59,90" }
]

export const Features = () => {
    return (
        <section id="devices" className="py-32 bg-dark relative border-y border-white/5 overflow-hidden">
             <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-5xl font-black italic tracking-tighter uppercase mb-4 text-glow leading-[1.2] overflow-visible">
                    ACESSE DE <span className="gradient-text pr-12 pb-2 inline-block">QUALQUER LUGAR</span>
                </h2>
                <p className="text-gray-400 mb-16 max-w-2xl mx-auto italic font-medium">Assista em qualquer aparelho favorito em 2026, onde e quando quiser!</p>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-20">
                    {DEVICE_DATA.map((device, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1, duration: 0.5 }}
                          whileHover={{ y: -10 }}
                          className="group relative aspect-square rounded-3xl overflow-hidden border border-white/5 shadow-2xl shadow-primary/5"
                        >
                            <img 
                                src={device.img} 
                                alt={device.name} 
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-darker/90 via-transparent to-transparent flex flex-col justify-end p-4">
                                <span className="font-black text-[10px] uppercase tracking-widest text-white italic">{device.name}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="flex flex-wrap items-center justify-center gap-12 py-10 border-y border-white/5 mb-24 grayscale-0 opacity-100">
                    {BRANDS.map((brand, i) => (
                        <img key={i} src={brand} alt="brand" className="h-10 md:h-12 w-auto object-contain" />
                    ))}
                </div>
                
                <div className="glass lg:p-12 p-8 rounded-[40px] flex flex-col md:flex-row items-center gap-16 max-w-6xl mx-auto shadow-[0_40px_80px_rgba(0,0,0,0.5)] border-white/5 relative">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[120px] -z-10" />
                    
                    <div className="md:w-1/2 text-left">
                        <h4 className="text-4xl font-black italic uppercase mb-6 leading-[1.2] overflow-visible">ECONOMIA <span className="text-primary italic uppercase pr-12 pb-2 inline-block">TOTAL</span></h4>
                        <p className="text-gray-400 mb-8 leading-loose text-lg">
                            Pare de rasgar dinheiro com dezenas de faturas mensais. O Smart Hub Play oferece todo o conteúdo premium por uma fração do preço oficial.
                        </p>
                        
                        <div className="space-y-4 mb-10 w-full overflow-hidden text-clip">
                            {COMPARISON_DATA.map((item, i) => (
                                <div key={i} className="flex justify-between items-center bg-white/5 px-6 py-3 rounded-2xl border border-white/5">
                                     <span className="text-xs font-black uppercase tracking-widest text-gray-400 italic truncate mr-4">{item.name}</span>
                                     <span className="text-red-500 font-bold italic shrink-0">R$ {item.price}</span>
                                </div>
                            ))}
                        </div>

                        <motion.a 
                          href="https://wa.me/5561992030064"
                          whileTap={{ scale: 0.95 }}
                          className="w-full bg-primary py-5 rounded-2xl font-black text-center text-xl inline-block uppercase italic tracking-wider transition-all hover:scale-[1.02] shadow-[0_0_30px_rgba(124,58,237,0.4)]"
                        >
                             QUERO ECONOMIZAR AGORA!
                        </motion.a>
                    </div>

                    <div className="md:w-1/2 w-full">
                         <div className="relative p-10 rounded-[50px] bg-gradient-to-br from-primary/20 via-primary/5 to-transparent border border-primary/20 overflow-hidden group">
                              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent opacity-50 animate-pulse-slow" />
                              
                              <div className="relative z-10 text-center">
                                   <div className="text-[10px] md:text-sm font-black text-primary uppercase tracking-widest md:tracking-[0.6em] mb-8 block overflow-visible">RESUMO DA RENOVAÇÃO</div>
                                   <div className="space-y-4 md:space-y-8 overflow-visible">
                                        <div className="flex flex-col overflow-visible">
                                            <span className="text-gray-500 text-[10px] font-black uppercase mb-1">CUSTO TOTAL SEPARADO</span>
                                            <span className="text-gray-400 text-2xl font-black italic line-through decoration-red-500/50 decoration-4">R$ 222,50</span>
                                        </div>
                                        <div className="py-6 md:py-8 bg-dark/40 rounded-[30px] border border-primary/30 shadow-[0_0_60px_rgba(124,58,237,0.2)] lg:overflow-visible flex flex-col items-center justify-center overflow-visible">
                                            <span className="text-white text-[10px] font-black uppercase mb-2 block tracking-widest">SMART HUB PLAY VIP</span>
                                            <span className="text-5xl md:text-8xl font-black italic uppercase tracking-tighter gradient-text leading-none text-glow px-4 md:px-16 pb-2 md:pb-4 inline-block">R$ 30</span>
                                        </div>
                                        <div className="pt-4 overflow-visible">
                                            <span className="text-green-500 text-[10px] md:text-sm font-black uppercase tracking-widest block mb-1 animate-bounce">VOCÊ ECONOMIZA</span>
                                            <span className="text-2xl md:text-5xl font-black italic uppercase tracking-tighter text-white block px-4 overflow-visible">R$ 192,50 <span className="text-green-500">/ MÊS</span></span>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
                </div>
             </div>
        </section>
    )
}
