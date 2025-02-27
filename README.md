### 📌 **Nodemon**

🔗 [Página oficial no NPM](https://www.npmjs.com/package/nodemon)

#### 📥 **Instalação**

- Instalação global:
  ```sh
  npm install -g nodemon
  ```
- Instalação no projeto (dependência de desenvolvimento):
  ```sh
  npm install --save-dev nodemon
  ```

#### 🚀 **O que é?**

`nodemon` é uma ferramenta que monitora alterações nos arquivos do projeto e reinicia automaticamente a aplicação Node.js, agilizando o desenvolvimento.

#### 🎯 **Principais benefícios**

✅ Reinício automático do servidor ao detectar mudanças  
✅ Evita a necessidade de parar e reiniciar manualmente  
✅ Configuração flexível para monitoramento de arquivos

#### ⚡ **Como usar**

- Rodar o servidor com `nodemon`:
  ```sh
  nodemon index.js
  ```
- Exemplo de configuração no `package.json`:
  ```json
  "scripts": {
    "start": "nodemon index.js"
  }
  ```
  Depois, basta rodar:
  ```sh
  npm start
  ```

---

### 📌 **Express.js**

🔗 [Documentação oficial](https://expressjs.com/pt-br/)

#### 📥 **Instalação**

- Instalar como dependência do projeto:
  ```sh
  npm install express
  ```
- Se estiver usando TypeScript, instale os tipos:
  ```sh
  npm install --save-dev @types/express
  ```

#### 🚀 **O que é?**

`Express.js` é um framework minimalista e flexível para Node.js, usado para criar servidores e APIs de forma rápida e organizada.

#### 🎯 **Principais características**

✅ Simplicidade na criação de rotas  
✅ Suporte a middlewares para requisições/respostas  
✅ Integração fácil com bancos de dados e outros pacotes

#### ⚡ **Criando um servidor básico**

##### **JavaScript**

```javascript
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
```

##### **TypeScript**

```typescript
import express, { Request, Response } from "express";

const app = express();
const PORT = 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, Express with TypeScript!");
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
```

#### 🛠 **Middleware básico**

Os **middlewares** são funções que interceptam requisições antes de chegar às rotas. Exemplo de um middleware para log:

```javascript
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} - ${req.url}`);
  next(); // Continua para a próxima função
});
```

#### 📌 **Rotas**

- **GET**
  ```javascript
  app.get("/users", (req, res) => {
    res.json({ users: ["Alice", "Bob", "Charlie"] });
  });
  ```
- **POST** (usando `express.json()` para lidar com JSON)

  ```javascript
  app.use(express.json());

  app.post("/users", (req, res) => {
    const { name } = req.body;
    res.status(201).json({ message: `Usuário ${name} criado!` });
  });
  ```

- **Parâmetros na URL**
  ```javascript
  app.get("/users/:id", (req, res) => {
    const userId = req.params.id;
    res.json({ message: `Buscando usuário de ID ${userId}` });
  });
  ```

#### 🔗 **Iniciando com `nodemon`**

Para reiniciar o servidor automaticamente ao salvar mudanças, adicione um script no `package.json`:

```json
"scripts": {
  "dev": "nodemon server.js"
}
```

E execute:

```sh
npm run dev
```

---

### 🔹 **Anotações sobre `typescript` e `ts-node` no projeto**

#### 📌 **Instalação necessária**

Para rodar arquivos TypeScript corretamente no Node.js, foi preciso instalar as dependências:

```sh
npm i typescript
npm i ts-node
```

#### 📌 **Por que essas dependências são importantes?**

- **`typescript`** → Compilador oficial do TypeScript.
- **`ts-node`** → Permite executar arquivos `.ts` diretamente no Node.js sem precisar compilar antes.

#### 📌 **Configuração para rodar o projeto**

Com `nodemon`, o comando correto para rodar o projeto sem erros é:

```sh
nodemon -r ts-node/register src/index.ts
```

Ou configurar um arquivo `nodemon.json`:

```json
{
  "watch": ["src"],
  "ext": "ts",
  "exec": "ts-node src/index.ts"
}
```

#### 📌 **Arquivo `tsconfig.json` recomendado**

Caso haja erros ao rodar, o `tsconfig.json` deve conter:

```json
{
  "compilerOptions": {
    "module": "CommonJS",
    "target": "ESNext",
    "strict": true
  }
}
```
