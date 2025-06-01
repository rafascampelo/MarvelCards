# MarvelCards

MarvelCards is a software that displays Marvel character cards.

# 🚀 MarvelCards

> Uma aplicação frontend + backend para buscar e mostrar heróis da Marvel em cards estilosos, com navegação fácil e responsiva.

---

![Node.js](https://img.shields.io/badge/Backend-Node.js-green)
![Express](https://img.shields.io/badge/Framework-Express-blue)
![TailwindCSS](https://img.shields.io/badge/CSS-Tailwind-red)
![JavaScript](https://img.shields.io/badge/Language-JavaScript-yellow)
![API](https://img.shields.io/badge/API-Marvel-red)

---

## 🔥 Features

- Busca dinâmica de heróis Marvel via API oficial (proxy Node.js/Express)
- Exibição em cards com imagem, nome e descrição
- Navegação entre heróis com botões “prev” e “next”
- Input de busca estilizado com ícone de lupa
- Layout responsivo e moderno usando Tailwind CSS
- Backend proxy para proteger suas chaves API Marvel

---

## ⚙️ Como rodar localmente

1. Clone o projeto:
   ```bash
   git clone https://seu-repo-aqui.git
   cd MarvelCards
   ```
   Instale dependências do backend:
   npm install

Crie o arquivo .env na raiz do projeto e adicione suas chaves da Marvel API:
PUBLIC_KEY=suapublickeyaqui
PRIVATE_KEY=suaprivatekeyaqui

Inicie o servidor backend:
node server.js

## Como funciona

Usuário digita nome do herói no campo de busca

Frontend envia a requisição para /api/characters?name=... no backend

Backend adiciona autenticação via MD5 hash + chaves Marvel

Backend consulta API oficial Marvel e retorna os dados pro frontend

Frontend renderiza o card com imagem, nome e descrição do herói

Usuário navega entre resultados com as setas ← e →
