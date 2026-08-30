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
