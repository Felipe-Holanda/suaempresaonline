import type { Metadata, Viewport } from "next";
import { Archivo, Barlow_Condensed, Cormorant_Garamond, IBM_Plex_Mono, Manrope, Space_Grotesk, Syne } from "next/font/google";
import "./globals.css";

const bodyFont = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const displayFont = Barlow_Condensed({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["600", "700", "800"],
  style: ["normal", "italic"],
  display: "swap",
});

const monoFont = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
});

const vaultDisplayFont = Syne({
  subsets: ["latin"],
  variable: "--font-vault-display",
  weight: ["600", "700", "800"],
  display: "swap",
});

const fradeDisplayFont = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-frade-display",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const constructionFont = Archivo({
  subsets: ["latin"],
  variable: "--font-construction",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const solarDisplayFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-solar-display",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "8Vault Solutions",
  description: "Digitalização, automação e inteligência artificial para empresas locais.",
};

export const viewport: Viewport = {
  themeColor: "#080808",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" data-scroll-behavior="smooth">
      <body className={`${bodyFont.variable} ${displayFont.variable} ${monoFont.variable} ${vaultDisplayFont.variable} ${fradeDisplayFont.variable} ${constructionFont.variable} ${solarDisplayFont.variable}`}>{children}</body>
    </html>
  );
}
