"use client"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { Trophy, Tv, Film, Star } from "lucide-react"

const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzN2Y0MWZmNzQwZTg3NTJhZTA4YWFlZjc2NzBiNWY0OSIsIm5iZiI6MTY3MzI5Nzk4NS4zMDksInN1YiI6IjYzYmM4MDQxZmMzMWQzMDA3ZTMyNDMxMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AvNlS5j6z0iDXZ_Rt_H_8cIhY-AQdZ3qVo-14L3HoJU"

const FOOTBALL_POSTERS = [
    { name: "CHAMPIONS LEAGUE", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqVKj6-iV-f6kaJSlsgApe1z9-PZVFE_aNrw&s", league: "UEFA Official" },
    { name: "PREMIER LEAGUE", img: "https://play-lh.googleusercontent.com/gvlKi4GfJUgLh6HaVbM1wz_55NVngbs1Icn4t9oDzXIyxSLiT3401TrjAJNpeJs7mKtg1Tm2yTDFv_-mkWxh", league: "England" },
    { name: "LA LIGA", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/LaLiga_logo_2023.svg/960px-LaLiga_logo_2023.svg.png", league: "Spain" },
    { name: "BRASILEIRÃO", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeutXsUe7zTk5S3uGYe5OxIvTgbN3erE0X-A&s", league: "Série A" }
]

export const MovieShowcase = () => {
    const [doramas, setDoramas] = useState<any[]>([])
    const [series, setSeries] = useState<any[]>([])
    const [movies, setMovies] = useState<any[]>([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch Korean Dramas / Novelas
                const doramaRes = await fetch(
                    "https://api.themoviedb.org/3/discover/tv?language=pt-BR&with_original_language=ko&sort_by=popularity.desc",
                    { headers: { Authorization: `Bearer ${TMDB_TOKEN}` } }
                );
                const doramaData = await doramaRes.json();
                setDoramas(doramaData.results.slice(0, 8));

                // Fetch Popular Series
                const seriesRes = await fetch(
                    "https://api.themoviedb.org/3/tv/popular?language=pt-BR&page=1",
                    { headers: { Authorization: `Bearer ${TMDB_TOKEN}` } }
                );
                const seriesData = await seriesRes.json();
                setSeries(seriesData.results.slice(0, 8));

                // Fetch Popular Movies
                const moviesRes = await fetch(
                    "https://api.themoviedb.org/3/movie/popular?language=pt-BR&page=1",
                    { headers: { Authorization: `Bearer ${TMDB_TOKEN}` } }
                );
                const moviesData = await moviesRes.json();
                setMovies(moviesData.results.slice(0, 8));
            } catch (error) {
                console.error("Error fetching content:", error);
            }
        };
        fetchData();
    }, []);

    const CategoryRow = ({ title, items, icon: Icon, type }: any) => (
        <div className="mb-8 last:mb-0">
            <div className="container mx-auto px-6 mb-4">
                <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-lg bg-primary/20 text-primary">
                        <Icon size={16} />
                    </div>
                    <h2 className="text-xl md:text-2xl font-black italic tracking-tighter uppercase text-glow px-4 overflow-visible">
                        {title[0]} <span className="gradient-text pr-12 pb-2 inline-block">{title[1]}</span>
                    </h2>
                </div>
            </div>
            
            <div className="flex overflow-hidden relative">
                <motion.div 
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
                    className="flex gap-4 px-6 shrink-0"
                >
                    {[...items, ...items].map((item, i) => (
                        <div key={i} className={`w-[180px] md:w-[320px] shrink-0 group cursor-pointer mb-12`}>
                            <div className={`relative w-full h-[270px] md:h-[480px] rounded-[32px] overflow-hidden shadow-2xl border border-white/5 group-hover:border-primary/50 transition-all bg-dark`}>
                                <img 
                                    src={type === 'football' ? item.img : `https://image.tmdb.org/t/p/w500${item.poster_path}`} 
                                    alt={item.name || item.title} 
                                    className={`w-full h-full ${type === 'football' ? 'object-contain p-8' : 'object-cover'} grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105`}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-darker via-transparent/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                                    <span className="text-white font-black italic uppercase tracking-tighter text-[14px] md:text-[18px] leading-tight drop-shadow-[0_2px_10px_rgba(0,0,0,1)] px-1">
                                        {item.name || item.title}
                                    </span>
                                    {type === 'football' && (
                                        <span className="text-primary text-[10px] md:text-[12px] font-black tracking-widest uppercase mt-2 px-1">{item.league}</span>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
                
                {/* Edge Fades for smoothness */}
                <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-darker to-transparent z-10" />
                <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-darker to-transparent z-10" />
            </div>
        </div>
    )

    return (
        <section id="catalog" className="py-24 bg-darker overflow-hidden border-b border-white/5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
            <CategoryRow 
                title={["FUTEBOL", "AO VIVO"]} 
                items={FOOTBALL_POSTERS} 
                icon={Trophy} 
                type="football"
            />
            <CategoryRow 
                title={["FILMES", "LANÇAMENTOS"]} 
                items={movies} 
                icon={Film} 
            />
            <CategoryRow 
                title={["SÉRIES", "PREMIUM"]} 
                items={series} 
                icon={Tv} 
            />
            <CategoryRow 
                title={["NOVELAS &", "DORAMAS"]} 
                items={doramas} 
                icon={Star} 
            />
            </motion.div>
        </section>
    )
}
