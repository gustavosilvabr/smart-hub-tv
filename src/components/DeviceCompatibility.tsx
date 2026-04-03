"use client"
import { motion } from "framer-motion"

const DEVICES = [
  { name: "TV SMART", img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSgxghwKCjMnRixUNTVtT6NXCy7fH4bjWyR8FU3OhjanTmyojx7NCB4-tnPcLmSaSKU-RQAaatxTIdp27ng9iAVROu-3OuYeQSj98_0RfW3pr_-jE37BzsP-63eYinR6k9w__QAZlg&usqp=CAc", desc: "LG, Samsung, Philips, TCL, Semp, Roku" },
  { name: "TV BOX / STICK", img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT2RvNXIBgyyH2C2sbBp4OvfMrLtbNYalOFhkcKIt5RI5HMuKh4e2vPVniKZnsfZkuhtn1aJtbsJId4r_ow2HV30ccXH7_OKU07dUWA3QUhPQKAZKZU19QHMw8oy0C-H0USgsqZWbQq_Q&usqp=CAc", desc: "Fire Stick, Mi Stick, MXQ, Apple TV" },
  { name: "CELULAR / TABLET", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS7-5xJ8f_Yxc5uqhZyVRO0uvbDT8XoLUWgg&s", desc: "Android, iOS (iPhone/iPad)" },
  { name: "COMPUTADOR", img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80&w=400", desc: "Notebook, PC Windows, Mac" },
  { name: "CHROMECAST 4", img: "https://down-br.img.susercontent.com/file/sg-11134201-7rdwe-mde8ihrknaau82@resize_w450_nl.webp", desc: "Nova versão com sistema Google TV" },
  { name: "VIDEO GAMES", img: "https://m.media-amazon.com/images/I/61PI59RfWvL._AC_UF1000,1000_QL80_.jpg", desc: "XBOX, PS4, PS5 e consoles Android" },
  { name: "PROJETORES", img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTT8Kuz8k_cIF5xeeEY3Kq_9Iy6eZN2LkIH7wGOcd5bGFBg1CfFvraxyAy8DKeUXgnhm0ids1WLDbRs-FvkJMskslDYhUztHIovzmBNCjDw89OaKKyAnrvbE2sJ&usqp=CAc", desc: "Todos com sistema Android integrado" },
  { name: "APPLE TV", img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRkvJ5L8i_Qs2i24dgptZxJIYP9WiMRmWkoBoJPJ-Jk2RGsk0z8ujYunrYHM3BXOs9AsWNWFqgInRHQxWttUclniMhcTTxeqrOD9MpvHZO11i9JNhdfm96oeLzcTOqs_y2PYr74dblq0m8&usqp=CAc", desc: "Suporte total ao ecossistema Apple" }
]

export const DeviceCompatibility = () => {
    return (
        <section id="compatibility" className="py-24 bg-dark relative border-y border-white/5 overflow-hidden">
             <div className="container mx-auto px-6 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-black italic tracking-tighter uppercase mb-4 text-glow leading-[1.2] overflow-visible">
                        ACESSE PELO SEU <span className="gradient-text uppercase pr-12 pb-2 inline-block">APARELHO FAVORITO</span>
                    </h2>
                    <p className="text-gray-400 font-medium italic">ONDE E QUANDO QUISER!</p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {DEVICES.map((device, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.05 }}
                          whileHover={{ y: -8, scale: 1.02 }}
                          className="glass p-8 rounded-[40px] border border-white/5 flex flex-col items-center gap-6 group hover:bg-white/5 transition-all text-center"
                        >
                            <div className="w-24 h-24 rounded-3xl overflow-hidden border border-primary/20 bg-dark shadow-[0_0_20px_rgba(124,58,237,0.15)] group-hover:scale-110 transition-transform">
                                <img src={device.img} alt={device.name} className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <h3 className="text-lg font-black italic uppercase tracking-widest text-white mb-2">{device.name}</h3>
                                <p className="text-gray-500 text-[10px] uppercase font-bold tracking-widest italic">{device.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
                
                <div className="mt-16 inline-flex flex-wrap items-center justify-center gap-6 px-10 py-4 glass rounded-full opacity-60">
                     <span className="text-[10px] font-black tracking-widest text-gray-500 grayscale transition-all hover:grayscale-0">SAMSUNG TIZEN</span>
                     <span className="text-[10px] font-black tracking-widest text-gray-500 grayscale transition-all hover:grayscale-0">LG WEBOS</span>
                     <span className="text-[10px] font-black tracking-widest text-gray-500 grayscale transition-all hover:grayscale-0">ANDROID TV</span>
                     <span className="text-[10px] font-black tracking-widest text-gray-500 grayscale transition-all hover:grayscale-0">APPLE TV OS</span>
                     <span className="text-[10px] font-black tracking-widest text-gray-500 grayscale transition-all hover:grayscale-0">ROKU OS</span>
                </div>
             </div>
        </section>
    )
}
