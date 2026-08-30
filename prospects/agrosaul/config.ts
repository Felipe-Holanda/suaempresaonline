import type { ProspectBusiness } from "@/prospects/types";

const assetRoot = "/projects/agrosaul";

export const agrosaul: ProspectBusiness = {
  name: "Agrosaul Rações e Ferragens",
  slug: "agrosaul",
  category: "AGRO",
  description: "Rações, ferramentas, ferragens e peças com atendimento local em Augustinópolis.",
  city: "Augustinópolis",
  state: "Tocantins",
  address: "Av. Goiás, 626, Augustinópolis - TO, 77960-000",
  phone: "+55 63 99986-7908",
  whatsapp: "5563999867908",
  hours: [
    { days: "Segunda a sexta", time: "07h às 18h" },
    { days: "Sábado", time: "07h às 13h" },
    { days: "Domingo", time: "Fechado" },
  ],
  delivery: "Entrega programada na região",
  socialLinks: { instagram: "https://www.instagram.com/agr.osaul/" },
  sourceUrl: "https://www.google.com/search?q=Agrosaul+augustinopolis",
  status: "READY",
  portfolio: {
    title: "Agrosaul",
    summary: "Uma experiência de catálogo rural contemporâneo para rações, ferragens e ferramentas.",
    cover: `${assetRoot}/agrosaul-field-hero.png`,
  },
  branding: {
    wordmark: "AGROSAUL",
    logo: `${assetRoot}/agrosaul-logo-v2.png`,
    accent: "#f2d20a",
  },
  images: {
    hero: `${assetRoot}/agrosaul-field-hero.png`,
    sculpture: `${assetRoot}/agrosaul-hero.png`,
    signals: `${assetRoot}/brand-reference.png`,
  },
  productGroups: [
    { title: "Nutrição animal", items: ["Aves", "Suínos", "Equinos", "Peixes", "Cães e gatos"] },
    { title: "Ferragens", items: ["Parafusos", "Rolamentos", "Correias", "Peças para carretinhas"] },
    { title: "Ferramentas", items: ["Ferramentas agrícolas", "Ferramentas em geral"] },
  ],
  capabilities: [
    { title: "Rações", description: "Opções ensacadas e por quilo para diferentes espécies e estágios." },
    { title: "Ferragens e ferramentas", description: "Itens para o trabalho rural, manutenção e uso geral." },
    { title: "Entrega programada", description: "Atendimento local com entrega na região." },
  ],
};
