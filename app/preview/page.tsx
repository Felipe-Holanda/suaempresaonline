import type { Metadata } from "next";
import Link from "next/link";
import { ProjectGrid } from "@/components/portfolio/ProjectGrid";
import { prospectList } from "@/prospects";

export const metadata: Metadata = {
  title: "Projetos | 8Vault Solutions",
  description: "Projetos de presença digital desenvolvidos pela 8Vault Solutions.",
  robots: { index: false, follow: false },
};

export default function PortfolioPage() {
  return (
    <main className="portfolio-page">
      <a className="portfolio-skip" href="#projetos">Pular para os projetos</a>
      <header className="portfolio-nav">
        <Link className="portfolio-brand" href="/" translate="no">8Vault Solutions</Link>
        <Link href="/">Voltar para a apresentação</Link>
      </header>
      <section className="portfolio-intro" id="projetos">
        <p>Projetos e prévias</p>
        <h1>Cada negócio pede<br />uma presença diferente.</h1>
        <span>Selecione um projeto para abrir a experiência completa.</span>
      </section>
      <ProjectGrid projects={prospectList} />
      <footer className="portfolio-footer">
        <span translate="no">8Vault Solutions</span>
        <Link href="/">Conhecer a solução</Link>
      </footer>
    </main>
  );
}
