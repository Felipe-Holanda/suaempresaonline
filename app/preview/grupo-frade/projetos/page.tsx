import type { Metadata } from "next";
import { FradeProjectFigure } from "@/components/business/grupo-frade/FradeProjectFigure";
import { fradeCommercialProjects, fradeResidentialProjects } from "@/prospects/grupo-frade/config";

export const metadata: Metadata = { title: "Projetos", description: "Projetos residenciais e comerciais do Grupo Frade." };

export default function FradeProjectsPage() {
  return (
    <main>
      <header className="frade-page-hero frade-projects-hero">
        <p className="frade-kicker">Portfólio</p>
        <h1>Arquitetura que traduz modos de viver e trabalhar.</h1>
        <p>Uma seleção de residências, apartamentos e espaços comerciais desenvolvidos em diferentes cidades brasileiras.</p>
      </header>

      <section className="frade-project-collection">
        <div className="frade-collection-heading">
          <h2>Residencial</h2>
          <p>Casas e apartamentos desenhados a partir das necessidades, da rotina e do contexto de cada cliente.</p>
        </div>
        <div className="frade-project-masonry">
          {fradeResidentialProjects.map((project, index) => <FradeProjectFigure key={project.name} project={project} priority={index < 2} />)}
        </div>
      </section>

      <section className="frade-project-collection frade-commercial-collection">
        <div className="frade-collection-heading">
          <h2>Comercial</h2>
          <p>Ambientes que alinham identidade, operação e experiência para empresas de diferentes segmentos.</p>
        </div>
        <div className="frade-project-masonry frade-project-masonry-commercial">
          {fradeCommercialProjects.map((project) => <FradeProjectFigure key={project.name} project={project} />)}
        </div>
      </section>
    </main>
  );
}
