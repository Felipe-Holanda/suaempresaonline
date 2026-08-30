import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { AgencyPreview } from "@/components/business/AgencyPreview";
import { AgroPreview } from "@/components/business/AgroPreview";
import { AccountingPreview } from "@/components/business/AccountingPreview";
import { getProspect, prospects } from "@/prospects";

export function generateStaticParams() {
  return Object.keys(prospects).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const business = getProspect(slug);
  return {
    title: business ? `${business.name} | Prévia visual` : "Prévia não encontrada",
    description: business?.description,
    robots: { index: false, follow: false, nocache: true },
  };
}

export async function generateViewport({ params }: { params: Promise<{ slug: string }> }): Promise<Viewport> {
  const { slug } = await params;
  const category = getProspect(slug)?.category;
  return { themeColor: category === "AGRO" ? "#033c22" : category === "ACCOUNTING" ? "#22268f" : "#080808" };
}

export default async function PreviewPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const business = getProspect(slug);
  if (!business) notFound();
  if (business.category === "AGRO") return <AgroPreview business={business} />;
  if (business.category === "ACCOUNTING") return <AccountingPreview business={business} />;
  return <AgencyPreview business={business} />;
}
