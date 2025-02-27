import { Request, Response, Router } from "express";

const router = Router();

//http://localhost:3000/criancas/1?tamanho=P&cor=azul
router.get("/criancas/:id", (req: Request, res: Response) => {
  const id = req.params.id;
  const { tamanho, cor } = req.query;
  res.json({ message: 'Selecionou o pijama: ' + id + ' tamanho: ' + tamanho + ' cor: ' + cor });
})

//http://localhost:3000/painel/pijama
router.post("/painel/pijama", (req: Request, res: Response) => {
  const { nome, tamanho, cor, preco, quantidade_estoque } = req.body;

  res.json({ message: 'Cadastrou o pijama: ' + nome + ' tamanho: ' + tamanho + ' cor: ' + cor + ' preco: ' + preco + ' quantidade_estoque: ' + quantidade_estoque });
});

//http://localhost:3000/painel/pijama/:id
router.put("/painel/pijama", (req: Request, res: Response) => {
  const { nome, tamanho, cor, preco, quantidade_estoque } = req.body;
  const { id } = req.params;
  const { authorization } = req.headers;

  if (!authorization) {
    res.status(401);
    res.json({ message: 'Token não informado' });
  }
  res.json({ message: 'ID: ' + id + ' Atualizou o pijama: ' + nome + ' tamanho: ' + tamanho + ' cor: ' + cor + ' preco: ' + preco + ' quantidade_estoque: ' + quantidade_estoque + " Token: " + authorization });
});


//http://localhost:3000/painel/pijama/1
router.delete("/painel/:id", (req: Request, res: Response) => {
  const { id } = req.body;
  res.json({ message: 'Deletou o pijama: ' + id });
})



export default router;
