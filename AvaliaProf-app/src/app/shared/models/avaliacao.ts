export class Avaliacao{
  id? : number;
  idAluno? : number;
  idProfessor? : number;
  comentario : string;
  nota : number;

  constructor(comentario: string, nota: number){
    this.comentario = comentario;
    this.nota = nota;
  }
}
