import Image from "next/image";
import type { ProspectBusiness } from "@/prospects";
import { Reveal } from "@/components/ui/Reveal";

function Icon({ name }: { name: string }) {
  return <i className={`bx ${name}`} aria-hidden="true" />;
}

function BrandMark() {
  return (
    <span className="rl-brand-mark" aria-hidden="true">
      <span>RL</span>
    </span>
  );
}

const projectImages = [
  { src: "/projects/rl-construtora/residencia-02.webp", title: "Residência urbana", kind: "Arquitetura residencial" },
  { src: "/projects/rl-construtora/comercial-01.webp", title: "Fachada profissional", kind: "Arquitetura comercial" },
  { src: "/projects/rl-construtora/residencia-03.webp", title: "Casa contemporânea", kind: "Obra particular" },
];

export function ConstructionPreview({ business }: { business: ProspectBusiness }) {
  const whatsappUrl = `https://wa.me/${business.whatsapp}?text=${encodeURIComponent("Olá! Gostaria de conversar sobre uma obra com a RL Construtora.")}`;
  const phoneUrl = `tel:${business.phone?.replace(/[^\d+]/g, "")}`;
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(business.address ?? business.name)}`;

  return (
    <main className="rl-site">
      <a className="rl-skip" href="#conteudo">Pular para o conteúdo</a>

      <header className="rl-nav">
        <a className="rl-brand" href="#conteudo" aria-label="RL Construtora, início">
          <BrandMark />
          <span><strong>Construtora</strong><small>e Incorporadora</small></span>
        </a>
        <nav aria-label="Navegação principal">
          <a href="#obras">Obras</a>
          <a href="#servicos">Serviços</a>
          <a href="#contato">Contato</a>
        </nav>
        <a className="rl-nav-contact" href={whatsappUrl} target="_blank" rel="noreferrer">
          Orçar uma obra <Icon name="bx-right-arrow-alt" />
        </a>
      </header>

      <section className="rl-hero" id="conteudo">
        <div className="rl-hero-copy">
          <p className="rl-eyebrow">Construtora em Augustinópolis</p>
          <h1><span>Do terreno</span><span>à entrega.</span></h1>
          <p>Construção e incorporação para obras particulares em Augustinópolis.</p>
          <a className="rl-primary" href={whatsappUrl} target="_blank" rel="noreferrer">
            Conversar sobre minha obra <Icon name="bxl-whatsapp" />
          </a>
        </div>
        <div className="rl-hero-image">
          <Image src={business.images.hero} alt="Projeto de residência contemporânea apresentado pela RL Construtora" fill priority sizes="(max-width: 760px) 100vw, 66vw" />
        </div>
      </section>

      <section className="rl-proof" aria-label="Informações da empresa">
        <div className="rl-rating"><strong>4,0</strong><span><Icon name="bxs-star" /><Icon name="bxs-star" /><Icon name="bxs-star" /><Icon name="bxs-star" /></span><small>{business.reviews?.count} avaliações no Google</small></div>
        <div><Icon name="bx-buildings" /><span>Atuação</span><strong>Novas construções</strong></div>
        <div><Icon name="bx-map" /><span>Endereço</span><strong>Av. Goiás, 1156, Centro</strong></div>
      </section>

      <section className="rl-manifest">
        <Reveal className="rl-manifest-copy">
          <h2>A gente faz<br /><em>diferente.</em></h2>
          <p>Uma obra particular pede presença, organização e decisões bem conduzidas. A RL transforma o projeto em construção.</p>
        </Reveal>
        <Reveal className="rl-manifest-image" delay={100}>
          <Image src={business.images.signals} alt="Residência contemporânea com paisagismo e garagem" fill sizes="(max-width: 760px) 100vw, 48vw" />
        </Reveal>
      </section>

      <section className="rl-projects" id="obras">
        <Reveal className="rl-projects-heading">
          <h2>Espaços que começam no papel e terminam em patrimônio.</h2>
          <p>Projetos residenciais e comerciais apresentados pela RL.</p>
        </Reveal>
        <div className="rl-project-grid">
          {projectImages.map((project, index) => (
            <Reveal className={`rl-project rl-project-${index + 1}`} delay={index * 80} key={project.src}>
              <figure>
                <div className="rl-project-image"><Image src={project.src} alt={project.title} fill sizes={index === 0 ? "(max-width: 760px) 100vw, 62vw" : "(max-width: 760px) 100vw, 38vw"} /></div>
                <figcaption><strong>{project.title}</strong><span>{project.kind}</span></figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="rl-services" id="servicos">
        <div className="rl-services-image">
          <Image src={business.images.sculpture} alt="Projeto de fachada comercial contemporânea" fill sizes="(max-width: 760px) 100vw, 46vw" />
        </div>
        <div className="rl-services-content">
          <Reveal>
            <h2>Construção para quem quer tirar o plano do papel.</h2>
          </Reveal>
          <div className="rl-service-list">
            {business.serviceGroups?.map((service, index) => (
              <Reveal className="rl-service" delay={index * 90} key={service.title}>
                <Icon name={index === 0 ? "bx-building-house" : "bx-home-alt-2"} />
                <div><h3>{service.title}</h3><p>{service.items[0]}</p></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="rl-process">
        <Reveal className="rl-process-heading">
          <h2>Clareza antes do concreto.</h2>
        </Reveal>
        <div className="rl-process-steps">
          {business.capabilities.map((step, index) => (
            <Reveal className="rl-process-step" delay={index * 80} key={step.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="rl-contact" id="contato">
        <div className="rl-contact-lead">
          <BrandMark />
          <Reveal>
            <h2>Vamos construir?</h2>
            <p>Conte para a RL o que você pretende construir.</p>
            <a className="rl-primary rl-primary-light" href={whatsappUrl} target="_blank" rel="noreferrer">
              Iniciar conversa <Icon name="bxl-whatsapp" />
            </a>
          </Reveal>
        </div>
        <div className="rl-contact-data">
          <div><span>Telefone</span><a href={phoneUrl}>{business.phone}</a></div>
          <div><span>Endereço</span><address>{business.address}</address><a href={mapsUrl} target="_blank" rel="noreferrer">Abrir no mapa <Icon name="bx-link-external" /></a></div>
        </div>
      </section>

      <footer className="rl-footer">
        <div className="rl-footer-brand"><BrandMark /><strong>RL Construtora e Incorporadora</strong></div>
        <p>Demonstração visual independente. Não é o site oficial da RL Construtora.</p>
        <a href={whatsappUrl} target="_blank" rel="noreferrer"><Icon name="bxl-whatsapp" /> WhatsApp</a>
      </footer>
    </main>
  );
}
