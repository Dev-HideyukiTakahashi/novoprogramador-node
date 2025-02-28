import { IAluno } from "../models/Aluno";



class AlunoService {

  constructor() {

  }

  getAll(): IAluno[] {
    return [{ nome: "teste", email: "teste", telefone: "teste", senha: "teste", cpf: "teste" }];
  }

  getById(id: string): IAluno {
    return { nome: "teste", email: "teste", telefone: "teste", senha: "teste", cpf: "teste" };
  }

  add(data: IAluno): IAluno {
    return data;
  }

  update(id: string, data: any): IAluno {
    return { nome: "teste", email: "teste", telefone: "teste", senha: "teste", cpf: "teste" };
  }

  delete(id: string): IAluno {
    return { nome: "teste", email: "teste", telefone: "teste", senha: "teste", cpf: "teste" };
  }


}

export default AlunoService;