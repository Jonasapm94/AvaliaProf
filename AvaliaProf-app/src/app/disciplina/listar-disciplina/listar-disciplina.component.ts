import { Component } from '@angular/core';
import { Disciplina } from 'src/app/shared/models/disciplina';
import { DisciplinaService } from 'src/app/shared/services/disciplina/disciplina.service';

@Component({
  selector: 'app-listar-disciplina',
  templateUrl: './listar-disciplina.component.html',
  styleUrls: ['./listar-disciplina.component.css']
})
export class ListarDisciplinaComponent {
  disciplinas:Disciplina[] = [];

  displayedColumns: string[] = ['nome', 'professor(es)'];

  constructor(private disciplinaService: DisciplinaService) {
    this.disciplinaService.listar().subscribe(
      (disciplinasRetornadas:Disciplina[]) => {
        this.disciplinas = disciplinasRetornadas;
      }
    )
  }


}
