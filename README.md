# 📝 Blog Pessoal API

Sistema de gerenciamento de postagens de blog.

A Blog Pessoal API é uma aplicação backend desenvolvida para gerenciar conteúdos de um blog de forma simples, organizada e eficiente. O sistema permite criar, visualizar, atualizar e remover postagens, centralizando as informações e facilitando a manipulação dos dados.

Este projeto representa meu primeiro contato prático com a construção de uma API REST utilizando boas práticas de desenvolvimento backend.

---

# 📌 Sobre o projeto

A Blog Pessoal API foi desenvolvida durante o bootcamp da Generation Brasil, com foco em consolidar os fundamentos de desenvolvimento backend.

O projeto segue uma arquitetura baseada em API REST, permitindo a comunicação com aplicações frontend e outros sistemas de forma estruturada.

Além disso, foi organizado em camadas (Controller, Service e Repository), seguindo boas práticas para manter o código limpo e escalável.

---

# 🗄️ Estrutura do sistema

O sistema conta com três entidades principais:

👤 Usuário
Responsável por armazenar os dados dos usuários do sistema.

📝 Postagem
Representa os conteúdos publicados no blog.

🏷️ Tema
Utilizado para categorizar as postagens.

---

# 🔗 Relacionamentos
- Um usuário pode ter várias postagens
- Uma postagem pertence a um usuário
- Uma postagem pertence a um tema
- Um tema pode estar associado a várias postagens

---

# ⚙️ Funcionalidades atuais

Atualmente, o sistema já conta com a implementação completa do módulo de Categoria, incluindo todas as operações de CRUD.

👤 Usuário
- ✅ Cadastrar usuário
- 🔎 Buscar todos os usuários
- 🔎 Buscar usuário por ID
- ✏️ Atualizar usuário
- ❌ Deletar usuário

📝 Postagem
- ✅ Criar postagem
- 🔎 Buscar todas as postagens
- 🔎 Buscar postagem por ID
- 🔎 Buscar postagens por título
- ✏️ Atualizar postagem
- ❌ Deletar postagem

🏷️ Tema
- ✅ Criar tema
- 🔎 Buscar todos os temas
- 🔎 Buscar tema por ID
- 🔎 Buscar tema por descrição
- ✏️ Atualizar tema
- ❌ Deletar tema

Todas as rotas foram testadas utilizando o Insomnia e estão funcionando corretamente.

---

# 🚀 Tecnologias Utilizadas

Este projeto foi desenvolvido com as seguintes tecnologias:

### Backend
- **TypeScript**
- **Node.js**
- **NestJS**

### Banco de Dados
- **MySQL**

### Testes de API
- **Insomnia**
---

# ⚙️ Instalação

Clone o repositório:

```bash
git clone https://github.com/BiiaBraga/Blog-Pessoal.git
cd Blog-Pessoal
```

Instale as dependências:
```bash
npm install
```

Execute o projeto:
```bash
npm run start:dev
```

---

# 👩‍💻 Desenvolvido por
Beatriz Braga Silva
