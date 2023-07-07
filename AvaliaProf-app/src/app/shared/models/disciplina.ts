import { Professor } from './professor';
export class Disciplina{
    nome: string;
    professores: Professor[] = [];
    constructor(nome: string){
        this.nome = nome;
    }

    public adicionarProfessor(professor: Professor): void{
        this.professores.push(professor);
    }

    public removerProfessor(professor: Professor): void{
        let index = this.professores.findIndex(professorAtual => professorAtual.id === professor.id);
        this.professores.splice(index, 1);
    }
}