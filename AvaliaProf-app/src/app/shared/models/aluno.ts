import { Avaliacao } from "./avaliacao";
import { Usuario } from "./usuario";
import { Professor } from "./professor";

export class Aluno extends Usuario{
    private _curso:string;
    private _avaliacoes: Avaliacao[] = [];

    constructor(id:number,
        nome:string,
        matricula:string,
        email:string,
        senha:string,
        curso:string){
    super(id,nome,matricula,email,senha)
    this._curso = curso;
    }

    public getCurso():string{
        return this._curso;
    }

    public setCurso(curso:string):void{
        this._curso = curso;
    }

    public avaliarProfessor(professor:Professor, nota:number, comentario:string):void{
        let avaliacao:Avaliacao = new Avaliacao(nota, comentario, professor.getId(), this.getId());
        this._avaliacoes.push(avaliacao);
    }

    public getAvaliacoes():Avaliacao[]{
        return this._avaliacoes;
    }
}