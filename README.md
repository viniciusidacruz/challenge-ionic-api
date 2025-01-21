# CRUD de Todo com Node JS e Fastify

## Visão Geral

Este projeto é um CRUD simples de Todo, permitindo que você adicione, liste, atualize e exclua tarefas. A aplicação foi construída utilizando Node JS com Fastify para o back-end, integrado com o banco de dados PostgreSQL.

### Tecnologias Utilizadas

- **Banco de Dados**: PostgreSQL.
- **Back-end**: Node JS com Fastify.
- **Validações**: Zod.

## Pré-requisitos

Antes de rodar o projeto, certifique-se de ter as seguintes ferramentas instaladas:

1. **Node.js** - Recomenda-se usar a versão correta do Node.js, que pode ser gerenciada pelo `nvm` (Node Version Manager).
2. **npm** - Usamos o npm para gerenciar as dependências.
3. **Ionic CLI** - Para gerenciar a aplicação Ionic e a criação do APK.

### Usando o `nvm` para garantir a versão correta do Node.js

Caso ainda não tenha o `nvm` instalado, siga as instruções de instalação [aqui](https://github.com/nvm-sh/nvm).

Para instalar a versão correta do Node.js para este projeto, execute os seguintes comandos:

```bash
nvm use
```

Isso irá garantir que a versão do Node.js utilizada seja compatível com a aplicação.

## Como rodar a aplicação
### Passo 1: Instale as dependências
Primeiro, instale todas as dependências do projeto com o npm:

```bash
npm install
```

### Passo 2: Gerar as migrations
```bash
npx prisma migrate dev
```

### Passo 3: Inicie o servidor de desenvolvimento
Após a instalação, inicie o servidor local para rodar a aplicação:

```bash
npm run dev
```
O aplicativo será executado localmente.


## Agradecimentos
Agradecemos pela oportunidade de trabalhar neste projeto. Esperamos que este CRUD de Todo seja útil para suas necessidades. Caso tenha dúvidas ou sugestões, sinta-se à vontade para entrar em contato!


Link do repositório frontend: https://github.com/viniciusidacruz/challange-ionic