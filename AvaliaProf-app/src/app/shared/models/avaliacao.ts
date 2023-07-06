export class Avaliacao{
    public idProfessor:number;
    public idAluno:number;
    public nota:number;
    public comentario:string;

    constructor(nota:number,
                comentario:string,
                idProfessor:number,
                idAluno:number){
        this.idProfessor = idProfessor;
        this.idAluno = idAluno;
        this.comentario = comentario;
        this.nota = nota;
    }
}