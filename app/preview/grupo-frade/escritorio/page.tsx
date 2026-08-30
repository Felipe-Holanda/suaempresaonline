import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = { title: "Escritório", description: "História, formação e equipe do Grupo Frade." };

const historyNames = [
  "Tamara de Paula Buffon", "Mariana Andrade", "Fabiola Costa", "Ana Mello", "Ana Elisa", "Murilo Sabota Lopes",
  "Letícia Didek", "Lucas César Oliveira", "Júlia Ferreira", "Eduardo Witt", "Rafaela Isber", "Amélia de Cassia",
  "Thiago Paixão", "Marcos de Paula", "Antonio Weliton",
];

export default function FradeStudioPage() {
  return (
    <main>
      <header className="frade-page-hero frade-studio-hero">
        <p className="frade-kicker">O escritório</p>
        <h1>Uma prática familiar, construída por diferentes formações.</h1>
        <p>O Grupo Frade nasceu da união de irmãos que já atuavam na construção civil e em projetos arquitetônicos.</p>
      </header>

      <section className="frade-family-story">
        <div className="frade-family-image">
          <Image src="/projects/grupo-frade/team.webp" alt="Equipe do Grupo Frade reunida" fill priority sizes="(max-width: 820px) 100vw, 58vw" />
        </div>
        <div className="frade-family-copy">
          <h2>Arquitetura, interiores e engenharia com atendimento próximo.</h2>
          <p>A atuação conjunta amplia a leitura de cada demanda. O projeto é desenvolvido considerando espaço, estrutura, execução e as necessidades específicas de quem vai utilizá-lo.</p>
          <p className="frade-family-principle">Cada projeto pede uma resposta particular, construída a partir do contexto e das pessoas que vão utilizar o espaço.</p>
        </div>
      </section>

      <section className="frade-founders">
        <article className="frade-founder frade-founder-thaline">
          <div className="frade-founder-image"><Image src="/projects/grupo-frade/portrait-01.webp" alt="Retrato de Thaline Frade Silveira" fill sizes="(max-width: 760px) 100vw, 42vw" /></div>
          <div>
            <h2>Thaline Frade Silveira</h2>
            <p>Arquiteta e urbanista formada pela PUC Paraná em 2009, com MBA em Gerenciamento de Projetos pela FGV Curitiba.</p>
            <span>Arquitetura e urbanismo</span>
          </div>
        </article>
        <article className="frade-founder frade-founder-guilherme">
          <div>
            <h2>Guilherme Frade Silveira</h2>
            <p>Engenheiro civil formado pela PUC Paraná em 2012, com especializações e cursos em estruturas de concreto, fundações, sistemas mistos, gestão e TQS.</p>
            <span>Engenharia estrutural</span>
          </div>
          <div className="frade-founder-image"><Image src="/projects/grupo-frade/estrutura-02.webp" alt="Projeto estrutural representando a atuação de Guilherme Frade" fill sizes="(max-width: 760px) 100vw, 42vw" /></div>
        </article>
        <article className="frade-founder frade-founder-allan">
          <div className="frade-founder-image"><Image src="/projects/grupo-frade/portrait-02.webp" alt="Retrato de Allan Esmanhotto" fill sizes="(max-width: 760px) 100vw, 42vw" /></div>
          <div>
            <h2>Allan Esmanhotto</h2>
            <p>Arquiteto e urbanista formado pela Universidade Positivo em 2012, com pós-graduação em interiores concluída em 2019.</p>
            <span>Arquitetura e interiores</span>
          </div>
        </article>
      </section>

      <section className="frade-current-team">
        <h2>Equipe</h2>
        <div>
          <article><strong>Thaline Frade</strong><span>Arquiteta</span></article>
          <article><strong>Allan Esmanhotto</strong><span>Arquiteto</span></article>
          <article><strong>Thais Helena Reichenbach</strong><span>Arquiteta</span></article>
          <article><strong>André Godoy</strong><span>Arquiteto</span></article>
          <article><strong>Guilherme Frade</strong><span>Engenheiro civil</span></article>
        </div>
      </section>

      <section className="frade-history-team">
        <h2>Fazem parte da nossa história</h2>
        <div>{historyNames.map((name) => <span key={name}>{name}</span>)}</div>
      </section>
    </main>
  );
}
