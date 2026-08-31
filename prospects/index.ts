import { agenciaWei } from "@/prospects/agencia-wei/config";
import { agrosaul } from "@/prospects/agrosaul/config";
import { anacletoContabilidade } from "@/prospects/anacleto-contabilidade/config";
import { anchietaAdvogados } from "@/prospects/anchieta-advogados/config";
import { equiparLocacao } from "@/prospects/equipar-locacao/config";
import { grupoFrade } from "@/prospects/grupo-frade/config";
import { rlConstrutora } from "@/prospects/rl-construtora/config";
import { jslEngenharia } from "@/prospects/jsl-engenharia/config";
import type { ProspectBusiness } from "@/prospects/types";

export const prospects: Record<string, ProspectBusiness> = {
  [agenciaWei.slug]: agenciaWei,
  [agrosaul.slug]: agrosaul,
  [anacletoContabilidade.slug]: anacletoContabilidade,
  [anchietaAdvogados.slug]: anchietaAdvogados,
  [equiparLocacao.slug]: equiparLocacao,
  [grupoFrade.slug]: grupoFrade,
  [rlConstrutora.slug]: rlConstrutora,
  [jslEngenharia.slug]: jslEngenharia,
};

export const prospectList = Object.values(prospects);

export function getProspect(slug: string) {
  return prospects[slug];
}

export type { ProspectBusiness } from "@/prospects/types";
