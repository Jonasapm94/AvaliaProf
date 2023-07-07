import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { Professor } from 'src/app/shared/models/professor';
import { DisciplinaService } from 'src/app/shared/services/disciplina/disciplina.service';
import { ProfessorService } from 'src/app/shared/services/professor/professor.service';

@Component({
  selector: 'app-listar-professor',
  templateUrl: './listar-professor.component.html',
  styleUrls: ['./listar-professor.component.css'],
})


export class ListarProfessorComponent{
  professores: Professor[]=[];
  disciplinas: string = ''
  displayedColumns: string[] = ['nome', 'matricula', 'media', 'navaliacoes','disciplinas', 'acoes'];
  constructor(private professorService: ProfessorService,
    private disciplinaService: DisciplinaService, 
    private router: Router) {
    this.professorService.listar().subscribe(
      (professoresRetornados:Professor[]) => 
      {this.professores = professoresRetornados;})
  }

  editar(professor: Professor){
    this.router.navigate(['editarprofessor', professor.id]);
  }

  excluir(professor: Professor){
    this.professorService.excluir(professor).subscribe(
      () => {
        this.professorService.listar().subscribe(
          (professoresRetornados:Professor[]) =>
          {
            for (let disciplina of professor.disciplinas) {
              disciplina.removerProfessor(professor);
              this.disciplinaService.editar(disciplina).subscribe();
            }
            this.professores = professoresRetornados;
          })
      }
    )
  }

  calcularMedia(professor: Professor): number{
    if(professor.avaliacoes.length == 0){
      return 0;
    }
    let soma = 0;
    let media = 0;
    for(let i = 0; i < professor.avaliacoes.length; i++){
      soma += professor.avaliacoes[i].nota;
    }
    media = soma/professor.avaliacoes.length;
    return media;
  }

  disciplinasToString(professor: Professor): string{
    this.disciplinas = '';
    for(let disciplina of professor.disciplinas){
      this.disciplinas += disciplina.nome + ', ';
    }
    return this.disciplinas;
  }
}
