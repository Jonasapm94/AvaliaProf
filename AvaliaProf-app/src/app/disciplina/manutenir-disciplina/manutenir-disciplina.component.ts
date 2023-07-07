import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Disciplina } from 'src/app/shared/models/disciplina';
import { DisciplinaService } from 'src/app/shared/services/disciplina/disciplina.service';

@Component({
  selector: 'app-manutenir-disciplina',
  templateUrl: './manutenir-disciplina.component.html',
  styleUrls: ['./manutenir-disciplina.component.css']
})
export class ManutenirDisciplinaComponent {
  public disciplina: Disciplina;

  constructor(private roteador:Router,private disciplinaService: DisciplinaService) {
    this.disciplina= new Disciplina('')
  }

  manutenir() {
    this.disciplinaService.inserir(this.disciplina).subscribe(
      (disciplinaRetornada:Disciplina) => {
        console.log(disciplinaRetornada);
        this.disciplina= new Disciplina('')
        this.roteador.navigate(['cadastrardisciplina'])
      }
    )
  }
}
