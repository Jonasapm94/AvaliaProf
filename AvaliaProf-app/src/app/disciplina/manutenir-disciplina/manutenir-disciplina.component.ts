import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Disciplina } from 'src/app/shared/models/disciplina';
import { DisciplinaService } from 'src/app/shared/services/disciplina/disciplina.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-manutenir-disciplina',
  templateUrl: './manutenir-disciplina.component.html',
  styleUrls: ['./manutenir-disciplina.component.css']
})
export class ManutenirDisciplinaComponent {
  public disciplina: Disciplina;
  isEdicao: boolean = false;

  constructor(private roteador:Router,
              private disciplinaService: DisciplinaService,
              private activatedRoute: ActivatedRoute) {
    this.disciplina= new Disciplina('',0)
    this.activatedRoute.params.subscribe(
      (parametros) => {
        if(parametros['id']) {
          this.disciplinaService.pegarPorId(parametros['id']).subscribe(
            (disciplinaRetornada:Disciplina) => {
              this.disciplina = disciplinaRetornada;
              this.isEdicao = true;
            }
          )
        }
      })
  }

  manutenir() {
    this.disciplinaService.inserir(this.disciplina).subscribe(
      (disciplinaRetornada:Disciplina) => {
        console.log(disciplinaRetornada);
        this.disciplina= new Disciplina('',0)
        this.roteador.navigate(['listardisciplina'])
      }
    )
  }

  editar() {
    this.disciplinaService.editar(this.disciplina).subscribe(
      (disciplinaRetornada:Disciplina) => {
        console.log(disciplinaRetornada);
        this.disciplina= new Disciplina('',0)
        this.isEdicao = false;
        this.roteador.navigate(['listardisciplina'])
      }
    )
  }
}
