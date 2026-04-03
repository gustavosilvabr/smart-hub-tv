"use client"
import { motion, AnimatePresence } from "framer-motion"
import { X, ShieldCheck, FileText } from "lucide-react"
import { useState } from "react"

export const Footer = () => {
    const [modalContent, setModalContent] = useState<"privacy" | "terms" | null>(null)

    const LEGAL_TEXTS = {
        privacy: {
            title: "POLÍTICA DE PRIVACIDADE",
            content: "Sua privacidade é nossa prioridade. Coletamos apenas os dados básicos fornecidos via WhatsApp para ativação do seu plano. Não compartilhamos suas informações com terceiros em 2026. Utilizamos cookies apenas para melhorar a experiência de navegação e garantir a segurança do site."
        },
        terms: {
            title: "TERMOS DE USO",
            content: "Ao utilizar o Smart Hub TV, você concorda que o serviço é pré-pago e de uso pessoal. Não nos responsabilizamos por mau uso do sistema ou compartilhamento de login indevido. Nosso suporte está disponível 24h para garantir a melhor experiência possível."
        }
    }

    return (
        <footer className="py-20 bg-darker border-t border-white/5 relative">
             <div className="container mx-auto px-6 text-center">
                  <div className="flex flex-col items-center gap-6 mb-12">
                     <img 
                       src="/logo.png" 
                       alt="Smart Hub Play TV Official Logo" 
                       className="h-24 md:h-48 w-auto object-contain brightness-125 drop-shadow-[0_0_30px_rgba(124,58,237,0.6)]"
                     />
                     <p className="text-gray-500 font-medium max-w-sm italic">
                         O futuro da TV na sua casa. Qualidade, estabilidade e preço justo.
                     </p>
                  </div>
                  
                  <div className="flex flex-wrap items-center justify-center gap-10 font-bold uppercase text-[9px] tracking-[0.3em] mb-12 text-gray-500">
                     <button onClick={() => setModalContent("privacy")} className="hover:text-primary transition-colors cursor-pointer">POLÍTICA DE PRIVACIDADE</button>
                     <button onClick={() => setModalContent("terms")} className="hover:text-primary transition-colors cursor-pointer">TERMOS DE USO</button>
                  </div>

                  <div className="max-w-4xl mx-auto px-6 text-center text-gray-700 text-[8px] leading-6 font-black uppercase tracking-[0.1em] border-t border-white/5 pt-12 space-y-4">
                      <p>&copy; 2026 SMART HUB PLAY TV - TODOS OS DIREITOS RESERVADOS</p>
                      <p className="max-w-3xl mx-auto opacity-40">ESTE SITE NÃO É DO FACEBOOK OU FACEBOOK INC. ALÉM DISSO, ESTE SITE NÃO É ENDOSSADO PELO FACEBOOK DE QUALQUER FORMA. FACEBOOK É UMA TRADEMARK DA FACEBOOK, INC. OS RESULTADOS CITADOS SÃO DEPOIMENTOS DE CLIENTES REAIS E PODE VARIAR DE PESSOA PARA PESSOA.</p>
                  </div>
            </div>
            
            {/* Modal Overlay */}
            <AnimatePresence>
                {modalContent && (
                    <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 sm:p-12">
                         <motion.div
                           initial={{ opacity: 0 }}
                           animate={{ opacity: 1 }}
                           exit={{ opacity: 0 }}
                           onClick={() => setModalContent(null)}
                           className="absolute inset-0 bg-black/80 backdrop-blur-sm shadow-2xl"
                         />
                         
                         <motion.div
                           initial={{ scale: 0.9, opacity: 0, y: 20 }}
                           animate={{ scale: 1, opacity: 1, y: 0 }}
                           exit={{ scale: 0.9, opacity: 0, y: 20 }}
                           className="relative w-full max-w-2xl glass p-10 rounded-[40px] border-white/10 shadow-3xl text-left overflow-hidden"
                         >
                              <button 
                                onClick={() => setModalContent(null)}
                                className="absolute top-6 right-6 p-3 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all"
                              >
                                  <X size={24} />
                              </button>
                              
                              <div className="flex items-center gap-4 mb-8">
                                   <div className="p-3 rounded-2xl bg-primary/10 text-primary">
                                        {modalContent === "privacy" ? <ShieldCheck size={32} /> : <FileText size={32} />}
                                   </div>
                                   <h3 className="text-xl md:text-2xl font-black italic uppercase tracking-tighter text-white">
                                       {LEGAL_TEXTS[modalContent].title}
                                   </h3>
                              </div>
                              
                              <div className="text-gray-400 font-medium leading-loose text-sm md:text-base">
                                   {LEGAL_TEXTS[modalContent].content}
                              </div>
                              
                              <div className="mt-10 pt-8 border-t border-white/5 text-center">
                                   <p className="text-[10px] font-black text-gray-600 uppercase tracking-widest">&copy; 2026 SMART HUB PLAY TV OFFICIAL DOCUMENT</p>
                              </div>
                         </motion.div>
                    </div>
                )}
            </AnimatePresence>

            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-1/2 bg-primary/10 blur-[100px] -z-10 rounded-[100%]" />
        </footer>
    )
}
