import express from "express";
import router from './routes'

const server = express();

server.use(express.json())
server.use(router)
server.use((req, res) => {
  res.status(404).json({ message: 'Rota não encontrada' });
})

server.listen(3000);