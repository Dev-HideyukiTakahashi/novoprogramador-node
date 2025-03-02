import express from 'express';
import router from './routes';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';


// JWT
const payload = {
  userId: '95bdb07c-91c4-4063-934c-ac9fe41aefbb',
  name: 'John Doe'
};

const secret = 'f2abb721-338a-4409-a4a1-3358c6b89970';
const token = jwt.sign(payload, secret, { expiresIn: '1h' });
console.log(token);

try {
  const decoded = jwt.verify(token, secret);
  console.log("Decoded JWT: ", decoded);
} catch (err) {
  console.log(err);
}


// BCRYPT
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