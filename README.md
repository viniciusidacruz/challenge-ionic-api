# App

Pandu Moldes API

## RFs (Requisitos funcionais)

- [X] Deve ser possível se cadastrar;
- [X] Deve ser possível logar;
- [] Deve ser possível cadastrar um novo evento;
- [] Deve ser possível listar apenas eventos daquele ano;
- [] Deve ser possivel remover um evento ou todos;
- [] Deve ser possível editar um evento;
- [] Deve ser possível visualizar um evento;
- [] Deve ser possível criar um novo produto no estoque;
- [] Deve ser possível listar todos os produtos;
- [] Deve ser possível editar um produto;
- [] Deve ser possível remover um produto;
- [] Deve ser possível adicionar pedidos a um evento;
- [] Deve ser possível listar todos os pedidos;
- [] Deve ser possível cancelar um pedido;
- [] Deve ser possível finalizar um pedido;

## RNs (Regras de negócio)

- [] O usuário deve visualizar o mesmo estoque outras plataformas como Shopee e Mercado Livre;
- [] O usuário não deve cadastrar um evento com mesmo mês e ano;
- [] O usuário não deve finalizar um evento com pedidos em aberto;
- [] O usuário não deve cadastrar um novo produto com mesmo nome;
- [] O usuário não deve cadastrar um novo pedido com mesmo nome;

## RNFs (Requisitos não funcionais)

- [X] A senha do usuário deve ser criptografada;
- [X] O sistema deve possuir uma documentação de API;
- [] O sistema deve possuir testes unitários;
- [x] Os dados da aplicação precisam estar persistidos em um banco PostgreSQL;
- [] A lista de produtos deve ser ordenada por ordem alfabética;
- [] A lista de pedidos deve ser ordenada por número do pedido;
- [] A lista de eventos deve ser ordenada por data do evento;
- [] Todas as listas de dados precisam estar paginadas com 20 itens por página;
- [] O usuário deve ser identificado por um token JWT;
