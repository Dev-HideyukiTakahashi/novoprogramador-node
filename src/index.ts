import express, { Request, Response } from "express"

const server = express();

server.get("/", (req: Request, res: Response) => {
  res.json({ message: 'Hello World!' });
})

server.get("/criancas/:id", (req: Request, res: Response) => {
  const id = req.params.id;
  res.json({ message: 'Selecionou o pijama: ' + id });
})

server.listen(3000);