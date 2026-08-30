import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { fradeClients } from "@/prospects/grupo-frade/config";

export const metadata: Metadata = { title: "Clientes", description: "Marcas e organizações presentes na carteira do Grupo Frade." };

export default function FradeClientsPage() {
  return (
    <main>
      <header className="frade-page-hero frade-clients-hero">
        <p className="frade-kicker">Clientes</p>
        <h1>Projetos para negócios, instituições e experiências de diferentes escalas.</h1>
        <p>Uma seleção de marcas apresentadas na carteira comercial do escritório.</p>
      </header>
      <section className="frade-client-wall" aria-label="Logos de clientes do Grupo Frade">
        {fradeClients.map((client) => (
          <div key={`${client.name}-${client.image}`}>
            <Image src={client.image} alt={client.name} width={240} height={140} />
          </div>
        ))}
      </section>
      <section className="frade-client-context">
        <div>
          <h2>Do espaço corporativo ao varejo.</h2>
          <p>Os projetos comerciais do acervo incluem sedes, panificadora, escritório contábil, empresa de investimentos, hub e unidade de atendimento consular.</p>
        </div>
        <Link className="frade-button frade-button-dark" href="/preview/grupo-frade/projetos">Ver projetos comerciais</Link>
      </section>
    </main>
  );
}
