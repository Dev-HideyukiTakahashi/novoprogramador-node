import { Request, Response } from 'express';
import AlunoService from '../services/AlunoService';

const alunoService = new AlunoService();

class AlunoController {

  constructor() {

  }

  getAll(req: Request, res: Response) {
    //Validar dados

    //Chamar o service
    const result = alunoService.getAll();
  }

  getById(req: Request, res: Response) {
    const result = alunoService.getById(req.params.id);
  }

  add(req: Request, res: Response) {
    const result = alunoService.add(req.body);
  }

  update(req: Request, res: Response) {
    const result = alunoService.update(req.params.id, req.body);
  }

  delete(req: Request, res: Response) {
    const result = alunoService.delete(req.params.id);
  }

}

export default AlunoController;