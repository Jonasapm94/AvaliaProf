export class Avaliacao{
    public idProfessor:string;
    public idAluno:string;
    public nota:number;
    public comentario:string;

    constructor(nota:number,
                comentario:string,
                idProfessor:string,
                idAluno:string){
        this.idProfessor = idProfessor;
        this.idAluno = idAluno;
        this.comentario = comentario;
        this.nota = nota;
    }
}