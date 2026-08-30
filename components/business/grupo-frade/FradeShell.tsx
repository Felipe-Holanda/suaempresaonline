import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { grupoFrade } from "@/prospects/grupo-frade/config";
import { FradeNavigation } from "@/components/business/grupo-frade/FradeNavigation";

export function FradeShell({ children }: { children: ReactNode }) {
  return (
    <div className="frade-site">
      <a className="frade-skip-link" href="#frade-main-content">Pular para o conteúdo</a>
      <header className="frade-header">
        <Link className="frade-brand" href="/preview/grupo-frade" aria-label="Grupo Frade, página inicial">
          <Image src={grupoFrade.branding.logo} alt="Grupo Frade Arquitetura e Engenharia" width={396} height={104} priority />
        </Link>
        <FradeNavigation />
      </header>
      <div id="frade-main-content" tabIndex={-1}>{children}</div>
      <footer className="frade-footer">
        <div className="frade-footer-primary">
          <Link className="frade-footer-logo" href="/preview/grupo-frade">
            <Image src={grupoFrade.branding.logo} alt="Grupo Frade Arquitetura e Engenharia" width={396} height={104} />
          </Link>
          <p>Arquitetura, interiores e engenharia estrutural em uma prática integrada.</p>
        </div>
        <div className="frade-footer-links">
          <div>
            <strong>Navegação</strong>
            <Link href="/preview/grupo-frade/projetos">Projetos</Link>
            <Link href="/preview/grupo-frade/engenharia">Engenharia</Link>
            <Link href="/preview/grupo-frade/escritorio">Escritório</Link>
            <Link href="/preview/grupo-frade/midia">Mídia</Link>
          </div>
          <div>
            <strong>Contato</strong>
            <a href={`https://wa.me/${grupoFrade.whatsapp}`} target="_blank" rel="noreferrer">WhatsApp</a>
            <a href={grupoFrade.socialLinks?.instagram} target="_blank" rel="noreferrer">Instagram</a>
            <a href={grupoFrade.socialLinks?.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <Link href="/preview">Portfólio 8Vault</Link>
          </div>
        </div>
        <p className="frade-preview-note">Demonstração visual criada para apresentar uma proposta de presença digital. Não é o site oficial.</p>
      </footer>
    </div>
  );
}
