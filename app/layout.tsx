import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono, Archivo } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

// Black-weight neo-grotesque for the editorial product pages (the_unseen_hook
// display treatment). Loaded site-wide but only used via .u-display / font-display.
const archivo = Archivo({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  variable: "--font-archivo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aerobase – AI agents that know the physics",
  description:
    "Aerobase builds physics-based AI for materials and manufacturing. Digital metallurgy, additive, and crash, grounded in real experiments.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable} ${archivo.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem('theme');if(t==='apple'){document.documentElement.dataset.theme='apple';}}catch(e){}`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
