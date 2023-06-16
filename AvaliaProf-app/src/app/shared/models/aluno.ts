import { Usuario } from "./usuario";

export class Aluno extends Usuario{
    public curso:string;
    constructor(id:string,
        nome:string,
        matricula:string,
        email:string,
        senha:string,
        curso:string){
    super(id,nome,matricula,email,senha)
    this.curso = curso;
    }
}
