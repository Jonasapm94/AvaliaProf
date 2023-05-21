import { Aluno } from "./aluno";
import { Professor } from "./professor";

export class Avaliacao{
    public professor:Professor;
    public aluno:Aluno;
    public nota:number;
    public comentario:string;

    constructor(nota:number,
                comentario:string,
                professor:Professor,
                aluno:Aluno){
        this.professor = professor;
        this.aluno = aluno;
        this.comentario = comentario;
        this.nota = nota;
    }
}