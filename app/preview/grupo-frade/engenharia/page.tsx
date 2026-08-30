import type { Metadata } from "next";
import Image from "next/image";
import { grupoFrade } from "@/prospects/grupo-frade/config";

export const metadata: Metadata = { title: "Engenharia estrutural", description: "GF Estruturas, projetos estruturais do Grupo Frade." };

export default function FradeEngineeringPage() {
  return (
    <main className="frade-engineering-page">
      <header className="frade-structure-hero">
        <div>
          <p className="frade-kicker">GF Estruturas</p>
          <h1>Estruturas calculadas para fazer a arquitetura acontecer.</h1>
          <p>Concreto armado, protendido, sistemas mistos e fundações com análise técnica e compatibilização.</p>
        </div>
        <div className="frade-structure-hero-image">
          <Image src="/projects/grupo-frade/estrutura-01.webp" alt="Visualização de projeto estrutural da GF Estruturas" fill priority sizes="(max-width: 820px) 100vw, 58vw" />
        </div>
      </header>

      <section className="frade-technical-statement">
        <p>Engenharia estrutural não entra depois da arquitetura.</p>
        <h2>Ela participa das decisões de viabilidade, forma, execução e desempenho desde o início.</h2>
      </section>

      <section className="frade-technical-grid">
        <article>
          <i className="bx bx-analyse" aria-hidden="true" />
          <h2>Análise e dimensionamento</h2>
          <p>Metodologia de cálculo e verificação de elementos estruturais conforme os critérios aplicáveis da NBR 6118.</p>
        </article>
        <article>
          <i className="bx bx-bar-chart-square" aria-hidden="true" />
          <h2>Viabilidade econômica</h2>
          <p>Comparação entre sistemas estruturais para avaliar soluções e buscar economia na execução da obra.</p>
        </article>
        <article>
          <i className="bx bx-layer" aria-hidden="true" />
          <h2>Fundações</h2>
          <p>Projetos compatibilizados com as características reveladas pela investigação e sondagem do solo.</p>
        </article>
        <article>
          <i className="bx bx-cube" aria-hidden="true" />
          <h2>BIM e visualização</h2>
          <p>Modelagem, compatibilização e recursos de visualização aplicados à leitura e à comunicação do projeto.</p>
        </article>
      </section>

      <section className="frade-structure-gallery">
        <div><Image src="/projects/grupo-frade/estrutura-02.webp" alt="Detalhamento de projeto estrutural" fill sizes="(max-width: 720px) 100vw, 50vw" /></div>
        <div><Image src="/projects/grupo-frade/estrutura-03.webp" alt="Modelo tridimensional de estrutura em concreto" fill sizes="(max-width: 720px) 100vw, 50vw" /></div>
      </section>

      <section className="frade-engineer-profile">
        <div>
          <p className="frade-kicker">Responsável técnico</p>
          <h2>Guilherme Frade Silveira</h2>
          <p>Engenheiro civil formado pela PUC Paraná, com formação complementar em estruturas de concreto, fundações, sistemas mistos, gestão e TQS.</p>
        </div>
        <address>
          <a href="mailto:guilherme@grupofrade.com"><i className="bx bx-envelope" aria-hidden="true" /> guilherme@grupofrade.com</a>
          <a href="tel:+556399982892"><i className="bx bx-phone" aria-hidden="true" /> +55 63 9998-2892</a>
          <a href="tel:+554130193738"><i className="bx bx-phone-call" aria-hidden="true" /> +55 41 3019-3738</a>
          <a href={`https://wa.me/${grupoFrade.whatsapp}`} target="_blank" rel="noreferrer"><i className="bx bxl-whatsapp" aria-hidden="true" /> Solicitar orçamento</a>
        </address>
      </section>
    </main>
  );
}
