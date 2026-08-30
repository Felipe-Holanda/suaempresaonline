import type { Metadata } from "next";
import { EightVaultLanding } from "@/components/marketing/EightVaultLanding";

export const metadata: Metadata = {
  title: "8Vault Solutions | Digitalização e inteligência artificial",
  description: "Presença digital, automação e inteligência artificial para impulsionar empresas locais.",
};

export default function Home() {
  return <EightVaultLanding />;
}
