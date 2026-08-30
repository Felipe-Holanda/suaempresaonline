import type { ProspectBusiness } from "@/prospects/types";

export type FradeProject = {
  name: string;
  location: string;
  image: string;
  kind: "Residencial" | "Comercial";
};

export const fradeResidentialProjects: FradeProject[] = [
  { name: "Edifício New Life", location: "Palmas, TO", image: "/projects/grupo-frade/residencial-01.webp", kind: "Residencial" },
  { name: "Residência JF", location: "Parauapebas, PA", image: "/projects/grupo-frade/residencial-02.webp", kind: "Residencial" },
  { name: "Apartamento MA", location: "Curitiba, PR", image: "/projects/grupo-frade/residencial-03.webp", kind: "Residencial" },
  { name: "Apartamento GP", location: "São Paulo, SP", image: "/projects/grupo-frade/residencial-04.webp", kind: "Residencial" },
  { name: "Apartamento MF", location: "Curitiba, PR", image: "/projects/grupo-frade/home-02.webp", kind: "Residencial" },
  { name: "Residência RB", location: "Curitiba, PR", image: "/projects/grupo-frade/hero.webp", kind: "Residencial" },
  { name: "Apartamento FC", location: "Curitiba, PR", image: "/projects/grupo-frade/residencial-03.webp", kind: "Residencial" },
  { name: "Apartamento VA", location: "Curitiba, PR", image: "/projects/grupo-frade/home-03.webp", kind: "Residencial" },
  { name: "Residência DC", location: "Matinhos, PR", image: "/projects/grupo-frade/residencial-02.webp", kind: "Residencial" },
];

export const fradeCommercialProjects: FradeProject[] = [
  { name: "Sede Feijão Pé Vermelho", location: "Curitiba, PR", image: "/projects/grupo-frade/comercial-01.webp", kind: "Comercial" },
  { name: "Panificadora Doce Mel Nazaré", location: "Curitiba, PR", image: "/projects/grupo-frade/comercial-02.webp", kind: "Comercial" },
  { name: "Escrilex Contabilidade", location: "Curitiba, PR", image: "/projects/grupo-frade/comercial-03.webp", kind: "Comercial" },
  { name: "Vidden Investimentos", location: "Curitiba, PR", image: "/projects/grupo-frade/home-03.webp", kind: "Comercial" },
  { name: "UAU Hub", location: "Curitiba, PR", image: "/projects/grupo-frade/comercial-01.webp", kind: "Comercial" },
  { name: "Schultz Vistos Consulares Pátio Batel", location: "Curitiba, PR", image: "/projects/grupo-frade/comercial-02.webp", kind: "Comercial" },
];

export const fradeServices = [
  { icon: "bx-building-house", title: "Projeto arquitetônico", description: "Apoio da escolha do terreno à documentação, com projeto, personalização e acompanhamento da execução." },
  { icon: "bx-cube-alt", title: "Projeto de interiores", description: "Interiores residenciais e corporativos pensados a partir da rotina, da identidade e do espaço disponível." },
  { icon: "bx-shape-square", title: "Projeto estrutural", description: "Estruturas em concreto armado, protendido e sistemas mistos, desenvolvidas com método e compatibilização." },
  { icon: "bx-layer", title: "Projetos complementares", description: "Projetos elétricos, hidrossanitários e de prevenção contra incêndio integrados ao conjunto da obra." },
  { icon: "bx-refresh", title: "Reformas e retrofit", description: "Intervenções residenciais e comerciais orientadas por necessidades reais, orçamento e viabilidade." },
];

export const fradeMedia = [
  { title: "Haus Anuário 2023", detail: "Páginas 92-93", image: "/projects/grupo-frade/media-haus-2023.webp", url: "https://revistahaus.com.br/haus/conteudo-publicitario/anuario-haus-2023/grupo-frade-arquitetura-e-engenharia/" },
  { title: "Haus Anuário 2022", detail: "Páginas 126-127", image: "/projects/grupo-frade/media-haus-2022.webp", url: "https://revistahaus.com.br/haus/conteudo-publicitario/anuario-2022/frade-arquitetura-e-engenharia/" },
  { title: "Revista Business", detail: "Portal Gerson Lima, páginas 64-67", image: "/projects/grupo-frade/media-business.webp", url: "https://issuu.com/raquellima65/docs/revista_business_mar2022_db0da1ef03f371" },
  { title: "Brasil Fashion News", detail: "Modernidade e praticidade para o convívio familiar", image: "/projects/grupo-frade/home-02.webp", url: "https://www.brasilfashionnews.com.br/modernidade-e-praticidade-para-o-convivio-familiar/" },
  { title: "Divirta-se Curitiba", detail: "Projeto residencial em destaque", image: "/projects/grupo-frade/home-03.webp", url: "https://divirtasecuritiba.com/2022/02/25/modernidade-e-praticidade-para-o-convivio-familiar/" },
  { title: "Entrevista RPC", detail: "Rede Globo Paraná, lei de reformas e acompanhamento técnico", image: "/projects/grupo-frade/media-rpc.webp", url: undefined },
  { title: "Revista Casa Sul", detail: "Edições 85 e 82", image: "/projects/grupo-frade/media-haus-2022.webp", url: undefined },
];

export const fradeClients = [
  { name: "Clínica Dr. Herton", image: "/projects/grupo-frade/client-herton.jpg" },
  { name: "Escrilex", image: "/projects/grupo-frade/client-escrilex.jpg" },
  { name: "Cliente comercial", image: "/projects/grupo-frade/client-logo.jpg" },
  { name: "Vidden Investimentos", image: "/projects/grupo-frade/client-vidden.jpg" },
  { name: "Hotel Fazenda Jalapão", image: "/projects/grupo-frade/client-jalapao.png" },
  { name: "Anê Kids", image: "/projects/grupo-frade/client-ane-kids.png" },
  { name: "LAAS", image: "/projects/grupo-frade/client-laas.png" },
  { name: "UAU Hub", image: "/projects/grupo-frade/client-uau.jpg" },
  { name: "Zaz Kids", image: "/projects/grupo-frade/client-zaz.png" },
  { name: "Hostel Matilda", image: "/projects/grupo-frade/client-hostel.png" },
  { name: "Papelaria Giga", image: "/projects/grupo-frade/client-giga.jpg" },
  { name: "Crefito 8", image: "/projects/grupo-frade/client-crefito.png" },
  { name: "Amora", image: "/projects/grupo-frade/client-13.jpg" },
  { name: "Marca do portfólio Grupo Frade", image: "/projects/grupo-frade/client-14.png" },
  { name: "Marca do portfólio Grupo Frade", image: "/projects/grupo-frade/client-15.png" },
  { name: "Marca do portfólio Grupo Frade", image: "/projects/grupo-frade/client-16.jpeg" },
  { name: "Marca do portfólio Grupo Frade", image: "/projects/grupo-frade/client-17.png" },
  { name: "Marca do portfólio Grupo Frade", image: "/projects/grupo-frade/client-18.webp" },
  { name: "Marca do portfólio Grupo Frade", image: "/projects/grupo-frade/client-19.png" },
  { name: "Lanna", image: "/projects/grupo-frade/client-lanna.jpg" },
  { name: "Marca do portfólio Grupo Frade", image: "/projects/grupo-frade/client-21.jpg" },
  { name: "Honda Motos", image: "/projects/grupo-frade/client-honda.png" },
  { name: "Caltec", image: "/projects/grupo-frade/client-caltec.jpg" },
  { name: "Marca do portfólio Grupo Frade", image: "/projects/grupo-frade/client-24.png" },
  { name: "Marca do portfólio Grupo Frade", image: "/projects/grupo-frade/client-25.jpeg" },
  { name: "Clínica Dr. França", image: "/projects/grupo-frade/client-franca.webp" },
  { name: "Marca do portfólio Grupo Frade", image: "/projects/grupo-frade/client-27.png" },
  { name: "Robosystem", image: "/projects/grupo-frade/client-robosystem.jpg" },
  { name: "Marca do portfólio Grupo Frade", image: "/projects/grupo-frade/client-29.jpg" },
  { name: "Beauty2Be", image: "/projects/grupo-frade/client-beauty2be.jpeg" },
  { name: "Luigi Pietro", image: "/projects/grupo-frade/client-luigi.jpg" },
  { name: "Clínica Dr. França", image: "/projects/grupo-frade/client-32.jpg" },
];

export const grupoFrade = {
  name: "Grupo Frade Arquitetura e Engenharia",
  slug: "grupo-frade",
  category: "ARCHITECTURE_ENGINEERING",
  description: "Arquitetura, interiores, retrofit e engenharia estrutural desenvolvidos de forma integrada pelo Grupo Frade, em Curitiba.",
  city: "Curitiba",
  state: "PR",
  address: "Rua Brasílio Itiberê, 3727 - Água Verde, Curitiba - PR, 80240-060",
  phone: "+55 41 98403-8832",
  whatsapp: "5541984038832",
  website: "https://www.grupofrade.com.br/",
  sourceUrl: "https://www.grupofrade.com.br/",
  socialLinks: {
    instagram: "https://www.instagram.com/grupofrade/",
    facebook: "https://www.facebook.com/grupofrade.arqeng",
    youtube: "https://www.youtube.com/@grupofrade8944",
    linkedin: "https://www.linkedin.com/company/grupo-frade-arquitetura-e-engenharia/",
  },
  status: "READY",
  portfolio: {
    title: "Grupo Frade",
    summary: "Microsite editorial de arquitetura, interiores e engenharia estrutural com acervo de projetos, equipe, mídia e contato.",
    cover: "/projects/grupo-frade/hero.webp",
  },
  branding: {
    wordmark: "Grupo Frade",
    logo: "/projects/grupo-frade/logo.png",
    accent: "#8a7f74",
  },
  images: {
    hero: "/projects/grupo-frade/hero.webp",
    sculpture: "/projects/grupo-frade/estrutura-01.webp",
    signals: "/projects/grupo-frade/team.webp",
  },
  capabilities: fradeServices.map(({ title, description }) => ({ title, description })),
} satisfies ProspectBusiness;
