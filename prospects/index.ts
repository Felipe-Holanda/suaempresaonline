import { agenciaWei } from "@/prospects/agencia-wei/config";
import type { ProspectBusiness } from "@/prospects/types";

export const prospects: Record<string, ProspectBusiness> = {
  [agenciaWei.slug]: agenciaWei,
};

export const prospectList = Object.values(prospects);

export function getProspect(slug: string) {
  return prospects[slug];
}

export type { ProspectBusiness } from "@/prospects/types";
