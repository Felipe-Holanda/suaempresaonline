import type { ProspectBusiness } from "@/prospects";
import { Reveal } from "@/components/ui/Reveal";
import Image from "next/image";

function BoxIcon({ name }: { name: string }) {
  return <i className={`bx ${name}`} aria-hidden="true" />;
}

function Arrow() {
  return <BoxIcon name="bx-right-arrow-alt" />;
}

export function LawPreview({ business }: { business: ProspectBusiness }) {
  const phoneUrl = `tel:${business.phone?.replace(/[^\d+]/g, "")}`;
  const whatsappUrl = `https://wa.me/${business.whatsapp ?? business.phone?.replace(/\D/g, "")}`;
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(business.address ?? business.name)}`;

  return (
    <main className="law-site">
      <a className="law-skip" href="#conteudo">Pular para o conteúdo</a>

      <header className="law-nav">
        <a className="law-brand" href="#conteudo" aria-label={`${business.name}, início`} translate="no">
          <Image src={business.branding?.logo ?? business.images?.signals ?? ""} alt="Anchieta Advogados" width={430} height={160} priority />
        </a>
        <nav aria-label="Navegação principal">
          <a href="#atuacao">Atuação</a>
          <a href="#escritorio">Escritório</a>
          <a href="#contato">Contato</a>
        </nav>
        <a className="law-nav-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer"><BoxIcon name="bxl-whatsapp" /> WhatsApp <Arrow /></a>
      </header>

      <section className="law-hero" id="conteudo">
        <div className="law-hero-copy">
          <p className="law-kicker"><span>Anchieta</span> Advocacia em Augustinópolis</p>
          <h1>Defesa com<br /><em>presença.</em></h1>
          <p className="law-hero-lede">Escritório especializado em Direito Criminal e Militar, sediado em Augustinópolis, Tocantins.</p>
          <div className="law-hero-actions">
            <a className="law-primary-link" href={whatsappUrl} target="_blank" rel="noreferrer"><BoxIcon name="bxl-whatsapp" /> Falar pelo WhatsApp <Arrow /></a>
            <a className="law-secondary-link" href={phoneUrl}>Ligar para o escritório</a>
          </div>
        </div>
        <div className="law-hero-visual" aria-label="Identidade visual do escritório Anchieta Advogados">
          <div className="law-hero-frame">
            <Image src={business.images?.hero ?? ""} alt="Dama da Justiça vendada segurando uma balança" fill priority sizes="(max-width: 700px) 92vw, 44vw" />
          </div>
          <div className="law-hero-caption"><span>Anchieta Advogados</span><span>Criminal / Militar</span></div>
          <BoxIcon name="bx-shield-quarter" />
        </div>
      </section>

      <section className="law-statement">
        <div className="law-statement-rule" aria-hidden="true" />
        <p>Um escritório para momentos que pedem atenção, preparo e responsabilidade.</p>
        <span>Augustinópolis / TO</span>
      </section>

      <section className="law-areas" id="atuacao">
        <div className="law-section-heading">
          <p className="law-kicker"><span>Áreas</span> Áreas de atuação</p>
          <h2>O direito em<br /><em>duas frentes.</em></h2>
        </div>
        <div className="law-area-list">
          {business.serviceGroups?.map((group, index) => (
            <Reveal className="law-area" delay={index * 100} key={group.title}>
              <div className="law-area-number">0{index + 1}</div>
              <BoxIcon name={index === 0 ? "bx-book-open" : "bx-shield-quarter"} />
              <div><h3>{group.title}</h3><p>{group.items[0]}</p></div>
              <Arrow />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="law-principle">
        <div className="law-principle-art">
          <Image src={business.images?.sculpture ?? business.images?.hero ?? ""} alt="Detalhe editorial da Dama da Justiça" fill sizes="(max-width: 700px) 92vw, 38vw" />
        </div>
        <Reveal className="law-principle-copy">
          <p className="law-kicker"><span>Princípio</span> Nosso trabalho</p>
          <blockquote>“Nosso trabalho é cuidar de você.”</blockquote>
          <span>Anchieta Advogados</span>
        </Reveal>
      </section>

      <section className="law-office" id="escritorio">
        <div className="law-office-mark">
          <Image src={business.images?.signals ?? business.branding?.logo ?? ""} alt="Logo Anchieta Advogados" fill sizes="(max-width: 700px) 100vw, 42vw" />
        </div>
        <div className="law-office-copy">
          <Reveal>
            <p className="law-kicker"><span>Escritório</span> O escritório</p>
            <h2>Anchieta<br /><em>Advogados.</em></h2>
            <p>Atendimento jurídico com sede no Centro de Augustinópolis, Tocantins.</p>
          </Reveal>
          {business.reviews ? <div className="law-review"><BoxIcon name="bx-message-square-detail" /><span>{business.reviews.count} avaliações no Google</span></div> : null}
        </div>
      </section>

      <section className="law-contact" id="contato">
        <div>
          <p className="law-kicker"><span>Contato</span> Atendimento</p>
          <h2>Fale com o escritório.</h2>
          <a className="law-primary-link" href={whatsappUrl} target="_blank" rel="noreferrer"><BoxIcon name="bxl-whatsapp" /> Agendar pelo WhatsApp <Arrow /></a>
        </div>
        <address>
          <strong>Onde estamos</strong>
          <span>{business.address}</span>
          <a href={mapsUrl} target="_blank" rel="noreferrer">Abrir no mapa <Arrow /></a>
          <a href={phoneUrl}>Ligar {business.phone}</a>
        </address>
      </section>

      <footer className="law-footer">
        <div className="law-footer-brand"><Image src={business.branding?.logo ?? ""} alt="Anchieta Advogados" width={330} height={123} /></div>
        <div className="law-footer-links"><a href={business.socialLinks?.instagram} target="_blank" rel="noreferrer"><BoxIcon name="bxl-instagram" /> Instagram <Arrow /></a><a href={business.socialLinks?.facebook} target="_blank" rel="noreferrer"><BoxIcon name="bxl-facebook" /> Facebook <Arrow /></a></div>
        <p>Demonstração visual independente. Não é o site oficial do escritório.</p>
      </footer>
    </main>
  );
}
