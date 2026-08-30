import type { Metadata } from "next";
import Image from "next/image";
import { fradeMedia } from "@/prospects/grupo-frade/config";

export const metadata: Metadata = { title: "Mídia", description: "Publicações e aparições do Grupo Frade em anuários, revistas, portais e televisão." };

export default function FradeMediaPage() {
  return (
    <main>
      <header className="frade-page-hero frade-media-hero">
        <p className="frade-kicker">Mídia e publicações</p>
        <h1>Arquitetura que também ocupa páginas, portais e televisão.</h1>
        <p>Registros editoriais e entrevistas que apresentam projetos e conhecimento técnico do Grupo Frade.</p>
      </header>
      <section className="frade-publication-grid">
        {fradeMedia.map((item, index) => {
          const content = (
            <>
              <div className="frade-publication-image"><Image src={item.image} alt={`Registro de ${item.title}`} fill priority={index < 2} sizes="(max-width: 720px) 100vw, 42vw" /></div>
              <div className="frade-publication-copy">
                <h2>{item.title}</h2>
                <p>{item.detail}</p>
                {item.url && <span>Abrir publicação <i className="bx bx-link-external" aria-hidden="true" /></span>}
              </div>
            </>
          );
          return item.url ? <a key={item.title} href={item.url} target="_blank" rel="noreferrer">{content}</a> : <article key={item.title}>{content}</article>;
        })}
      </section>
    </main>
  );
}
