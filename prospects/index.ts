import { agenciaWei } from "@/prospects/agencia-wei/config";
import { agrosaul } from "@/prospects/agrosaul/config";
import { anacletoContabilidade } from "@/prospects/anacleto-contabilidade/config";
import { anchietaAdvogados } from "@/prospects/anchieta-advogados/config";
import type { ProspectBusiness } from "@/prospects/types";

export const prospects: Record<string, ProspectBusiness> = {
  [agenciaWei.slug]: agenciaWei,
  [agrosaul.slug]: agrosaul,
  [anacletoContabilidade.slug]: anacletoContabilidade,
  [anchietaAdvogados.slug]: anchietaAdvogados,
};

export const prospectList = Object.values(prospects);

export function getProspect(slug: string) {
  return prospects[slug];
}

export type { ProspectBusiness } from "@/prospects/types";
