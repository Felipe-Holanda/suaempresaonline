import type { ProspectBusiness } from "@/prospects/types";

const assetRoot = "/projects/jsl-engenharia";

export type JslProject = {
  client: string;
  location: string;
  panels: string;
  power: string;
  saving: string;
  cover: string;
  installation: string;
  url: string;
};

export const jslProjects: JslProject[] = [
  {
    client: "Norma Kledina",
    location: "Axixá do Tocantins - TO",
    panels: "28 painéis",
    power: "8,40 kWp",
    saving: "R$ 1.440,00/mês",
    cover: `${assetRoot}/norma-cover.webp`,
    installation: `${assetRoot}/norma-installation.webp`,
    url: "https://www.behance.net/gallery/177821705/NORMA-KLEDINA-AXIXA-DO-TOCANTINS",
  },
  {
    client: "Fazenda Mozaniel",
    location: "Augustinópolis - TO",
    panels: "44 painéis",
    power: "22,00 kWp",
    saving: "R$ 3.040,00/mês",
    cover: `${assetRoot}/fazenda-cover.webp`,
    installation: `${assetRoot}/fazenda-installation.webp`,
    url: "https://www.behance.net/gallery/177823275/FAZENDA-MOZANIEL-AUGUSTINOPOLIS-TO",
  },
  {
    client: "Jaime Alves Pinheiro",
    location: "Praia Norte - TO",
    panels: "24 painéis",
    power: "7,70 kWp",
    saving: "R$ 1.376,00/mês",
    cover: `${assetRoot}/jaime-cover.webp`,
    installation: `${assetRoot}/jaime-installation-01.webp`,
    url: "https://www.behance.net/gallery/177898041/JAIME-ALVES-PINHEIRO-PRAIA-NORTE",
  },
  {
    client: "José Carlos da Costa Abreu",
    location: "Sampaio - TO",
    panels: "14 painéis",
    power: "7,70 kWp",
    saving: "R$ 800,00/mês",
    cover: `${assetRoot}/jose-cover.webp`,
    installation: `${assetRoot}/jose-installation-01.webp`,
    url: "https://www.behance.net/gallery/178435131/JOSE-CARLOS-DA-COSTA-ABREU-SAMPAIO-TO",
  },
];

export const jslEngenharia: ProspectBusiness = {
  name: "JSL Engenharia e Energia Solar",
  slug: "jsl-engenharia",
  category: "SOLAR_ENGINEERING",
  description: "Engenharia civil e projetos de energia solar com instalação e pós-venda em Augustinópolis, Tocantins.",
  city: "Augustinópolis",
  state: "Tocantins",
  address: "Av. Goiás, 1043, Centro, Augustinópolis - TO, 77960-000",
  phone: "+55 63 99966-4468",
  whatsapp: "5563999664468",
  socialLinks: { instagram: "https://www.instagram.com/jslengenharia_energiasolar/" },
  website: "https://www.instagram.com/jslengenharia_energiasolar/",
  sourceUrl: "https://www.behance.net/jslengenhariasolar",
  reviews: {
    count: 6,
    quote: "Excelente empresa. Concluiu a instalação antes do prazo estabelecido e tem um pós-venda de excelência.",
    author: "Josivaldo Silva dos Santos",
  },
  status: "READY",
  portfolio: {
    title: "JSL Engenharia",
    summary: "Engenharia solar de alta confiança, com portfólio real e presença técnica no Bico do Papagaio.",
    cover: `${assetRoot}/brand-aerial.webp`,
  },
  branding: {
    wordmark: "JSL Engenharia",
    logo: `${assetRoot}/jsl-logo-clean2.png`,
    accent: "#ff7800",
  },
  images: {
    hero: `${assetRoot}/norma-installation.webp`,
    sculpture: `${assetRoot}/fazenda-installation.webp`,
    signals: `${assetRoot}/jaime-installation-02.webp`,
  },
  serviceGroups: [
    { title: "Energia solar", items: ["Dimensionamento e instalação de sistemas fotovoltaicos"] },
    { title: "Pós-venda", items: ["Atendimento presente depois da instalação"] },
    { title: "Engenharia civil", items: ["Atuação profissional em engenharia civil"] },
  ],
  capabilities: [
    { title: "Dimensionar", description: "Analisar o consumo e definir uma solução adequada ao imóvel." },
    { title: "Instalar", description: "Executar o sistema com equipe treinada e compromisso com o prazo." },
    { title: "Acompanhar", description: "Manter um pós-venda acessível para atender quando o cliente precisar." },
  ],
};
