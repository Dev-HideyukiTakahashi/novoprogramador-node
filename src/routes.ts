import { Router, Request, Response } from "express";
import AlunoController from "./controllers/AlunoController";

const router = Router();

const alunoController = new AlunoController();

router.get("/");  // root
router.get("/alunos", alunoController.getAll); // buscar todos os alunos
router.get("/alunos/:id", alunoController.getById); // buscar um aluno pelo id
router.post("/alunos", alunoController.add); // adicionar um aluno
router.put("/alunos/:id", alunoController.update); // editar um aluno
router.delete("/alunos/:id", alunoController.delete); // deleta um aluno


export default router;
