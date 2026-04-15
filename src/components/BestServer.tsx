"use client"
import { motion } from "framer-motion"
import { Wifi, RefreshCw, Map, Tv } from "lucide-react"

const FEATURES = [
  {
    title: "CONEXÃO VIA INTERNET",
    desc: "Assista com a sua internet sem precisar de antenas. Praticidade total para o seu dia a dia.",
    icon: <Wifi size={32} className="text-primary" />
  },
  {
    title: "ATUALIZAÇÃO SEMANAL",
    desc: "Novos filmes, séries e canais adicionados automaticamente toda semana sem que você precise fazer nada.",
    icon: <RefreshCw size={32} className="text-secondary" />
  },
  {
    title: "IDEAL PARA ZONA RURAL",
    desc: "A melhor escolha para qualquer lugar do Brasil, mesmo longe dos grandes centros urbanos.",
    icon: <Map size={32} className="text-accent" />
  },
  {
    title: "CANAIS LIBERADOS",
    desc: "Todos os canais abertos e fechados em HD e 4K. Futebol, filmes, desenhos e muito mais.",
    icon: <Tv size={32} className="text-primary" />
  }
]

export const BestServer = () => {
    return (
        <section className="py-32 bg-dark relative overflow-hidden">
             {/* Decorative background visual */}
             <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none -z-10">
                  <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-primary rounded-full blur-[180px]" />
                  <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-secondary rounded-full blur-[180px]" />
             </div>

             <div className="container mx-auto px-6 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-6xl font-black italic tracking-tighter uppercase mb-6 text-glow leading-[1.2] overflow-visible">
                        O MELHOR SERVIDOR <span className="gradient-text pr-12 pb-2 inline-block">DO MERCADO</span>
                    </h2>
                    <p className="text-gray-400 mb-20 max-w-2xl mx-auto italic font-medium leading-relaxed">
                        Tecnologia de ponta para garantir a melhor experiência de entretenimento em 2026. Estabilidade e qualidade em primeiro lugar.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {FEATURES.map((feat, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 }}
                          whileHover={{ y: -10 }}
                          className="glass p-10 rounded-[50px] border-white/5 flex flex-col items-center gap-6 group hover:bg-white/5 transition-all text-center shadow-2xl"
                        >
                            <div className="w-16 h-16 rounded-3xl bg-dark border border-white/10 flex items-center justify-center drop-shadow-[0_0_15px_rgba(124,58,237,0.3)] group-hover:scale-110 transition-transform">
                                {feat.icon}
                            </div>
                            <h3 className="text-lg font-black italic uppercase tracking-widest text-white">{feat.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{feat.desc}</p>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-24 p-1 rounded-[60px] bg-gradient-to-r from-primary/20 via-transparent to-secondary/20 max-w-5xl mx-auto overflow-hidden">
                     <div className="glass p-10 md:p-16 rounded-[59px] flex flex-col md:flex-row items-center justify-between gap-10">
                          <div className="text-left flex-1">
                               <h4 className="text-3xl font-black italic uppercase mb-4 leading-tight">PREPARADO PARA <span className="text-primary italic uppercase">QUALQUER</span> APARELHO</h4>
                               <p className="text-gray-400 leading-relaxed italic max-w-md">Instalação imediata via WhatsApp. Você recebe o link e em 2 minutos está assistindo com qualidade máxima.</p>
                          </div>
                          <motion.a 
                             href="https://wa.me/5561992030064?text=vim%20do%20site%20e%20quero%20testar%20o%20aplicativo!"
                             whileHover={{ scale: 1.05 }}
                             whileTap={{ scale: 0.95 }}
                             className="bg-primary py-5 px-12 rounded-3xl font-black text-xl italic uppercase tracking-widest shadow-[0_20px_40px_rgba(124,58,237,0.4)] whitespace-nowrap"
                          >
                               TESTAR AGORA
                          </motion.a>
                     </div>
                </div>
             </div>
        </section>
    )
}
