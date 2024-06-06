E-commerce para venda de vestuário.

## Features

- Catálogo de produtos
- Listagem de produtos com paginação
- Seleção de categorias (Camisetas, Calças, Tênis)
- Visualização de detalhes do produto
- Adicionar e remover produtos do carrinho
- Data Fetching com caching e revalidate
- Rota dinamica de visualização de produto com time based revalidation
- Custom HTTP/Error Handler
- Testes E2E com Cypress e Unitários com Jest

## Tech Stack

- Next.js 14 - App folder
- TypeScript
- TailwindCSS
- ShadCN/UI
- Atomic Design Pattern
- MobX / Mobx-Persist-Store
- Jest
- Cypress

## Deploy

Deploy do projeto -> [Clique aqui](https://maxima-tech-challenge.vercel.app/)

## Executar o projeto

1. Clone o repositório: `git clone https://github.com/pedrogpo/maxima-tech-challenge.git`
2. Navegue para o diretório do projeto: `cd maxima-tech-challenge`
3. Instale as depêndencias: `yarn i ou npm i`
4. Executar o app: `yarn dev`

## Executar os testes

1. Instale as depêndencias: `yarn i ou npm i`
2. Rodar os testes: `yarn test`
3. Lembre-se de executar o projeto em dev para o funcionamento do cypress ser como o esperado

## Alguns pontos sobre o desafio

- Apliquei as práticas recomendadas pelo Next para busca de dados, implementando cacheamento e revalidação com Time-based Revalidation (ISR). Isso garante dados atualizados e entrega otimizada de páginas com dados cacheados vindo do servidor;

- Garanti acessibilidade em toda a aplicação, permitindo que todos possam utilizá-la sem problemas;

- Implementei a geração dinâmica de metadata do lado do servidor para otimizar o SEO de forma performática;

- Uma melhoria por parte da API seria a paginação ser do lado do servidor, tornando mais performático o catálago de produtos. Um workarround que foi feito nesse caso, foi trazer a lista de produtos já cacheados do lado do servidor utilizando as práticas de Data fetching do NextJS;

- Optei por usar IndexedDB para armazenar os dados do carrinho, pois é o mais ideal para esse caso, com fallback para localStorage via localforage, garantindo compatibilidade. Utilizei MobX para gerenciar estados e MobX-Persist-Store para persistir esses dados;

- Realizei testes E2E com Cypress e testes unitários com Jest para assegurar o funcionamento correto dos componentes e fluxos principais do aplicativo.
