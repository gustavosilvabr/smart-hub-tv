const PLATFORMS = [
  { name: "NETFLIX", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" },
  { name: "DISNEY+", logo: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Disney%2B_logo.svg" },
  { name: "PRIME VIDEO", logo: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Prime_Video.png" },
  { name: "MAX", logo: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Max_logo.svg" },
  { name: "GLOBOPLAY", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Globoplay-logo.png" },
  { name: "PREMIERE", logo: "https://virtex.com.br/media/2025/10/99c46a9773f76b732de116e0d82755f7.webp" },
  { name: "PARAMOUNT+", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Paramount_Plus.svg" },
  { name: "ESPN", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/ESPN_wordmark.svg" },
  { name: "TNT", logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/TNT_Logo_2016.svg" }
]

export const PlatformCarousel = () => {
    return (
        <section className="py-24 bg-dark relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            
            <div className="container mx-auto px-6 mb-12 text-center border-b border-white/5 pb-10">
                <h2 className="text-3xl md:text-5xl font-black italic tracking-tighter uppercase mb-2 text-glow leading-[1.2] overflow-visible">
                    TUDO EM UM <span className="gradient-text uppercase pr-12 pb-2 inline-block">SÓ LUGAR</span>
                </h2>
                <p className="text-gray-400 font-medium">Compatível com todas as principais plataformas de streaming oficiais.</p>
            </div>

            <div className="flex overflow-hidden">
                <div
                    style={{ animation: "scrollLeft 30s linear infinite", willChange: "transform" }}
                    className="flex shrink-0 items-center gap-16 whitespace-nowrap min-w-full py-10"
                >
                    {[...PLATFORMS, ...PLATFORMS].map((platform, i) => (
                        <div key={i} className="flex items-center justify-center shrink-0 w-48 px-4 cursor-default group">
                            <img
                                src={platform.logo}
                                alt={platform.name}
                                loading="lazy"
                                decoding="async"
                                className="max-h-12 w-auto object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.4)] group-hover:scale-110 transition-transform"
                            />
                        </div>
                    ))}
                </div>
            </div>
            
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        </section>
    )
}
