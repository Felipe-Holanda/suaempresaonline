export type ProspectStatus = "DRAFT" | "READY" | "SENT" | "VIEWED" | "INTERESTED" | "CONVERTED" | "ARCHIVED";

export interface ProspectBusiness {
  name: string;
  slug: string;
  category: "AGENCY" | "GENERIC";
  description: string;
  city: string;
  state: string;
  address?: string;
  foundedAt?: string;
  founders?: string[];
  socialLinks?: { instagram?: string };
  sourceUrl?: string;
  status: ProspectStatus;
  branding: {
    wordmark: string;
    logo: string;
    accent: string;
  };
  images: {
    hero: string;
    sculpture: string;
    signals: string;
  };
  capabilities: Array<{ title: string; description: string }>;
}

export const prospects: Record<string, ProspectBusiness> = {
  "agencia-wei": {
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
    branding: { wordmark: "wei", logo: "/images/wei-logo-crop.jpg", accent: "#ff4b00" },
    images: {
      hero: "/images/wei-hero-premium.jpg",
      sculpture: "/images/wei-forma.jpg",
      signals: "/images/wei-sinais.jpg"
    },
    capabilities: [
      { title: "Estratégia e posicionamento", description: "Uma direção clara para a marca ocupar seu espaço no mercado local." },
      { title: "Comunicação de marca", description: "Ideias e peças alinhadas para apresentar o negócio com mais consistência." },
      { title: "Divulgação regional", description: "Comunicação pensada a partir da realidade do Bico do Papagaio." }
    ]
  }
};

export function getProspect(slug: string) {
  return prospects[slug];
}
