import type { ProspectBusiness } from "@/prospects/types";

const assetRoot = "/projects/anchieta-advogados";

export const anchietaAdvogados: ProspectBusiness = {
  name: "Anchieta Advogados",
  slug: "anchieta-advogados",
  category: "LAW",
  description: "Escritório de advocacia especializado em Direito Criminal e Militar em Augustinópolis.",
  city: "Augustinópolis",
  state: "Tocantins",
  address: "R. Rui Barbosa, 50 - Centro, Augustinópolis - TO, 77960-000",
  phone: "+55 63 99943-4979",
  whatsapp: "5599981133458",
  socialLinks: {
    instagram: "https://www.instagram.com/anchietaadvogados/",
    facebook: "https://www.facebook.com/anchietadvogados/",
  },
  reviews: { count: 3 },
  sourceUrl: "https://www.instagram.com/anchietaadvogados/",
  status: "READY",
  portfolio: {
    title: "Anchieta Advogados",
    summary: "Proposta de presença digital para um escritório de advocacia criminal e militar.",
    cover: `${assetRoot}/anchieta-justice-hero.png`,
  },
  branding: {
    wordmark: "Anchieta Advogados",
    logo: `${assetRoot}/anchieta-logo-recreated.png`,
    accent: "#9f2f36",
  },
  images: {
    hero: `${assetRoot}/anchieta-justice-hero.png`,
    sculpture: `${assetRoot}/anchieta-justice-hero.png`,
    signals: `${assetRoot}/anchieta-logo-recreated.png`,
  },
  serviceGroups: [
    { title: "Direito Criminal", items: ["Atuação especializada em Direito Criminal"] },
    { title: "Direito Militar", items: ["Atuação especializada em Direito Militar"] },
  ],
  capabilities: [
    { title: "Criminal", description: "Atuação especializada em Direito Criminal." },
    { title: "Militar", description: "Atuação especializada em Direito Militar." },
  ],
};
