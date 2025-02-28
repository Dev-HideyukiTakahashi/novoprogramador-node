import { Request, Response } from 'express';
import AlunoService from '../services/AlunoService';
import { v4 as uuidv4 } from 'uuid';

const alunoService = new AlunoService();

class AlunoController {

  constructor() {

  }

  getAll(req: Request, res: Response) {
    //Validar dados

    //Chamar o service
    const result = alunoService.getAll();
    res.json(result);
  }

  getById(req: Request, res: Response) {
    const result = alunoService.getById(req.params.id);
    res.json(result);
  }

  add(req: Request, res: Response) {

    const id = uuidv4();
    req.body.id = id;
    const result = alunoService.add(req.body);
    res.json(result);
  }

  update(req: Request, res: Response) {
    const result = alunoService.update(req.params.id, req.body);
    res.json(result);
  }

  delete(req: Request, res: Response) {
    const result = alunoService.delete(req.params.id);
    res.json(result);
  }

}

export default AlunoController;