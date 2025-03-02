import express from 'express';
import router from './routes';
import * as bcrypt from 'bcrypt';

const pass = 'minhasenha123';
const saltRounds = 10;


// Criptografar a senha
bcrypt.hash(pass, saltRounds, (error, hash) => {
  console.log(hash); // out: $2b$10$iP5g2q7.JSzX3S9BHJYmqecQKQicyK4em4HBu2AmGIe00QCobdFM.

  // Verificando se o hash corresponde à senha
  bcrypt.compare(pass, hash, (error, result) => {
    if (result) {
      console.log(result); // out: true
    } else {
      console.log('Hash diferente!'); // out: false
    }
  });
});



const server = express();

server.use(express.json());
server.use(router);

server.listen(3000);