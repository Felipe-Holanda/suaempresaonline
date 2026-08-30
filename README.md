# Motor de prévias para negócios locais

Aplicação Next.js para criar landing pages personalizadas e orientadas a dados antes da contratação do prospecto.

## Executar

```bash
npm install
npm run dev
```

Abra `http://localhost:3000/preview/agencia-wei`.

## Adicionar uma prévia

Os dados ficam em `lib/prospects.ts`. O componente visual de cada categoria fica em `components/business`. Consulte [docs/adding-a-prospect.md](docs/adding-a-prospect.md) para o fluxo completo.

Todas as prévias têm `noindex`, `nofollow` e uma indicação discreta de demonstração. Nenhuma prévia deve inventar depoimentos, preços, métricas, horários ou serviços.

## Verificação

```bash
npm run lint
npm run typecheck
npm run build
```
