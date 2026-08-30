import Image from "next/image";
import Link from "next/link";
import type { ProspectBusiness } from "@/prospects";

export function ProjectGrid({ projects }: { projects: ProspectBusiness[] }) {
  if (projects.length === 0) {
    return <div className="portfolio-empty"><h2>Nenhum projeto publicado.</h2><p>As próximas prévias aparecerão aqui.</p></div>;
  }

  return (
    <div className="portfolio-grid">
      {projects.map((project) => (
        <Link className="project-card" href={`/preview/${project.slug}`} key={project.slug}>
          <Image src={project.portfolio.cover} alt={`Prévia visual do projeto ${project.portfolio.title}`} fill sizes="(max-width: 767px) 100vw, 50vw" />
          <div className="project-card-shade" aria-hidden="true" />
          <div className="project-card-content">
            <span>{project.city}, {project.state}</span>
            <h2>{project.portfolio.title}</h2>
            <p>{project.portfolio.summary}</p>
          </div>
          <span className="project-card-arrow" aria-hidden="true"><i className="bx bx-right-arrow-alt" aria-hidden="true" /></span>
        </Link>
      ))}
    </div>
  );
}
