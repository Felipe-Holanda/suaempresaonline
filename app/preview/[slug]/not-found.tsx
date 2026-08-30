import Link from "next/link";

export default function NotFound() {
  return (
    <main className="system-page">
      <p>Prévia indisponível</p>
      <h1>Este endereço não corresponde a um prospecto.</h1>
      <Link href="/">Voltar ao início</Link>
    </main>
  );
}
