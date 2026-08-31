import type { ProspectBusiness } from "@/prospects/types";

const assetRoot = "/projects/rl-construtora";

export const rlConstrutora: ProspectBusiness = {
  name: "RL - Construtora e Incorporadora LTDA",
  slug: "rl-construtora",
  category: "CONSTRUCTION",
  description: "Construtora e incorporadora especializada em novas construções e obras particulares em Augustinópolis, Tocantins.",
  city: "Augustinópolis",
  state: "Tocantins",
  address: "Av. Goiás, 1156, Centro, Augustinópolis - TO, 77960-000",
  phone: "+55 63 99977-9511",
  whatsapp: "5563999779511",
  reviews: { count: 4 },
  serviceGroups: [
    { title: "Novas construções", items: ["Execução de novas edificações com atendimento local"] },
    { title: "Obras particulares", items: ["Construção de imóveis residenciais e comerciais"] },
  ],
  sourceUrl: "https://www.google.com/search?q=RL+Construtora+Augustinopolis",
  status: "READY",
  portfolio: {
    title: "RL Construtora",
    summary: "Uma presença arquitetônica sólida para quem transforma projeto em patrimônio.",
    cover: `${assetRoot}/residencia-01.webp`,
  },
  branding: {
    wordmark: "RL",
    logo: `${assetRoot}/brand-reference.webp`,
    accent: "#c92c32",
  },
  images: {
    hero: `${assetRoot}/residencia-01.webp`,
    sculpture: `${assetRoot}/comercial-01.webp`,
    signals: `${assetRoot}/residencia-03.webp`,
  },
  capabilities: [
    { title: "Alinhar", description: "Entender o tipo de obra, o terreno e as necessidades do cliente." },
    { title: "Planejar", description: "Organizar a execução com clareza antes do início da construção." },
    { title: "Construir", description: "Conduzir a obra particular até que o projeto ganhe forma." },
  ],
};
