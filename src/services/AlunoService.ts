import { IAluno } from "../models/Aluno";
import AlunoRepository from "../repositories/AlunoRepository";

const alunoRepository = new AlunoRepository();


class AlunoService {

  constructor() {

  }

  getAll(): IAluno[] {
    return alunoRepository.getAll();
  }

  getById(id: string): IAluno {
    return alunoRepository.getById(id);
  }

  add(data: IAluno): IAluno {
    return alunoRepository.add(data);
  }

  update(id: string, data: IAluno): IAluno {
    return alunoRepository.update(id, data)
  }

  delete(id: string): string {
    return alunoRepository.delete(id);
  }


}

export default AlunoService;