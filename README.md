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
