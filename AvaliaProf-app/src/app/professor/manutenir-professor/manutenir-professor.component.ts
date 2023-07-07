import { Component, OnChanges } from '@angular/core';
import { Professor } from 'src/app/shared/models/professor';
import { ProfessorService } from 'src/app/shared/services/professor/professor.service';
import { Router } from '@angular/router';
import { Disciplina } from 'src/app/shared/models/disciplina';
import { DisciplinaService } from 'src/app/shared/services/disciplina/disciplina.service';

@Component({
  selector: 'app-manutenir-professor',
  templateUrl: './manutenir-professor.component.html',
  styleUrls: ['./manutenir-professor.component.css']
})
export class ManutenirProfessorComponent implements OnChanges{

  public professor: Professor;
  public disciplinas: Disciplina[] = [];

  constructor(private roteador: Router,
              private professorService:ProfessorService,
              private disciplinaService: DisciplinaService) {
    this.professor = new Professor(0,'','','','',[],[])
    this.disciplinaService.listar().subscribe(
      (disciplinasRetornadas: Disciplina[]) => {
        this.disciplinas = disciplinasRetornadas;
      })
  }

  ngOnChanges(){
  }

  manutenir() {
    console.log("professor que vai: ",this.professor);
    this.professor.id
    this.professorService.inserir(this.professor).subscribe(
      (professorRetornado) => {
        console.log("professor que chega: ",professorRetornado);
        this.professor = new Professor(0,'','','','',[],[]);
        this.roteador.navigate(['listarprofessores'])
      }
    )
  }
}
