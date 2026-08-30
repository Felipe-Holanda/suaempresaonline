"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navigation = [
  { href: "/preview/grupo-frade/projetos", label: "Projetos" },
  { href: "/preview/grupo-frade/engenharia", label: "Engenharia" },
  { href: "/preview/grupo-frade/escritorio", label: "Escritório" },
  { href: "/preview/grupo-frade/clientes", label: "Clientes" },
  { href: "/preview/grupo-frade/midia", label: "Mídia" },
  { href: "/preview/grupo-frade/contato", label: "Contato" },
];

export function FradeNavigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="frade-menu-button"
        type="button"
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        aria-expanded={open}
        aria-controls="frade-primary-navigation"
        onClick={() => setOpen((value) => !value)}
      >
        <i className={open ? "bx bx-x" : "bx bx-menu-alt-right"} aria-hidden="true" />
      </button>
      <nav id="frade-primary-navigation" className={open ? "frade-nav is-open" : "frade-nav"} aria-label="Navegação principal">
        {navigation.map((item) => {
          const active = pathname === item.href;
          return (
            <Link key={item.href} href={item.href} aria-current={active ? "page" : undefined} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          );
        })}
        <Link className="frade-nav-cta" href="/preview/grupo-frade/contato" onClick={() => setOpen(false)}>
          Solicitar orçamento
        </Link>
      </nav>
    </>
  );
}
