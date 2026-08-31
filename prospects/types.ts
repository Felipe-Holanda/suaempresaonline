export type ProspectStatus = "DRAFT" | "READY" | "SENT" | "VIEWED" | "INTERESTED" | "CONVERTED" | "ARCHIVED";

export interface ProspectBusiness {
  name: string;
  slug: string;
  category: "AGENCY" | "AGRO" | "ACCOUNTING" | "LAW" | "EQUIPMENT_RENTAL" | "ARCHITECTURE_ENGINEERING" | "CONSTRUCTION" | "SOLAR_ENGINEERING" | "GENERIC";
  description: string;
  city: string;
  state: string;
  address?: string;
  foundedAt?: string;
  founders?: string[];
  socialLinks?: { instagram?: string; facebook?: string; youtube?: string; linkedin?: string };
  phone?: string;
  whatsapp?: string;
  hours?: Array<{ days: string; time: string }>;
  delivery?: string;
  catalogUrl?: string;
  areasServed?: string[];
  locations?: Array<{ city: string; address: string }>;
  website?: string;
  reviews?: { count: number; quote?: string; author?: string };
  serviceGroups?: Array<{ title: string; items: string[] }>;
  productGroups?: Array<{ title: string; items: string[] }>;
  sourceUrl?: string;
  status: ProspectStatus;
  portfolio: {
    title: string;
    summary: string;
    cover: string;
  };
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
