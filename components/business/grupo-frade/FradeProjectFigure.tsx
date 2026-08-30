import Image from "next/image";
import type { FradeProject } from "@/prospects/grupo-frade/config";

export function FradeProjectFigure({ project, priority = false }: { project: FradeProject; priority?: boolean }) {
  return (
    <figure className="frade-project-figure">
      <div className="frade-project-image">
        <Image src={project.image} alt={`${project.name}, projeto do Grupo Frade em ${project.location}`} fill sizes="(max-width: 760px) 100vw, 50vw" priority={priority} />
      </div>
      <figcaption>
        <h3>{project.name}</h3>
        <p>{project.location}</p>
      </figcaption>
    </figure>
  );
}
