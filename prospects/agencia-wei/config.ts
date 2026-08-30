import type { ProspectBusiness } from "@/prospects/types";

const assetRoot = "/projects/agencia-wei";

export const agenciaWei: ProspectBusiness = {
  name: "Wei - Agência de Publicidade",
  slug: "agencia-wei",
  category: "AGENCY",
  description: "Marketing e publicidade para impulsionar negócios no Bico do Papagaio.",
  city: "Augustinópolis",
  state: "Tocantins",
  address: "R. Dílson Martins de Oliveira, 12, Augustinópolis - TO, 77960-000",
  foundedAt: "Outubro de 2024",
  founders: ["Fausen Cauã", "Gustavo Ramon", "Mágson Alves"],
  socialLinks: { instagram: "https://www.instagram.com/agenciawei/" },
  sourceUrl: "https://www.vozdobico.com.br/destaques/com-experiencia-em-campanhas-politicas-e-eventos-regionais-amigos-se-unem-e-lancam-agencia-de-publicidade/",
  status: "READY",
  portfolio: {
    title: "Agência Wei",
    summary: "Presença digital premium para uma agência que quer transformar a comunicação regional.",
    cover: `${assetRoot}/wei-hero-premium.jpg`,
  },
  branding: {
    wordmark: "wei",
    logo: `${assetRoot}/wei-logo-crop.jpg`,
    accent: "#ff4b00",
  },
  images: {
    hero: `${assetRoot}/wei-hero-premium.jpg`,
    sculpture: `${assetRoot}/wei-forma.jpg`,
    signals: `${assetRoot}/wei-sinais.jpg`,
  },
  capabilities: [
    { title: "Estratégia e posicionamento", description: "Uma direção clara para a marca ocupar seu espaço no mercado local." },
    { title: "Comunicação de marca", description: "Ideias e peças alinhadas para apresentar o negócio com mais consistência." },
    { title: "Divulgação regional", description: "Comunicação pensada a partir da realidade do Bico do Papagaio." },
  ],
};
