import { Usuario } from "./usuario";

export class Aluno extends Usuario{
  curso: string;
  constructor(nome: string, email: string, senha: string, matricula: string, curso: string){
    super(nome,email,senha,matricula);
    this.curso = curso;
  }
}
