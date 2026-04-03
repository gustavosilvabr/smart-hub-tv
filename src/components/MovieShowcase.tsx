"use client"
import { useEffect, useState, useRef, memo } from "react"
import { Trophy, Tv, Film, Star } from "lucide-react"

const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzN2Y0MWZmNzQwZTg3NTJhZTA4YWFlZjc2NzBiNWY0OSIsIm5iZiI6MTY3MzI5Nzk4NS4zMDksInN1YiI6IjYzYmM4MDQxZmMzMWQzMDA3ZTMyNDMxMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AvNlS5j6z0iDXZ_Rt_H_8cIhY-AQdZ3qVo-14L3HoJU"

const FOOTBALL_POSTERS = [
    { name: "CHAMPIONS LEAGUE", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqVKj6-iV-f6kaJSlsgApe1z9-PZVFE_aNrw&s", league: "UEFA Official" },
    { name: "PREMIER LEAGUE", img: "https://play-lh.googleusercontent.com/gvlKi4GfJUgLh6HaVbM1wz_55NVngbs1Icn4t9oDzXIyxSLiT3401TrjAJNpeJs7mKtg1Tm2yTDFv_-mkWxh", league: "England" },
    { name: "LA LIGA", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/LaLiga_logo_2023.svg/960px-LaLiga_logo_2023.svg.png", league: "Spain" },
    { name: "BRASILEIRÃO", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeutXsUe7zTk5S3uGYe5OxIvTgbN3erE0X-A&s", league: "Série A" }
]

// Cache module-level so re-renders don't re-fetch
let cachedMovies: any[] = []
let cachedSeries: any[] = []
let cachedDoramas: any[] = []
let fetched = false

const SkeletonCard = () => (
    <div className="w-[180px] md:w-[320px] shrink-0 mb-12">
        <div className="w-full h-[270px] md:h-[480px] rounded-[32px] bg-white/5 animate-pulse" />
    </div>
)

const CardItem = memo(({ item, type }: { item: any; type?: string }) => (
    <div className="w-[180px] md:w-[320px] shrink-0 group cursor-pointer mb-12">
        <div className="relative w-full h-[270px] md:h-[480px] rounded-[32px] overflow-hidden shadow-2xl border border-white/5 group-hover:border-primary/50 transition-colors bg-dark">
            <img
                src={type === 'football' ? item.img : `https://image.tmdb.org/t/p/w342${item.poster_path}`}
                alt={item.name || item.title}
                loading="lazy"
                decoding="async"
                width={342}
                height={480}
                className={`w-full h-full ${type === 'football' ? 'object-contain p-8' : 'object-cover'} grayscale-[0.2] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105`}
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
))
CardItem.displayName = "CardItem"

const CategoryRow = memo(({ title, items, icon: Icon, type, loading }: any) => {
    const displayItems = items.length > 0 ? items : []
    const doubled = [...displayItems, ...displayItems]

    return (
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
                {loading ? (
                    <div className="flex gap-4 px-6">
                        {Array.from({ length: 5 }).map((_, i) => <SkeletonCard key={i} />)}
                    </div>
                ) : (
                    <div
                        className="flex gap-4 px-6 shrink-0"
                        style={{
                            animation: `scrollLeft ${type === 'football' ? 20 : 40}s linear infinite`,
                            willChange: 'transform',
                        }}
                    >
                        {doubled.map((item, i) => (
                            <CardItem key={i} item={item} type={type} />
                        ))}
                    </div>
                )}

                {/* Edge Fades */}
                <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-darker to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-darker to-transparent z-10 pointer-events-none" />
            </div>
        </div>
    )
})
CategoryRow.displayName = "CategoryRow"

export const MovieShowcase = () => {
    const [doramas, setDoramas] = useState<any[]>(cachedDoramas)
    const [series, setSeries] = useState<any[]>(cachedSeries)
    const [movies, setMovies] = useState<any[]>(cachedMovies)
    const [loading, setLoading] = useState(!fetched)

    useEffect(() => {
        if (fetched) return

        const controller = new AbortController()
        const { signal } = controller

        const fetchAll = async () => {
            try {
                const headers = { Authorization: `Bearer ${TMDB_TOKEN}` }
                const opts = { headers, signal }

                // Parallel fetch — 3x faster than sequential
                const [doramaRes, seriesRes, moviesRes] = await Promise.all([
                    fetch("https://api.themoviedb.org/3/discover/tv?language=pt-BR&with_original_language=ko&sort_by=popularity.desc", opts),
                    fetch("https://api.themoviedb.org/3/tv/popular?language=pt-BR&page=1", opts),
                    fetch("https://api.themoviedb.org/3/movie/popular?language=pt-BR&page=1", opts),
                ])

                const [doramaData, seriesData, moviesData] = await Promise.all([
                    doramaRes.json(),
                    seriesRes.json(),
                    moviesRes.json(),
                ])

                cachedDoramas = doramaData.results.slice(0, 8)
                cachedSeries = seriesData.results.slice(0, 8)
                cachedMovies = moviesData.results.slice(0, 8)
                fetched = true

                setDoramas(cachedDoramas)
                setSeries(cachedSeries)
                setMovies(cachedMovies)
            } catch (e: any) {
                if (e?.name !== "AbortError") console.error("Fetch error:", e)
            } finally {
                setLoading(false)
            }
        }

        fetchAll()
        return () => controller.abort()
    }, [])

    return (
        <section id="catalog" className="py-24 bg-darker overflow-hidden border-b border-white/5">
            <CategoryRow
                title={["FUTEBOL", "AO VIVO"]}
                items={FOOTBALL_POSTERS}
                icon={Trophy}
                type="football"
                loading={false}
            />
            <CategoryRow title={["FILMES", "LANÇAMENTOS"]} items={movies} icon={Film} loading={loading} />
            <CategoryRow title={["SÉRIES", "PREMIUM"]} items={series} icon={Tv} loading={loading} />
            <CategoryRow title={["NOVELAS &", "DORAMAS"]} items={doramas} icon={Star} loading={loading} />
        </section>
    )
}
