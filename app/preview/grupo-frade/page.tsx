import Image from "next/image";
import Link from "next/link";
import { FradeProjectFigure } from "@/components/business/grupo-frade/FradeProjectFigure";
import { fradeMedia, fradeResidentialProjects, fradeServices, grupoFrade } from "@/prospects/grupo-frade/config";

export default function GrupoFradeHome() {
  const featuredProjects = [fradeResidentialProjects[0], fradeResidentialProjects[5], fradeResidentialProjects[2]];

  return (
    <main>
      <section className="frade-hero">
        <div className="frade-hero-copy">
          <p className="frade-kicker">Arquitetura e engenharia integradas</p>
          <h1>Forma e estrutura em diálogo.</h1>
          <p>Projetos arquitetônicos, interiores e estruturas pensados de forma integrada para residências, negócios e obras.</p>
          <div className="frade-actions">
            <Link className="frade-button frade-button-dark" href="/preview/grupo-frade/projetos">Conhecer projetos</Link>
            <Link className="frade-text-link" href="/preview/grupo-frade/contato">Solicitar orçamento <i className="bx bx-right-arrow-alt" aria-hidden="true" /></Link>
          </div>
        </div>
        <div className="frade-hero-visual">
          <Image src={grupoFrade.images.hero} alt="Projeto arquitetônico residencial do Grupo Frade" fill priority sizes="(max-width: 820px) 100vw, 60vw" />
        </div>
      </section>

      <section className="frade-practice-strip" aria-label="Áreas de atuação">
        <span>Arquitetura</span>
        <span>Interiores</span>
        <span>Estruturas</span>
        <span>Retrofit</span>
      </section>

      <section className="frade-section frade-featured">
        <div className="frade-section-intro">
          <h2>Espaços que começam pela escuta.</h2>
          <p>Residências e ambientes comerciais concebidos para responder à rotina, à identidade e às condições reais de cada projeto.</p>
        </div>
        <div className="frade-featured-grid">
          {featuredProjects.map((project, index) => <FradeProjectFigure key={project.name} project={project} priority={index === 0} />)}
        </div>
        <Link className="frade-index-link" href="/preview/grupo-frade/projetos">Ver acervo de projetos <i className="bx bx-chevron-right" aria-hidden="true" /></Link>
      </section>

      <section className="frade-section frade-service-composition">
        <div className="frade-service-title">
          <h2>Da ideia ao detalhe construtivo.</h2>
          <p>Uma prática multidisciplinar para desenvolver e compatibilizar as decisões que formam cada obra.</p>
        </div>
        <div className="frade-service-list">
          {fradeServices.map((service) => (
            <article key={service.title}>
              <i className={`bx ${service.icon}`} aria-hidden="true" />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="frade-engineering-feature">
        <div className="frade-engineering-image">
          <Image src="/projects/grupo-frade/estrutura-01.webp" alt="Modelo de projeto estrutural desenvolvido pela GF Estruturas" fill sizes="(max-width: 820px) 100vw, 56vw" />
        </div>
        <div className="frade-engineering-copy">
          <p className="frade-kicker">GF Estruturas</p>
          <h2>Precisão que sustenta a arquitetura.</h2>
          <p>Projetos em concreto armado, protendido e sistemas mistos, com análise estrutural, fundações e compatibilização.</p>
          <Link className="frade-button frade-button-light" href="/preview/grupo-frade/engenharia">Explorar engenharia</Link>
        </div>
      </section>

      <section className="frade-section frade-studio-preview">
        <div className="frade-studio-copy">
          <h2>Um grupo formado em família, ampliado por diferentes especialidades.</h2>
          <p>Arquitetos e engenheiro reúnem repertório em projetos, interiores, estruturas e gestão para acompanhar decisões de diferentes escalas.</p>
          <Link className="frade-text-link" href="/preview/grupo-frade/escritorio">Conhecer o escritório <i className="bx bx-right-arrow-alt" aria-hidden="true" /></Link>
        </div>
        <div className="frade-studio-image">
          <Image src="/projects/grupo-frade/team.webp" alt="Equipe do Grupo Frade Arquitetura e Engenharia" fill sizes="(max-width: 820px) 100vw, 58vw" />
        </div>
      </section>

      <section className="frade-section frade-media-preview">
        <h2>Projetos em circulação.</h2>
        <div className="frade-media-preview-grid">
          {fradeMedia.slice(0, 3).map((item) => (
            <a key={item.title} href={item.url} target="_blank" rel="noreferrer">
              <div><Image src={item.image} alt={`Publicação ${item.title} com participação do Grupo Frade`} fill sizes="(max-width: 720px) 100vw, 33vw" /></div>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
              <i className="bx bx-link-external" aria-hidden="true" />
            </a>
          ))}
        </div>
        <Link className="frade-index-link" href="/preview/grupo-frade/midia">Ver todas as publicações <i className="bx bx-chevron-right" aria-hidden="true" /></Link>
      </section>

      <section className="frade-contact-band">
        <p>Tem um projeto em mente?</p>
        <h2>Vamos conversar sobre o espaço, a estrutura e o caminho até a obra.</h2>
        <a className="frade-button frade-button-dark" href={`https://wa.me/${grupoFrade.whatsapp}`} target="_blank" rel="noreferrer">Solicitar orçamento</a>
      </section>
    </main>
  );
}
