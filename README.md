<p align="center">
  <img alt="Capa do Projeto" src="./capa.png" width="80%">
</p>

# 📦 Rocketlog API

Uma API REST desenvolvida com **Node.js**, **TypeScript** e **Express**, com foco em boas práticas, escalabilidade e testes automatizados.

---

## 🚀 Sobre o projeto

O **Rocketlog API** é um backend construído para estudo e prática de desenvolvimento moderno com Node.js, aplicando conceitos como:

- Arquitetura em camadas
- Tipagem com TypeScript
- ORM com Prisma
- Validação de dados com Zod
- Testes automatizados com Jest
- Boas práticas de organização de código

---

## 🛠️ Tecnologias utilizadas

- Node.js
- TypeScript
- Express
- Prisma ORM
- PostgreSQL
- Jest
- Zod
- tsx

---

## 📁 Estrutura do projeto

```bash
src/
 ├── controllers/
 ├── services/
 ├── repositories/
 ├── routes/
 ├── middlewares/
 ├── tests/
 ├── utils/
 └── server.ts
```

## ⚙️ Como rodar o projeto

1. Clone o repositório
   rocketlog-api

2. Configure o ambiente

   Crie um arquivo .env na raiz:

   DATABASE_URL="postgresql://usuario:senha@localhost:5432/rocketlog?schema=public"
   JWT_SECRET="sua_chave_secreta"

3. Subir com Docker (recomendado)
   docker-compose up -d

⚠️ Certifique-se de que o Docker está instalado e rodando.

4. Instalar dependências
   npm install

5. Execute as migrations
   npx prisma migrate dev

6. Inicie o servidor
   run dev

---

## 📌 Observações

O banco de dados deve estar ativo antes de rodar migrations
O Prisma Client é gerado automaticamente após migrations
Use .env corretamente configurado para evitar erros de conexão

---

## Autor

Desenvolvido por Matheus Souza 🚀
