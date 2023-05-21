import { Usuario } from "./usuario";

export class Professor extends Usuario{
  disciplinas: string[];
  formacao: string[];

  constructor(
    nome: string,
    email: string,
    senha: string,
    matricula: string,
    disciplinas: string[],
    formacao: string[]
    ){
    super(nome,email,senha,matricula);
    this.disciplinas = disciplinas;
    this.formacao = formacao;
  }
}
