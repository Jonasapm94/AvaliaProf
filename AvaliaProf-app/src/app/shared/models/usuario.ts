export class Usuario{
  id?: number;
  nome: string;
  email: string;
  senha: string;
  matricula: string;

  constructor(
    nome: string,
    email: string,
    senha: string,
    matricula: string
  ) {
    this.nome = nome;
    this.email = email;
    this.senha = senha;
    this.matricula = matricula;
  }



}
