# Como adicionar um prospecto

1. Crie uma pasta em `prospects/[slug]` e adicione o arquivo `config.ts`.
2. Use apenas informações verificadas ou fornecidas pelo prospecto.
3. Coloque as imagens em `public/projects/[slug]` e registre os caminhos na configuração.
4. Se necessário, crie um componente de categoria em `components/business`.
5. Acesse `/preview/[slug]` e revise nos viewports 375, 390, 430, 768 e 1024 pixels.
6. Confirme que a página inclui `noindex` e `nofollow`, disclaimer de demonstração e um CTA realista.

7. Registre a configuração em `prospects/index.ts`.

O slug é gerado estaticamente a partir das chaves do objeto `prospects`.
