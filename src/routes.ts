import { Router, Request, Response, NextFunction } from "express";
import AlunoController from "./controllers/AlunoController";

const router = Router();

const alunoController = new AlunoController();

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  if (req.headers.authorization) {
    // validar o token
    next();
  } else {
    res.json({ message: 'Token não informado' });
  }
}

router.get("/");  // root
router.get("/alunos", alunoController.getAll); // buscar todos os alunos
router.get("/alunos/:id", authMiddleware, alunoController.getById); // buscar um aluno pelo id
router.post("/alunos", alunoController.add); // adicionar um aluno
router.put("/alunos/:id", alunoController.update); // editar um aluno
router.delete("/alunos/:id", alunoController.delete); // deleta um aluno


export default router;
