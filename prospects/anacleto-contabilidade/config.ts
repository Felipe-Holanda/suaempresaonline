import type { ProspectBusiness } from "@/prospects/types";

const assetRoot = "/projects/anacleto-contabilidade";

export const anacletoContabilidade: ProspectBusiness = {
  name: "Anacleto Contabilidade e Assessoria",
  slug: "anacleto-contabilidade",
  category: "ACCOUNTING",
  description: "Contabilidade, assessoria empresarial, planejamento tributário, auditoria e perícia em Augustinópolis.",
  city: "Augustinópolis",
  state: "Tocantins",
  address: "Centro, Augustinópolis - TO, 77960-000",
  phone: "+55 63 99995-8285",
  website: "https://www.anacletocontabilidade.com.br/",
  socialLinks: { instagram: "https://www.instagram.com/anacletocontabilidade/" },
  sourceUrl: "https://www.anacletocontabilidade.com.br/",
  reviews: { count: 8, quote: "Ótimo atendimento!", author: "Robson Da Paz" },
  status: "READY",
  portfolio: {
    title: "Anacleto Contabilidade",
    summary: "Redesign institucional orientado à clareza, segurança técnica e organização empresarial.",
    cover: `${assetRoot}/anacleto-hero.png`,
  },
  branding: {
    wordmark: "Anacleto",
    logo: `${assetRoot}/anacleto-logo.png`,
    accent: "#ff3b12",
  },
  images: {
    hero: `${assetRoot}/anacleto-hero.png`,
    sculpture: `${assetRoot}/anacleto-documents.png`,
    signals: `${assetRoot}/anacleto-logo.png`,
  },
  serviceGroups: [
    { title: "Empresa", items: ["Legalização de empresa", "Contabilidade em geral", "Abertura e regularização de MEI"] },
    { title: "Gestão", items: ["Departamento pessoal", "Departamento fiscal", "Planejamento tributário"] },
    { title: "Especialidades", items: ["Auditoria", "Perícia contábil, trabalhista e fiscal", "Parcelamentos e defesa em processos administrativos"] },
  ],
  capabilities: [
    { title: "Contabilidade em geral", description: "Rotinas contábeis orientadas à necessidade específica de cada cliente." },
    { title: "Planejamento tributário", description: "Definição da opção de tributação e busca de economia lícita de tributos." },
    { title: "Legalização e regularização", description: "Apoio documental junto a órgãos federais, estaduais e municipais." },
  ],
};
