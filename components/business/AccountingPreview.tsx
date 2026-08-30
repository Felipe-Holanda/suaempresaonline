import Image from "next/image";
import type { ProspectBusiness } from "@/prospects";
import { Reveal } from "@/components/ui/Reveal";

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export function AccountingPreview({ business }: { business: ProspectBusiness }) {
  const phoneUrl = `tel:${business.phone?.replace(/[^\d+]/g, "")}`;
  const whatsappUrl = `https://wa.me/${business.phone?.replace(/\D/g, "")}`;
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(business.address ?? business.name)}`;

  return (
    <main className="accounting-site">
      <a className="accounting-skip" href="#conteudo">Pular para o conteúdo</a>

      <header className="accounting-nav">
        <a className="accounting-brand" href="#conteudo" aria-label={`${business.name}, início`} translate="no">
          <span><Image src={business.branding.logo} alt="" fill priority sizes="52px" /></span>
          <strong>Anacleto<small>Contabilidade e Assessoria</small></strong>
        </a>
        <nav aria-label="Navegação principal">
          <a href="#servicos">Serviços</a>
          <a href="#escritorio">Escritório</a>
          <a href="#contato">Contato</a>
        </nav>
        <a className="accounting-contact-link" href={phoneUrl}><i aria-hidden="true" />{business.phone} <Arrow /></a>
      </header>

      <section className="accounting-hero" id="conteudo">
        <div className="accounting-hero-copy">
          <p className="accounting-kicker"><span>Contabilidade</span> Augustinópolis, TO</p>
          <h1><span>Contas</span> <em>no lugar.</em><br /><span>Decisões</span> no rumo.</h1>
          <p className="accounting-hero-lede">Apoio contábil para quem precisa enxergar a empresa com mais segurança, da abertura às escolhas que sustentam o crescimento.</p>
          <div className="accounting-hero-actions">
            <a className="accounting-text-cta" href={phoneUrl}>Falar com o escritório <Arrow /></a>
            <a className="accounting-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer"><span aria-hidden="true">◌</span> Chamar no WhatsApp</a>
          </div>
        </div>
        <div className="accounting-hero-media">
          <Image src={business.images.hero} alt="Documentos organizados, calculadora e materiais de trabalho contábil" fill priority sizes="(max-width: 760px) 100vw, 47vw" />
          <span>arquivo 01 / rotina contábil</span>
        </div>
      </section>

      <section className="accounting-ledger-strip" aria-label="Abordagem de atendimento">
        <div><b>01</b><span>Diagnóstico</span></div>
        <div><b>02</b><span>Organização</span></div>
        <div><b>03</b><span>Orientação contínua</span></div>
      </section>

      <section className="accounting-services" id="servicos">
        <div className="accounting-section-heading">
          <p className="accounting-kicker"><span>Índice</span> serviços</p>
          <h2>Uma contabilidade<br /><i>que acompanha.</i></h2>
          <p>Um olhar próximo para as rotinas, os documentos e as decisões que movem cada empresa.</p>
        </div>
        <div className="accounting-service-index">
          {business.serviceGroups?.map((group, index) => (
            <Reveal className="accounting-service-group" delay={index * 90} key={group.title}>
              <div className="accounting-service-group-head"><span>0{index + 1}</span><h3>{group.title}</h3></div>
              <ul>{group.items.map((item, itemIndex) => <li key={item}><b>{String(itemIndex + 1).padStart(2, "0")}</b><strong>{item}</strong><Arrow /></li>)}</ul>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="accounting-planning">
        <div className="accounting-planning-mark">tributos<br />em foco</div>
        <Reveal>
          <p className="accounting-kicker"><span>Leitura estratégica</span> planejamento tributário</p>
          <h2>Escolher bem também é economizar.</h2>
          <span>A opção de tributação precisa ser analisada com cuidado para buscar economia lícita e mais previsibilidade para a empresa.</span>
        </Reveal>
      </section>

      <section className="accounting-office" id="escritorio">
        <div className="accounting-office-copy">
          <Reveal>
            <p className="accounting-kicker"><span>Por perto</span> atendimento local</p>
            <h2>Documentos em ordem. Decisões com fundamento.</h2>
            <p>A Anacleto reúne profissionais qualificados e busca aperfeiçoamento técnico para atender às necessidades de cada cliente.</p>
          </Reveal>
          {business.reviews ? (
            <blockquote>
              <span>{business.reviews.count} avaliações no Google</span>
              <p>“{business.reviews.quote}”</p>
              <cite>{business.reviews.author}</cite>
            </blockquote>
          ) : null}
        </div>
        <div className="accounting-office-image">
          <Image src={business.images.sculpture} alt="Pastas e documentos empresariais organizados para análise" fill sizes="(max-width: 760px) 100vw, 48vw" />
          <span>arquivo 02 / conferência</span>
        </div>
      </section>

      <section className="accounting-contact" id="contato">
        <div>
          <p className="accounting-kicker"><span>Próximo registro</span> contato</p>
          <h2>Vamos colocar a próxima decisão no papel?</h2>
          <div className="accounting-contact-actions">
            <a className="accounting-text-cta" href={phoneUrl}>Ligar para o escritório <Arrow /></a>
            <a className="accounting-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer"><span aria-hidden="true">◌</span> Chamar no WhatsApp</a>
          </div>
        </div>
        <address>
          <strong>Onde estamos</strong>
          <span>{business.address}</span>
          <a href={mapsUrl} target="_blank" rel="noreferrer">Abrir no mapa <Arrow /></a>
        </address>
      </section>

      <footer className="accounting-footer">
        <div className="accounting-brand" translate="no"><strong>Anacleto<small>Contabilidade e Assessoria</small></strong></div>
        <div><a href={business.website} target="_blank" rel="noreferrer">Site atual <Arrow /></a><a href={business.socialLinks?.instagram} target="_blank" rel="noreferrer">Instagram <Arrow /></a></div>
        <p>Demonstração visual independente. Não é o site oficial da Anacleto Contabilidade.</p>
      </footer>
    </main>
  );
}
