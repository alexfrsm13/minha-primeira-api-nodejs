# 🚀 Primeira API com Node.js

> Projeto desenvolvido com o objetivo de compreender profundamente o funcionamento do protocolo HTTP e do ecossistema Node.js **sem a utilização de frameworks** (como Express ou NestJS).

## 💻 Sobre o Projeto

Nesta aplicação, toda a lógica de um servidor web foi construída "do zero" utilizando apenas módulos nativos do Node.js. O foco principal foi desmistificar a "mágica" que os frameworks entregam pronta, implementando manualmente:

- **Roteamento Dinâmico:** Um sistema próprio para interpretar URLs com parâmetros (ex: `/resource/:id`) utilizando **Regex**.
- **Body Parser:** Leitura e montagem de dados recebidos via `Stream` (Buffers) para JSON.
- **Persistência de Dados:** Um banco de dados JSON físico (`db.json`) com operações de CRUD.

## 🛠 Tecnologias Utilizadas

- **Node.js** (Runtime)
- **JavaScript** (ESModules)
- **Módulos Nativos:**
  - `node:http`: Criação do servidor e gerenciamento de requisições/respostas.
  - `node:fs`: Manipulação de arquivos para o banco de dados.

## ⚙️ Arquitetura e Conceitos

O projeto foi estruturado para simular uma arquitetura robusta, separando responsabilidades:

| Arquivo | Responsabilidade |
|---|---|
| `server.js` | Ponto de entrada que inicializa o servidor e encadeia os middlewares. |
| `routes.js` | Definição das rotas, métodos HTTP e vincular os Controllers. |
| `database.js` | Classe responsável pela persistência dos dados no arquivo `db.json`. |
| `jsonBodyHandler.js` | Middleware que consome a Stream de entrada, concatena os Buffers e converte para JSON. |
| `routeHandler.js` | Middleware que intercepta a requisição, encontra a rota correta via Regex e extrai parâmetros. |
| `parseRoutePath.js` | Utilitário que transforma strings de rota (ex: `/users/:id`) em Expressões Regulares. |

## 🔌 Rotas da API

### Produtos (`/products`)

| Método | Rota | Descrição |
|---|---|---|
| **GET** | `/products` | Retorna a lista de todos os produtos cadastrados. Aceita Query Params para filtro (ex: `?search=Note`). |
| **POST** | `/products` | Cria um novo produto no banco de dados. |
| **DELETE** | `/products/:id` | Remove um produto baseado no ID informado na rota. |

#### Exemplo de Requisição (POST)

```json
POST /products
Content-Type: application/json

{
  "name": "Notebook Gamer",
  "price": 4500.00
}
```

## 🚀 Como Executar

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina o [Git](https://git-scm.com) e o [Node.js](https://nodejs.org/en/).
Além disso, é bom ter um editor para trabalhar com o código, como o [VSCode](https://code.visualstudio.com/).

### 🎲 Passo a passo

```bash
# Clone este repositório
$ git clone [https://github.com/alexfrsm13/minha-primeira-api-nodejs.git](https://github.com/alexfrsm13/minha-primeira-api-nodejs.git)

# Acesse a pasta do projeto no terminal/cmd
$ cd minha-primeira-api-nodejs

# Instale as dependências (caso tenha criado um package.json)
$ npm install

# Execute a aplicação em modo de desenvolvimento
# (A flag --watch reinicia o servidor automaticamente ao salvar arquivos - Node v18+)
$ node --watch server.js

# Ou execute de forma padrão
$ node server.js
```

## 🧠 Aprendizados

O desenvolvimento deste projeto foi desafiador e permitiu compreender como frameworks modernos funcionam "por baixo dos panos", focando em conceitos fundamentais:

- **Streams e Buffers:** Entendimento da diferença entre Streams de Leitura (`req`) e Escrita (`res`) e manipulação de dados binários (Chunks).
- **Middlewares Manuais:** Implementação do padrão *Chain of Responsibility* sem uso de bibliotecas externas.
- **Protocolo HTTP:** Compreensão profunda de **Status Codes**, **Headers** e métodos.
- **Roteamento Avançado:** Uso de **Expressões Regulares (Regex)** para criar rotas dinâmicas e extração de parâmetros de URL e Query Strings.

## 🦸 Autor

Feito com 💜 por **Alex**.

[![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/alex-fernando-0542aa279/)]([alex-fernando-0542aa279](https://www.linkedin.com/in/alex-fernando-0542aa279/))

## 📝 Licença

Este projeto está sob a licença **MIT**. Veja o arquivo [LICENSE](./LICENSE) para mais detalhes.

```
MIT License

Copyright (c) 2026 Alex Fernando

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```