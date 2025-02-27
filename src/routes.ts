import { Request, Response, Router } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.json({ message: 'Hello World!' });
})

router.get("/criancas/:id", (req: Request, res: Response) => {
  const id = req.params.id;
  res.json({ message: 'Selecionou o pijama: ' + id });
})

export default router;
