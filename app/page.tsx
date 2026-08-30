import Link from "next/link";

export default function Home() {
  return (
    <main className="system-page">
      <p>Motor de prévias locais</p>
      <h1>Uma demonstração por negócio.</h1>
      <Link href="/preview/agencia-wei">Abrir prévia da Agência Wei</Link>
    </main>
  );
}
