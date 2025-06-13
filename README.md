# 📚 Biblioteca Virtual – Front-End com React.js

Este projeto é o front-end de uma **Biblioteca Virtual**, desenvolvido como parte de um projeto final. O sistema permite o gerenciamento e acesso a livros digitais com funcionalidades, desde autenticação até comentários e downloads.

## Funcionalidades

- **Upload de livros** (com autenticação)
- **Listagem e download de livros**
- **Pesquisa por título**
- **Comentários nos livros**
- **Cadastro e login de usuários**
- **Validação de token via localStorage**

## Tecnologias Utilizadas

- **React.js**
- **HTML5** e **CSS3**
- **Bootstrap 5**
- **Axios** para requisições HTTP
- **localStorage** para armazenamento do token JWT
- Integração com **Back-end**

## Funcionamento

1. O usuário cria uma conta ou faz login.
2. O token JWT é armazenado no `localStorage`.
3. Usuários autenticados podem:
   - Enviar livros (upload)
   - Comentar nos livros
   - Baixar os livros disponíveis
4. O sistema busca os dados da API usando `Axios`.

## Telas Desenvolvidas

- Tela de Login
- Tela de Cadastro
- Tela de Recuperação de Senha
- Página inicial com listagem de livros
- Página de upload
- Página de leitura e comentários
- Página de pesquisa
