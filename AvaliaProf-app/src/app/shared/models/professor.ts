import { Usuario } from "./usuario";
import { Disciplina } from "./disciplina";
import { Avaliacao } from "./avaliacao";

export class Professor extends Usuario{
    disciplinas:Disciplina[];
    formacao:string[];
    avaliacoes:Avaliacao[]=[];

    constructor(id:number,
                nome:string,
                matricula:string,
                email:string,
                senha:string,
                disicplinas:Disciplina[],
                formacao:string[]){
        super(id,nome,matricula,email,senha);
        this.disciplinas = disicplinas;
        this.formacao = formacao;
    }
}
