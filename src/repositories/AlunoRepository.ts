import { IAluno } from "../models/Aluno";

class AlunoRepository {

  constructor() {

  }

  getAll(): IAluno[] {
    return [{ nome: "teste", email: "teste", telefone: "teste", senha: "teste", cpf: "teste" }];
  }

  getById(id: string): IAluno {
    return { nome: "teste", email: "teste", telefone: "teste", senha: "teste", cpf: "teste" };
  }

  add(data: IAluno): IAluno {
    return { nome: "teste", email: "teste", telefone: "teste", senha: "teste", cpf: "teste" };
  }

  update(id: string, data: IAluno): IAluno {
    return data;
  }

  delete(id: string) {
    return id;
  }

}

export default AlunoRepository;