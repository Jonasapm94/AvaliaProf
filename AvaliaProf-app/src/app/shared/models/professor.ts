import { Usuario } from "./usuario";

export class Professor extends Usuario{
    disciplinas:string[];
    formacoes:string[];
    constructor(id:number,
                nome:string,
                matricula:string,
                email:string,
                senha:string,
                disicplinas:string[],
                formacoes:string[]){
        super(id,nome,matricula,email,senha);
        this.disciplinas = disicplinas;
        this.formacoes = formacoes;
    }
}