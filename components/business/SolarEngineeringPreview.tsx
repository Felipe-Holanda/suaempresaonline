import Image from "next/image";
import type { ProspectBusiness } from "@/prospects";
import { jslProjects } from "@/prospects/jsl-engenharia/config";
import { Reveal } from "@/components/ui/Reveal";

function Icon({ name }: { name: string }) {
  return <i className={`bx ${name}`} aria-hidden="true" />;
}

const testimonials = [
  {
    quote: "Excelente empresa. Concluiu a instalação antes do prazo estabelecido e tem um pós-venda de excelência.",
    author: "Josivaldo Silva dos Santos",
  },
  {
    quote: "Ótima instalação e pós-venda eficiente. Aprovado e recomendo.",
    author: "Rosemberg Oliveira",
  },
  {
    quote: "Melhor atendimento do Brasil. Equipe bem treinada, com as melhores formas de pagamento.",
    author: "RAMONzn",
  },
];

export function SolarEngineeringPreview({ business }: { business: ProspectBusiness }) {
  const whatsappUrl = `https://wa.me/${business.whatsapp}?text=${encodeURIComponent("Olá! Gostaria de solicitar um orçamento de energia solar com a JSL Engenharia.")}`;
  const phoneUrl = `tel:${business.phone?.replace(/[^\d+]/g, "")}`;
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(business.address ?? business.name)}`;
  const instagram = business.socialLinks?.instagram;

  return (
    <main className="jsl-site">
      <a className="jsl-skip" href="#conteudo">Pular para o conteúdo</a>

      <header className="jsl-nav">
        <a className="jsl-brand" href="#conteudo" aria-label="JSL Engenharia e Energia Solar, início">
          <Image src="/projects/jsl-engenharia/jsl-symbol-clean2.png" alt="" width={138} height={100} priority />
          <span><strong>Engenharia</strong><small>e energia solar</small></span>
        </a>
        <nav aria-label="Navegação principal">
          <a href="#solucoes">Soluções</a>
          <a href="#projetos">Projetos</a>
          <a href="#experiencia">Avaliações</a>
        </nav>
        <a className="jsl-nav-action" href={whatsappUrl} target="_blank" rel="noreferrer">
          Solicitar orçamento <Icon name="bx-right-arrow-alt" />
        </a>
      </header>

      <section className="jsl-hero" id="conteudo">
        <Image src={business.images.hero} alt="Vista aérea de sistema fotovoltaico instalado pela JSL Engenharia" fill priority sizes="100vw" />
        <div className="jsl-hero-shade" aria-hidden="true" />
        <div className="jsl-sun-orbit" aria-hidden="true"><span /></div>
        <div className="jsl-hero-copy">
          <p className="jsl-eyebrow">Engenharia civil e energia solar</p>
          <h1><span>Sua conta muda.</span><span>O futuro também.</span></h1>
          <p>Projetos fotovoltaicos com instalação eficiente e pós-venda presente no Bico do Papagaio.</p>
          <div className="jsl-hero-actions">
            <a className="jsl-primary" href={whatsappUrl} target="_blank" rel="noreferrer">Solicitar orçamento <Icon name="bxl-whatsapp" /></a>
            <a className="jsl-secondary" href="#projetos">Conhecer projetos <Icon name="bx-down-arrow-alt" /></a>
          </div>
        </div>
      </section>

      <section className="jsl-trust" aria-label="Indicadores de confiança">
        <div><strong>5,0</strong><span><Icon name="bxs-star" /> nota no Google</span></div>
        <div><strong>6</strong><span>avaliações públicas</span></div>
        <div><strong>4</strong><span>projetos documentados</span></div>
        <div><Icon name="bx-check-shield" /><span>Instalação e pós-venda reconhecidos</span></div>
      </section>

      <section className="jsl-intro" id="solucoes">
        <Reveal className="jsl-intro-copy">
          <h2>Do consumo à geração.</h2>
          <p>A JSL dimensiona, instala e acompanha cada sistema para transformar radiação solar em economia real.</p>
        </Reveal>
        <Reveal className="jsl-intro-image" delay={100}>
          <Image src={business.images.sculpture} alt="Sistema fotovoltaico em solo instalado em uma fazenda" fill sizes="(max-width: 760px) 100vw, 55vw" />
        </Reveal>
      </section>

      <section className="jsl-solutions">
        <div className="jsl-solution-visual">
          <Image src={business.images.signals} alt="Painéis solares instalados sobre cobertura residencial" fill sizes="(max-width: 760px) 100vw, 48vw" />
        </div>
        <div className="jsl-solution-content">
          <Reveal><h2>Engenharia em cada decisão.</h2></Reveal>
          <div className="jsl-solution-list">
            {business.serviceGroups?.map((service, index) => (
              <Reveal className="jsl-solution" delay={index * 80} key={service.title}>
                <Icon name={index === 0 ? "bx-sun" : index === 1 ? "bx-support" : "bx-buildings"} />
                <div><h3>{service.title}</h3><p>{service.items[0]}</p></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="jsl-projects" id="projetos">
        <Reveal className="jsl-projects-heading">
          <h2>Projetos que já estão gerando.</h2>
          <p>Portfólio publicado pela JSL no Behance.</p>
        </Reveal>
        <div className="jsl-project-grid">
          {jslProjects.map((project, index) => (
            <Reveal className={`jsl-project jsl-project-${index + 1}`} delay={index * 70} key={project.url}>
              <a href={project.url} target="_blank" rel="noreferrer" aria-label={`Ver projeto ${project.client} no Behance`}>
                <figure>
                  <div className="jsl-project-image"><Image src={project.cover} alt={`Sistema solar de ${project.client} em ${project.location}`} fill sizes={index === 0 ? "(max-width: 760px) 100vw, 60vw" : "(max-width: 760px) 100vw, 38vw"} /></div>
                  <figcaption>
                    <div><strong>{project.client}</strong><span>{project.location}</span></div>
                    <Icon name="bx-link-external" />
                  </figcaption>
                </figure>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="jsl-case">
        <div className="jsl-case-image">
          <Image src={jslProjects[1].installation} alt="Usina fotovoltaica em solo da Fazenda Mozaniel" fill sizes="(max-width: 760px) 100vw, 58vw" />
        </div>
        <div className="jsl-case-copy">
          <Reveal>
            <p>Fazenda Mozaniel</p>
            <h2>Energia solar aplicada à produção.</h2>
          </Reveal>
          <div className="jsl-case-numbers">
            <div><strong>44</strong><span>painéis</span></div>
            <div><strong>22,00</strong><span>kWp de potência</span></div>
            <div><strong>R$ 3.040</strong><span>economia mensal informada</span></div>
          </div>
          <a href={jslProjects[1].url} target="_blank" rel="noreferrer">Ver projeto completo <Icon name="bx-link-external" /></a>
        </div>
      </section>

      <section className="jsl-method">
        <Reveal className="jsl-method-title"><h2>Precisão do início ao pós-venda.</h2></Reveal>
        <div className="jsl-method-flow">
          {business.capabilities.map((item, index) => (
            <Reveal className="jsl-method-item" delay={index * 80} key={item.title}>
              <Icon name={index === 0 ? "bx-ruler" : index === 1 ? "bx-wrench" : "bx-conversation"} />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="jsl-reviews" id="experiencia">
        <Reveal className="jsl-reviews-score">
          <span>Experiência dos clientes</span>
          <strong>5,0</strong>
          <div aria-label="Cinco estrelas"><Icon name="bxs-star" /><Icon name="bxs-star" /><Icon name="bxs-star" /><Icon name="bxs-star" /><Icon name="bxs-star" /></div>
          <p>Baseado em {business.reviews?.count} avaliações no Google.</p>
        </Reveal>
        <div className="jsl-review-stack">
          {testimonials.map((testimonial, index) => (
            <Reveal className="jsl-review" delay={index * 80} key={testimonial.author}>
              <Icon name="bxs-quote-left" />
              <blockquote>{testimonial.quote}</blockquote>
              <cite>{testimonial.author}</cite>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="jsl-contact" id="contato">
        <div className="jsl-contact-image"><Image src="/projects/jsl-engenharia/jaime-installation-03.webp" alt="Vista aérea de instalação fotovoltaica da JSL Engenharia" fill sizes="(max-width: 760px) 100vw, 48vw" /></div>
        <div className="jsl-contact-copy">
          <Image src="/projects/jsl-engenharia/jsl-logo-light-clean2.png" alt="JSL Engenharia e Energia Solar" width={301} height={162} />
          <Reveal>
            <h2>Seu projeto começa com uma conversa.</h2>
            <a className="jsl-primary" href={whatsappUrl} target="_blank" rel="noreferrer">Solicitar orçamento <Icon name="bxl-whatsapp" /></a>
          </Reveal>
          <div className="jsl-contact-data">
            <div><span>Telefone</span><a href={phoneUrl}>{business.phone}</a></div>
            <div><span>Escritório</span><address>{business.address}</address><a href={mapsUrl} target="_blank" rel="noreferrer">Abrir no mapa <Icon name="bx-link-external" /></a></div>
          </div>
        </div>
      </section>

      <footer className="jsl-footer">
        <Image src="/projects/jsl-engenharia/jsl-logo-light-clean2.png" alt="JSL Engenharia e Energia Solar" width={301} height={162} />
        <p>Demonstração visual independente. Não é o site oficial da JSL Engenharia.</p>
        <div>
          {instagram ? <a href={instagram} target="_blank" rel="noreferrer"><Icon name="bxl-instagram" /> Instagram</a> : null}
          <a href={business.sourceUrl} target="_blank" rel="noreferrer"><Icon name="bxl-behance" /> Behance</a>
        </div>
      </footer>
    </main>
  );
}
