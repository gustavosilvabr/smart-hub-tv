"use client"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus, HelpCircle } from "lucide-react"
import { useState } from "react"

const FAQ_DATA = [
    {
        q: "PRECISO DE ANTENA OU CABOS PARA ASSISTIR?",
        a: "Não! O Smart Hub Play é 100% via internet. Basta ter uma conexão estável para assistir em HD, Full HD ou 4K em qualquer lugar."
    },
    {
        q: "EM QUAIS DISPOSITIVOS POSSO USAR?",
        a: "Você pode usar em Smart TVs (Samsung, LG, Android TV), TV Box, Celulares (Android/iOS), Computadores e Tablets. Temos aplicativos próprios e suporte para os principais do mercado."
    },
    {
        q: "TEM FIDELIDADE OU MULTA POR CANCELAMENTO?",
        a: "De jeito nenhum! Nossos planos são pré-pagos. Você usa pelo período que contratou e renova apenas se quiser. Sem contratos chatos ou multas escondidas."
    },
    {
        q: "RECEBO O ACESSO NA HORA?",
        a: "Sim! Após a confirmação do pagamento (PIX cai na hora), nossa equipe envia seus dados de acesso e o tutorial de instalação imediatamente pelo WhatsApp."
    },
    {
        q: "O FUTEBOL TRAVA NOS JOGOS IMPORTANTES?",
        a: "Nosso diferencial é a tecnologia Antishock com servidores de alta performance. Diferente de outros serviços, investimos pesado em estabilidade para que você não perca nenhum lance do seu time."
    }
]

export const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null)

    return (
        <section id="faq" className="py-24 bg-dark relative overflow-hidden border-t border-white/5">
            <div className="container mx-auto px-6 max-w-4xl">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 text-primary font-black text-[10px] tracking-[0.2em] uppercase">
                        <HelpCircle size={14} />
                        DÚVIDAS FREQUENTES
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter leading-[1.2] overflow-visible">
                        TIRE SUAS <span className="gradient-text uppercase pr-12 pb-2 inline-block">DÚVIDAS</span>
                    </h2>
                </motion.div>

                <div className="space-y-4">
                    {FAQ_DATA.map((item, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 }}
                          className="glass rounded-3xl border-white/5 overflow-hidden transition-all hover:border-primary/30"
                        >
                            <button
                              onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                              className="w-full px-8 py-6 flex items-center justify-between text-left group"
                            >
                                <span className="font-black italic uppercase tracking-tighter text-sm md:text-lg text-white group-hover:text-primary transition-colors">
                                    {item.q}
                                </span>
                                <div className={`p-2 rounded-full transition-all ${activeIndex === i ? 'bg-primary text-white rotate-180' : 'bg-white/5 text-gray-500'}`}>
                                    {activeIndex === i ? <Minus size={18} /> : <Plus size={18} />}
                                </div>
                            </button>
                            
                            <AnimatePresence>
                                {activeIndex === i && (
                                    <motion.div
                                      initial={{ height: 0, opacity: 0 }}
                                      animate={{ height: "auto", opacity: 1 }}
                                      exit={{ height: 0, opacity: 0 }}
                                      transition={{ duration: 0.3, ease: "easeOut" }}
                                    >
                                        <div className="px-8 pb-8 text-gray-400 font-medium leading-relaxed border-t border-white/5 pt-4">
                                            {item.a}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                     <p className="text-gray-500 text-sm mb-6 font-medium italic">AINDA TEM DÚVIDAS? CHAME NOSSO SUPORTE AGORA!</p>
                     <motion.a 
                       href="https://wa.me/5561992030064?text=Olá,%20vim%20pelo%20site%20e%20quero%20conhecer%20o%20aplicativo!"
                       whileHover={{ scale: 1.05 }}
                       whileTap={{ scale: 0.95 }}
                       className="inline-flex bg-primary hover:bg-primary-dark text-white font-black py-5 px-10 rounded-full text-lg shadow-[0_20px_40px_rgba(124,58,237,0.3)] transition-all uppercase italic"
                     >
                        FALAR COM ATENDENTE
                     </motion.a>
                </div>
            </div>
        </section>
    )
}
