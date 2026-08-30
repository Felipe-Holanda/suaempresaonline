import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AgencyPreview } from "@/components/business/AgencyPreview";
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

export default async function PreviewPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const business = getProspect(slug);
  if (!business) notFound();
  return <AgencyPreview business={business} />;
}
