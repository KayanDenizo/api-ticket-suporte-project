# 🎫 API de Ticket de Suporte

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)  
![Status](https://img.shields.io/badge/Status-Em%20Desenvolvimento-ff69b4?style=for-the-badge)

## 📚 Descrição

Esta é uma API de suporte para gerenciar **tickets de suporte técnico**, criada para demonstrar e praticar conceitos de backend com Node.js.  
Ela permite que usuários criem, visualizem e resolvam tickets, servindo como base para sistemas maiores de atendimento.

---

## ✨ Funcionalidades

Baseado no plano do Notion:

- 🚀 **Criação de tickets** — os usuários podem abrir um novo ticket com título, descrição e prioridade  
- 🔍 **Listagem de tickets ativos** — visualizar todos os tickets abertos  
- ✅ **Resolver ticket** — marcar ticket como resolvido (fechamento)  
- 📌 **Atribuir ticket** — definir pessoa responsável ou técnico que vai atender  
- ⚠️ **Validação de dados** (título, descrição, prioridade)  
- 💾 **Persistência simples** — salvar tickets em memória ou em arquivo JSON (dependendo da implementação)

---

## 📁 Estrutura do Projeto

```text
├── src/
│   ├── controllers/
│   │   └── ticketController.js
│   ├── models/
│   │   └── Ticket.js
│   ├── routes/
│   │   └── ticketRoutes.js
│   ├── services/
│   │   └── ticketService.js
│   ├── utils/
│   │   └── validation.js
│   └── index.js
├── data/
│   └── tickets.json
├── package.json
└── README.md
```
## 🔧 Como rodar
Clone o repositório

bash
Copiar código
git clone https://github.com/seu-usuario/seu-repo-ticket-api.git
Instale as dependências

bash
Copiar código
npm install
Inicie o servidor em modo de desenvolvimento

bash
Copiar código
npm run dev
Acesse a API em
http://localhost:3333 (ou a porta que você configurou)

## 🧪 Endpoints da API
Método	Rota	Descrição
POST	/tickets	Criar um novo ticket
GET	/tickets	Listar todos os tickets abertos
PUT	/tickets/:id	Atualizar ou resolver um ticket
DELETE	/tickets/:id	Excluir um ticket (se aplicável)

Obs: você pode ajustar esses nomes de rota conforme a implementação real que estiver seguindo no Notion.

## 🧠 Modelagem de Ticket
js
Copiar código
{
  "id": "string (UUID ou número)",
  "title": "string",
  "description": "string",
  "priority": "alta | média | baixa",
  "status": "aberto | resolvido",
  "createdAt": "timestamp",
  "assignedTo": "string (nome do técnico)"
}
## 🚀 O que planejo desenvolver a seguir
Testes unitários e de integração

Validação mais robusta com bibliotecas como Zod

Autenticação de usuários / técnicos

WebSockets para notificações em tempo real

Documentação da API com Swagger / OpenAPI

## 👥 Contribuição
Contribuições são super bem-vindas!
Se quiser ajudar:

Faça um fork do repositório

Crie uma branch para sua feature:
git checkout -b feature/minha-feature

Faça suas mudanças e commit

Push para sua branch

Abra um pull request com uma descrição clara do que você fez

📜 Licença
Este projeto está licenciado sob a MIT License — fique à vontade para usar, adaptar ou contribuir.
