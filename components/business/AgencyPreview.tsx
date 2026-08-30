import Image from "next/image";
import type { ProspectBusiness } from "@/prospects";
import { Reveal } from "@/components/ui/Reveal";

function Arrow() {
  return <span className="cta-icon" aria-hidden="true">↗</span>;
}

export function AgencyPreview({ business }: { business: ProspectBusiness }) {
  const instagram = business.socialLinks?.instagram;
  const mapsUrl = business.address
    ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(business.address)}`
    : undefined;

  return (
    <main className="premium-shell">
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <div className="grain" aria-hidden="true" />

      <header className="floating-nav">
        <a className="nav-logo" href="#conteudo" aria-label={`${business.name}, início`} translate="no">
          <Image src={business.branding.logo} alt="Wei, make your" width={118} height={65} priority />
        </a>
        <nav aria-label="Navegação principal">
          <a href="#manifesto">Visão</a>
          <a href="#atuacao">Atuação</a>
          <a href="#origem">Origem</a>
        </nav>
        {instagram ? <a className="nav-action" href={instagram} target="_blank" rel="noreferrer">Instagram <Arrow /></a> : null}
      </header>

      <section className="premium-hero" id="conteudo">
        <Image className="hero-art" src={business.images.hero} alt="Monólito de metal escuro atravessado por uma faixa de vidro laranja" fill priority sizes="100vw" />
        <div className="hero-shade" aria-hidden="true" />
        <div className="hero-content">
          <p className="hero-eyebrow">Publicidade com origem em Augustinópolis</p>
          <h1>O futuro da sua marca<br /><em>não precisa acontecer longe daqui.</em></h1>
          <p className="hero-lede">Estratégia, posicionamento e publicidade para negócios que querem liderar o Bico do Papagaio.</p>
          <div className="hero-actions">
            <a className="premium-button" href="#atuacao">Ver a direção <Arrow /></a>
            {instagram ? <a className="quiet-link" href={instagram} target="_blank" rel="noreferrer">Conhecer a Wei no Instagram</a> : null}
          </div>
        </div>
        <div className="hero-signature" aria-label="Agência fundada em 2024, em Augustinópolis, Tocantins">
          <span>2024</span><span>Augustinópolis, TO</span>
        </div>
      </section>

      <section className="statement" id="manifesto">
        <Reveal>
          <p className="section-index">Uma ideia que permanece</p>
          <h2>Marca é o que fica<br />quando a campanha termina.</h2>
        </Reveal>
        <Reveal className="statement-note" delay={120}>
          <p>A Wei nasceu para trazer outra perspectiva ao mercado regional: menos comunicação por hábito, mais intenção em cada escolha.</p>
        </Reveal>
        <div className="year-mark" aria-hidden="true">WEI</div>
      </section>

      <section className="direction" id="atuacao">
        <Reveal className="direction-heading">
          <p className="section-index">A direção</p>
          <h2>Três movimentos.<br /><em>Uma marca mais forte.</em></h2>
        </Reveal>
        <div className="capability-stack">
          {business.capabilities.map((capability, index) => (
            <Reveal className="capability-shell" delay={index * 90} key={capability.title}>
              <article className="capability-core">
                <div className="capability-number">0{index + 1}</div>
                <div className="capability-copy">
                  <h3>{capability.title}</h3>
                  <p>{capability.description}</p>
                </div>
                <span className="capability-line" aria-hidden="true" />
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="identity-stage" id="origem">
        <div className="identity-frame">
          <div className="identity-core">
            <Image src="/projects/agencia-wei/wei-logo-oficial.jpg" alt="Identidade visual oficial da Wei com a assinatura make your Wei" fill sizes="(max-width: 767px) 100vw, 92vw" />
          </div>
        </div>
        <Reveal className="identity-caption">
          <p>Bico do Papagaio, Tocantins</p>
          <h2>Feita perto.<br />Pensada para ir longe.</h2>
        </Reveal>
      </section>

      <section className="origin-story">
        <Reveal className="origin-intro">
          <p className="section-index">A origem</p>
          <h2>Experiência regional virou uma agência com ambição de futuro.</h2>
        </Reveal>
        <Reveal className="origin-details" delay={100}>
          <p>A união de repertórios construídos em eventos regionais e campanhas políticas deu origem à Wei em outubro de 2024.</p>
          {business.sourceUrl ? <a href={business.sourceUrl} target="_blank" rel="noreferrer">Ler a história publicada <Arrow /></a> : null}
        </Reveal>
      </section>

      <section className="founders-premium">
        <div className="founders-title">
          <span>Fundadores</span>
          <p>Três visões, uma mesma Wei.</p>
        </div>
        <div className="founders-list">
          {business.founders?.map((founder, index) => (
            <Reveal key={founder} delay={index * 70}>
              <p><span>0{index + 1}</span>{founder}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="premium-contact" id="contato">
        <Reveal>
          <p className="section-index">Sua próxima fase</p>
          <h2>Faça a sua marca<br /><em>encontrar o próprio caminho.</em></h2>
          {instagram ? <a className="premium-button contact-button" href={instagram} target="_blank" rel="noreferrer">Conversar com a Wei <Arrow /></a> : null}
        </Reveal>
      </section>

      <footer className="premium-footer">
        <div className="footer-identity">
          <Image src={business.branding.logo} alt="Wei, make your" width={177} height={98} />
          <p>{business.description}</p>
        </div>
        <address>
          {business.address}
          {mapsUrl ? <a href={mapsUrl} target="_blank" rel="noreferrer">Como chegar <Arrow /></a> : null}
        </address>
        <p className="demo-note">Demonstração visual independente. Não é o site oficial da Agência Wei.</p>
      </footer>
    </main>
  );
}
