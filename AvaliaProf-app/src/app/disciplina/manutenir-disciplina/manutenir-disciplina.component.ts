import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Disciplina } from 'src/app/shared/models/disciplina';
import { DisciplinaService } from 'src/app/shared/services/disciplina/disciplina.service';
import { ActivatedRoute } from '@angular/router';
import { MensagensService } from 'src/app/shared/services/mensagens/mensagens.service';
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
              private activatedRoute: ActivatedRoute,
              private mensagensService: MensagensService) {
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
    try{
      this.disciplinaService.inserir(this.disciplina).subscribe(
        (disciplinaRetornada:Disciplina) => {
          console.log(disciplinaRetornada);
          this.disciplina= new Disciplina('',0)
          this.mensagensService.sucesso('Disciplina cadastrada com sucesso!');
          this.roteador.navigate(['listardisciplina'])
        }
      )
    }catch(erro){
      this.mensagensService.erro('Erro ao cadastrar disciplina!');
    }
  }

  editar() {
    try{
      this.disciplinaService.editar(this.disciplina).subscribe(
        (disciplinaRetornada:Disciplina) => {
          console.log(disciplinaRetornada);
          this.disciplina= new Disciplina('',0)
          this.isEdicao = false;
          this.mensagensService.sucesso('Disciplina editada com sucesso!');
          this.roteador.navigate(['listardisciplina'])
        }
      )
    }
    catch(erro){
      this.mensagensService.erro('Erro ao editar disciplina!');
    }
  }
}
