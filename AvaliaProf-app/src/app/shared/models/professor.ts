import { Usuario } from "./usuario";
import { Disciplina } from "./disciplina";
import { Avaliacao } from "./avaliacao";

export class Professor extends Usuario{
    disciplinas:Disciplina[];
    formacoes:string[];
    avaliacoes:Avaliacao[]=[];
    
    constructor(id:number,
                nome:string,
                matricula:string,
                email:string,
                senha:string,
                disicplinas:Disciplina[],
                formacoes:string[]){
        super(id,nome,matricula,email,senha);
        this.disciplinas = disicplinas;
        this.formacoes = formacoes;
    }
}