import type { Metadata } from "next";
import Image from "next/image";
import { grupoFrade } from "@/prospects/grupo-frade/config";

export const metadata: Metadata = { title: "Contato", description: "Endereço e canais de contato do Grupo Frade." };

const whatsappMessage = encodeURIComponent("Olá, gostaria de conversar sobre um projeto com o Grupo Frade.");

export default function FradeContactPage() {
  return (
    <main className="frade-contact-page">
      <section className="frade-contact-hero">
        <div className="frade-contact-copy">
          <p className="frade-kicker">Contato</p>
          <h1>Todo bom projeto começa com uma conversa clara.</h1>
          <p>Conte o que você pretende construir, reformar ou estruturar. O próximo passo pode começar por aqui.</p>
          <a className="frade-button frade-button-dark" href={`https://wa.me/${grupoFrade.whatsapp}?text=${whatsappMessage}`} target="_blank" rel="noreferrer">
            <i className="bx bxl-whatsapp" aria-hidden="true" /> Conversar pelo WhatsApp
          </a>
        </div>
        <div className="frade-contact-image">
          <Image src="/projects/grupo-frade/contact.webp" alt="Equipe do Grupo Frade em ambiente de trabalho" fill priority sizes="(max-width: 820px) 100vw, 52vw" />
        </div>
      </section>

      <section className="frade-contact-details">
        <address>
          <div>
            <i className="bx bx-map" aria-hidden="true" />
            <h2>Escritório</h2>
            <p>{grupoFrade.address}</p>
            <a href="https://www.google.com/maps/search/?api=1&query=Rua%20Bras%C3%ADlio%20Itiber%C3%AA%203727%20Curitiba%20PR" target="_blank" rel="noreferrer">Abrir no mapa <i className="bx bx-link-external" aria-hidden="true" /></a>
          </div>
          <div>
            <i className="bx bx-message-square-dots" aria-hidden="true" />
            <h2>Atendimento</h2>
            <a href={`https://wa.me/${grupoFrade.whatsapp}`} target="_blank" rel="noreferrer">{grupoFrade.phone}</a>
            <p>Canal direto para iniciar uma conversa e solicitar informações.</p>
          </div>
          <div>
            <i className="bx bx-network-chart" aria-hidden="true" />
            <h2>Redes</h2>
            <a href={grupoFrade.socialLinks?.instagram} target="_blank" rel="noreferrer">Instagram</a>
            <a href={grupoFrade.socialLinks?.facebook} target="_blank" rel="noreferrer">Facebook</a>
            <a href={grupoFrade.socialLinks?.youtube} target="_blank" rel="noreferrer">YouTube</a>
            <a href={grupoFrade.socialLinks?.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </address>
      </section>

      <section className="frade-budget-note">
        <h2>Precisa apenas de engenharia estrutural?</h2>
        <p>A GF Estruturas possui contato técnico específico para projetos, análise, fundações e viabilidade.</p>
        <div>
          <a href="mailto:guilherme@grupofrade.com"><i className="bx bx-envelope" aria-hidden="true" /> guilherme@grupofrade.com</a>
          <a href="tel:+554130193738"><i className="bx bx-phone" aria-hidden="true" /> +55 41 3019-3738</a>
        </div>
      </section>
    </main>
  );
}
