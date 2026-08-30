import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { FradeShell } from "@/components/business/grupo-frade/FradeShell";

export const metadata: Metadata = {
  title: { default: "Grupo Frade | Prévia visual", template: "%s | Grupo Frade" },
  description: "Prévia de um novo ambiente digital para o Grupo Frade Arquitetura e Engenharia.",
  robots: { index: false, follow: false, nocache: true },
};

export const viewport: Viewport = { themeColor: "#f1f0ec" };

export default function GrupoFradeLayout({ children }: { children: ReactNode }) {
  return <FradeShell>{children}</FradeShell>;
}
