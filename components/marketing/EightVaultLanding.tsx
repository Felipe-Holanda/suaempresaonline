import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

function Arrow() {
  return <span className="vault-arrow" aria-hidden="true">↗</span>;
}

const foundations = [
  { code: "01", title: "Presença", text: "Sites e jornadas digitais que apresentam o valor da empresa com clareza e transformam interesse em contato." },
  { code: "02", title: "Atendimento", text: "Inteligência artificial para receber dúvidas e oportunidades enquanto a equipe cuida do que exige presença humana." },
  { code: "03", title: "Operação", text: "Fluxos de pedidos, agendamentos e solicitações organizados em torno da rotina real do negócio." },
];

export function EightVaultLanding() {
  return (
    <main className="vault-site">
      <a className="vault-skip" href="#conteudo">Pular para o conteúdo</a>

      <header className="vault-nav">
        <Link className="vault-brand" href="/" aria-label="8Vault Solutions, início" translate="no">
          <Image src="/brands/8vault/8vault-logo.png" alt="" width={1800} height={768} priority />
        </Link>
        <nav aria-label="Navegação principal">
          <a href="#estrutura">Estrutura</a>
          <a href="#inteligencia">IA aplicada</a>
          <Link href="/preview">Projetos</Link>
        </nav>
        <Link className="vault-nav-cta" href="/preview">Explorar projetos <Arrow /></Link>
      </header>

      <section className="vault-hero" id="conteudo">
        <div className="vault-hero-copy">
          <p className="vault-kicker"><span>8VS / 001</span> Infraestrutura digital para negócios locais</p>
          <h1>Transformamos empresas em <em>operações digitais.</em></h1>
          <p className="vault-hero-lede">Presença, atendimento e automação com inteligência artificial, construídos em torno do que cada negócio realmente precisa.</p>
          <div className="vault-hero-actions">
            <Link className="vault-button" href="/preview">Ver projetos <Arrow /></Link>
            <a className="vault-text-link" href="#estrutura">Conhecer a estrutura</a>
          </div>
        </div>
        <div className="vault-hero-visual">
          <Image src="/brands/8vault/vault-hero.jpg" alt="Porta de cofre metálica aberta para uma estrutura iluminada em violeta" fill priority sizes="(max-width: 760px) 100vw, 48vw" />
          <span className="vault-visual-label">Capacidade disponível / 24 horas</span>
        </div>
        <div className="vault-hero-index" aria-label="Componentes da solução">
          <span>Presença digital</span><span>Automação</span><span>Inteligência artificial</span>
        </div>
      </section>

      <section className="vault-thesis">
        <Reveal>
          <p className="vault-kicker">Uma infraestrutura, não outra ferramenta</p>
          <h2>O digital deixa de ser vitrine e passa a trabalhar para a empresa.</h2>
        </Reveal>
      </section>

      <section className="vault-system" id="estrutura">
        <div className="vault-system-heading">
          <p className="vault-kicker">Estrutura modular / 03 frentes</p>
          <h2>Uma base projetada para o ritmo do seu negócio.</h2>
        </div>
        <div className="vault-foundations">
          {foundations.map((item, index) => (
            <Reveal className="vault-foundation" delay={index * 80} key={item.code}>
              <article>
                <span className="vault-foundation-code">{item.code}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="vault-intelligence" id="inteligencia">
        <div className="vault-intelligence-art">
          <Image src="/brands/8vault/vault-system.jpg" alt="Escultura em metal e vidro violeta representando sistemas conectados" fill sizes="(max-width: 760px) 100vw, 42vw" />
        </div>
        <Reveal className="vault-intelligence-copy">
          <p className="vault-kicker">IA aplicada ao trabalho real</p>
          <h2>Menos tarefas repetidas. Mais capacidade para crescer.</h2>
          <p>A inteligência entra onde já existe atrito: responde perguntas, recebe contatos, organiza solicitações e direciona o próximo passo.</p>
          <ul>
            <li><span>01</span> Atendimento inicial</li>
            <li><span>02</span> Qualificação de contatos</li>
            <li><span>03</span> Pedidos e agendamentos</li>
          </ul>
        </Reveal>
      </section>

      <section className="vault-projects-callout">
        <div>
          <p className="vault-kicker">Projetos selecionados</p>
          <h2>Veja antes de decidir.</h2>
        </div>
        <div>
          <p>Cada prévia nasce do contexto da empresa, com linguagem visual e estrutura próprias para o seu mercado.</p>
          <Link className="vault-button vault-button-dark" href="/preview">Abrir portfólio <Arrow /></Link>
        </div>
      </section>

      <footer className="vault-footer">
        <div className="vault-brand" translate="no"><Image src="/brands/8vault/8vault-logo.png" alt="8Vault Solutions" width={1800} height={768} /></div>
        <p>Digitalização e inteligência artificial para empresas que querem avançar sem aumentar a complexidade.</p>
        <Link href="/preview">Projetos <Arrow /></Link>
      </footer>
    </main>
  );
}
