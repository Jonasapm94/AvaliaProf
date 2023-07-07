import { Component } from '@angular/core';
import { Disciplina } from 'src/app/shared/models/disciplina';
import { DisciplinaService } from 'src/app/shared/services/disciplina/disciplina.service';
import { Router } from '@angular/router';
import { MensagensService } from 'src/app/shared/services/mensagens/mensagens.service';

@Component({
  selector: 'app-listar-disciplina',
  templateUrl: './listar-disciplina.component.html',
  styleUrls: ['./listar-disciplina.component.css']
})
export class ListarDisciplinaComponent {
  disciplinas:Disciplina[] = [];
  

  displayedColumns: string[] = ['nome', 'professor(es)','acoes'];

  constructor(private disciplinaService: DisciplinaService,
              private router: Router,
              private mensagensService: MensagensService){
    this.disciplinaService.listar().subscribe(
      (disciplinasRetornadas:Disciplina[]) => {
        this.disciplinas = disciplinasRetornadas;
      }
    )
  }

  professorToString(professores: any[]) {
    let professoresString = '';
    for (let professor of professores) {
      professoresString += professor.nome + ', ';
    }
    return professoresString;
  }

  excluir(disciplina: Disciplina) {
    try{

      this.disciplinaService.excluir(disciplina).subscribe(
        () => {
          this.disciplinaService.listar().subscribe(
            (disciplinasRetornadas:Disciplina[]) => {
              this.disciplinas = disciplinasRetornadas;
              this.mensagensService.sucesso('Disciplina excluída com sucesso!');
            }
          )
        }
      )
    }catch(error){
      this.mensagensService.erro('Erro ao excluir disciplina!');
    }
  }

  editar(disciplina: Disciplina) {
    this.router.navigate(['editardisciplina', disciplina.id]);
  }



}
