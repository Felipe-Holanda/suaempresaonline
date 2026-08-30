import type { ProspectBusiness } from "@/prospects/types";

const assetRoot = "/projects/equipar-locacao";

export const equiparLocacao: ProspectBusiness = {
  name: "Equipar Locação de Equipamentos",
  slug: "equipar-locacao",
  category: "EQUIPMENT_RENTAL",
  description: "Locação de andaimes, betoneiras e compactadores para construção civil em Augustinópolis e Araguatins.",
  city: "Augustinópolis",
  state: "Tocantins",
  address: "Rua das Mangueiras, 304, Centro, Augustinópolis - TO, 77960-000",
  phone: "+55 63 99138-9986",
  whatsapp: "5563991389986",
  catalogUrl: "https://api.whatsapp.com/message/5IBTHRMBWROXK1",
  areasServed: ["Augustinópolis", "Araguatins"],
  locations: [
    { city: "Augustinópolis", address: "Rua das Mangueiras, 304, Centro" },
    { city: "Araguatins", address: "Av. Araguaia, 1375, Centro" },
  ],
  hours: [
    { days: "Segunda a sexta", time: "07h às 18h" },
    { days: "Sábado", time: "08h às 12h" },
    { days: "Domingo", time: "Fechado" },
  ],
  socialLinks: { instagram: "https://www.instagram.com/equipar.locacao/" },
  sourceUrl: "https://www.instagram.com/equipar.locacao/",
  reviews: { count: 1 },
  status: "READY",
  portfolio: {
    title: "Equipar Locação",
    summary: "Uma presença industrial e direta para locação de equipamentos de construção civil.",
    cover: `${assetRoot}/equipar-hero.png`,
  },
  branding: {
    wordmark: "EQUIPAR",
    logo: `${assetRoot}/equipar-logo.png`,
    accent: "#0a54d1",
  },
  images: {
    hero: `${assetRoot}/equipar-hero.png`,
    sculpture: `${assetRoot}/equipar-yard.png`,
    signals: `${assetRoot}/brand-reference.png`,
  },
  productGroups: [
    { title: "Andaimes", items: ["Estruturas para trabalhos de construção e manutenção"] },
    { title: "Betoneiras", items: ["Equipamentos para preparo de concreto e argamassa"] },
    { title: "Compactadores", items: ["Máquinas para compactação de solo em obras e reformas"] },
  ],
  capabilities: [
    { title: "Consulte", description: "Acesse o catálogo e informe o equipamento necessário." },
    { title: "Confirme", description: "Converse com a equipe sobre disponibilidade e período de locação." },
    { title: "Combine", description: "Defina os detalhes do atendimento diretamente pelo WhatsApp." },
  ],
};
