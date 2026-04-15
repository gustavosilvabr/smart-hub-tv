"use client"
import { motion } from "framer-motion"
import { Check, Flame, Star, ShieldCheck, Heart } from "lucide-react"

const PLAN_DATA = [
    {
        name: "Mensal",
        price: "30",
        regularPrice: "30",
        period: "Mês",
        highlight: false,
        icon: <Star className="text-secondary" />
    },
    {
        name: "Trimestral",
        price: "85",
        regularPrice: "90",
        period: "3 Meses",
        highlight: false,
        icon: <ShieldCheck className="text-primary" />
    },
    {
        name: "Semestral",
        price: "165",
        regularPrice: "180",
        period: "6 Meses",
        highlight: true,
        icon: <Flame className="animate-pulse text-orange-500" />
    },
    {
        name: "Anual",
        price: "300",
        regularPrice: "360",
        period: "12 Meses",
        highlight: false,
        icon: <Heart className="text-red-500" />
    }
]

export const Plans = () => {
    return (
        <section id="plans" className="py-32 bg-darker relative overflow-hidden">
             {/* Dynamic Background Blurs */}
             <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/10 blur-[150px] animate-pulse-slow -z-10" />
             <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-secondary/10 blur-[150px] animate-pulse-slow -z-10" />

            <div className="container mx-auto px-6">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className="text-center mb-20 max-w-3xl mx-auto"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 text-primary font-black text-[10px] tracking-[0.3em] uppercase">
                        NOSSAS OFERTAS
                    </div>
                    <h2 className="text-5xl md:text-8xl font-black italic tracking-tighter uppercase mb-6 text-glow leading-none overflow-visible">
                        PLANOS <span className="gradient-text pr-12 pb-2 inline-block drop-shadow-[0_10px_30px_rgba(124,58,237,0.4)]">INVENCÍVEIS</span>
                    </h2>
                    <p className="text-gray-400 text-lg md:text-xl font-medium italic">
                        Qualidade máxima com o melhor custo-benefício de 2026. Escolha agora!
                    </p>
                    
                    <motion.div 
                      animate={{ scale: [1, 1.02, 1] }}
                      transition={{ repeat: Infinity, duration: 3 }}
                      className="mt-10 glass py-5 px-10 rounded-[40px] inline-flex items-center gap-4 border-orange-500/30 bg-orange-500/10 shadow-[0_0_50px_rgba(249,115,22,0.2)]"
                    >
                         <Flame className="text-orange-500 animate-bounce" size={32} />
                         <span className="text-orange-500 font-black text-xl md:text-2xl italic uppercase tracking-tighter">BÔNUS: 2 TELAS POR APENAS R$50!</span>
                    </motion.div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10">
                    {PLAN_DATA.map((plan, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 50 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1, duration: 1.2, ease: "easeOut" }}
                          whileHover={{ scale: 1.05, y: -20 }}
                          className={`relative glass p-10 rounded-[50px] overflow-hidden border-2 flex flex-col items-center text-center transition-all duration-500 ${plan.highlight ? 'border-primary shadow-[0_40px_100px_rgba(124,58,237,0.4)] bg-primary/5' : 'border-white/5 hover:border-white/20'}`}
                        >
                            {plan.highlight && (
                                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-primary to-accent py-2 uppercase text-[12px] font-black tracking-widest text-center text-white shadow-xl z-10">
                                    O MAIS VENDIDO 🔥
                                </div>
                            )}
                            
                            {/* Inner Glow Effect */}
                            <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 blur-[80px] -z-10 ${plan.highlight ? 'bg-primary/30' : 'bg-white/5'}`} />

                            <div className={`mb-8 p-6 rounded-3xl ${plan.highlight ? 'bg-primary shadow-[0_10px_30px_rgba(124,58,237,0.5)]' : 'bg-white/5'}`}>
                                {plan.icon}
                            </div>
                            
                            <h3 className="text-3xl font-black italic uppercase mb-2 tracking-tighter">{plan.name}</h3>
                            <p className="text-gray-500 text-xs font-black uppercase tracking-widest mb-8">{plan.period} DE ACESSO VIP</p>

                            <div className="mb-10 relative">
                                {plan.regularPrice !== plan.price && (
                                   <div className="text-gray-600 line-through text-xl font-bold mb-1 italic opacity-50">R${plan.regularPrice}</div>
                                )}
                                <div className="flex items-baseline justify-center gap-2">
                                    <span className="text-3xl font-bold text-gray-400">R$</span>
                                    <span className="text-7xl font-black gradient-text tracking-tighter drop-shadow-sm">{plan.price}</span>
                                </div>
                            </div>

                            <ul className="space-y-5 mb-12 text-left w-full border-t border-white/5 pt-10 flex-grow">
                                <li className="flex items-center gap-4 text-sm font-bold text-gray-300">
                                    <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                                        <Check size={12} className="text-green-500" />
                                    </div>
                                    Canais Full HD / 4K
                                </li>
                                <li className="flex items-center gap-4 text-sm font-bold text-gray-300">
                                    <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                                        <Check size={12} className="text-green-500" />
                                    </div>
                                    Milhares de Filmes & Séries
                                </li>
                                <li className="flex items-center gap-4 text-sm font-bold text-gray-300">
                                    <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                                        <Check size={12} className="text-green-500" />
                                    </div>
                                    Suporte 24h WhatsApp
                                </li>
                                <li className="flex items-center gap-4 text-sm font-bold text-gray-300">
                                    <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                                        <Check size={12} className="text-green-500" />
                                    </div>
                                    Antishock (Sem Travas)
                                </li>
                            </ul>

                            <div className="w-full mt-auto">
                                <motion.a 
                                  href={`https://wa.me/5561992030064?text=vim%20do%20site%20e%20quero%20testar%20o%20aplicativo%20antes%20de%20pagar%20os%20R$${plan.price},00%20do%20plano%20${plan.name}`}
                                  whileTap={{ scale: 0.95 }}
                                  animate={{ 
                                    scale: plan.highlight ? [1, 1.05, 1] : [1, 1.02, 1],
                                    boxShadow: plan.highlight ? [
                                      "0 0 20px rgba(124,58,237,0.4)", 
                                      "0 0 40px rgba(124,58,237,0.7)", 
                                      "0 0 20px rgba(124,58,237,0.4)"
                                    ] : "none"
                                  }}
                                  transition={{ repeat: Infinity, duration: 2 }}
                                  className={`w-full py-6 rounded-2xl font-black text-xl transition-all shadow-xl uppercase italic tracking-tighter block text-center ${plan.highlight ? 'bg-primary hover:bg-primary-dark text-white scale-105 shadow-primary/30' : 'bg-white/10 hover:bg-white/20 text-white'}`}
                                >
                                    TESTAR AGORA
                                </motion.a>
                            </div>
                        </motion.div>
                    ))}
                </div>
                
                <div className="mt-24 text-center">
                    <div className="glass px-10 py-5 rounded-full inline-block border-white/5">
                        <p className="text-gray-500 text-sm font-bold tracking-widest uppercase">
                            Chave PIX: <span className="text-white ml-2">smart.hub.pix@gmail.com</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
