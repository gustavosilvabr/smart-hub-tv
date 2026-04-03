import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Smart Hub TV | O Melhor Sistema de Entretenimento 4K de 2026",
  description: "Assine Smart Hub Play TV e tenha acesso a mais de 100.000 conteúdos: canais 4K, filmes, séries e suporte 24h. O melhor custo-benefício e estabilidade sem travamentos.",
  keywords: ["IPTV premium", "Smart Hub TV", "streaming 4K", "melhor iptv 2026", "canais de tv por assinatura", "filmes e séries online"],
  authors: [{ name: "Smart Hub Development Team" }],
  openGraph: {
    title: "Smart Hub TV | Entretenimento sem Limites",
    description: "Sua TV, seus canais, sua escolha. Qualidade Ultra-HD e Zero Travamentos.",
    url: "https://smarthubplaytv.online",
    siteName: "Smart Hub Play TV",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Smart Hub TV - A Revolução do Streaming",
    description: "Milhares de canais e filmes em um só lugar por um preço justo.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* Facebook Pixel Code */}
        <script dangerouslySetInnerHTML={{ __html: `
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', 'SEU_ID_DO_PIXEL');
          fbq('track', 'PageView');
        ` }} />
        <noscript>
          <img height="1" width="1" style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=SEU_ID_DO_PIXEL&ev=PageView&noscript=1"
          />
        </noscript>
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
