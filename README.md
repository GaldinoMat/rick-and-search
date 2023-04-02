# Rick and Searchy

Esse é um projeto feito em Next.JS utilizando Redux e sua arquitetura, cujo principal objetivo é a resolução de um catálogo de personagens de Rick and Morty, com paginação de resultados e páginas de placeholder para cada personagem. A wiki do Rick and Morty foi utilizada como inpiração do layout.

## Deploy

Link: https://rick-and-search.vercel.app/

## Passo a passo

Entre na raiz do projeto e instale as dependências com o seu gerenciador de pacotes de preferência.

```bash
npm install
# or
yarn
```

Para executar o projeto no ambiente de desenvolvimento, digite um dos seguintes comandos em seu terminal de preferência.

```bash
npm run dev
# or
yarn dev
```

Para executar os testes, use

```bash
npm test
# or
yarn test
```

ou se preferir conferir a cobertura dos testes, use

```bash
npm run coverage
# or
yarn coverage
```

## Documentação

O projeto foi feito utilizando o Next.JS versão 13 como framework principal, Typescript como linguagem de programação e Redux e arquitetura Flux como ferramentas de gerenciamento de estado.
É utilizado o axios como cliente de requisições HTTP para browser.
Também utilizei o styled-components como ferramenta de estilização.
Para testes, foram utilizadas as bibliotecas do react-test-library e Jest e para testar o Redux, a biblioteca do redux-mock-store.
