# Motor de prévias para negócios locais

Aplicação Next.js para criar landing pages personalizadas e orientadas a dados antes da contratação do prospecto.

## Executar

```bash
npm install
npm run dev
```

Abra `http://localhost:3000/preview/agencia-wei`.

## Adicionar uma prévia

Cada negócio fica isolado em `prospects/[slug]`, enquanto seus ativos ficam em `public/projects/[slug]`. Componentes visuais específicos vivem em `components/business`. Consulte [docs/adding-a-prospect.md](docs/adding-a-prospect.md) para o fluxo completo.

Todas as prévias têm `noindex`, `nofollow` e uma indicação discreta de demonstração. Nenhuma prévia deve inventar depoimentos, preços, métricas, horários ou serviços.

## Verificação

```bash
npm run lint
npm run typecheck
npm run build
```
