import { Component, OnChanges } from '@angular/core';
import { Professor } from 'src/app/shared/models/professor';
import { ProfessorService } from 'src/app/shared/services/professor/professor.service';
import { Router } from '@angular/router';
import { Disciplina } from 'src/app/shared/models/disciplina';
import { DisciplinaService } from 'src/app/shared/services/disciplina/disciplina.service';
import { ActivatedRoute } from '@angular/router';
import { MensagensService } from 'src/app/shared/services/mensagens/mensagens.service';

@Component({
  selector: 'app-manutenir-professor',
  templateUrl: './manutenir-professor.component.html',
  styleUrls: ['./manutenir-professor.component.css']
})
export class ManutenirProfessorComponent implements OnChanges{
  
  public isEdicao: boolean = false;
  public professor: Professor;
  public disciplinas: Disciplina[] = [];
  
  constructor(private roteador: Router,
              private rotaAtiva: ActivatedRoute, 
              private professorService:ProfessorService,
              private disciplinaService: DisciplinaService,
              private mensagensService: MensagensService) {
    this.professor = new Professor(0,'','','','',[],[])
    this.disciplinaService.listar().subscribe(
      (disciplinasRetornadas: Disciplina[]) => {
        this.disciplinas = disciplinasRetornadas;
      })
    this.rotaAtiva.params.subscribe(
      (parametros) => {
        if(parametros['id']){
          this.professorService.pegarPorId(parametros['id']).subscribe(
            (professorRetornado: Professor) => {
              this.professor = professorRetornado;
              this.isEdicao = true;
            }
          )
        }
      })
  }

  ngOnChanges(){
    console.log(this.professor)
  }

  manutenir() {
    try{

      this.professorService.inserir(this.professor).subscribe(
        (professorRetornado) => {
          for (let disciplina of this.professor.disciplinas) {
            disciplina.professores.push(professorRetornado);
            this.disciplinaService.editar(disciplina).subscribe();
          }
          this.professor = new Professor(0,'','','','',[],[]);
          this.mensagensService.sucesso('Professor cadastrado com sucesso!');
          this.roteador.navigate(['listarprofessores'])
        }
      )
    } catch(erro){
      this.mensagensService.erro('Erro ao cadastrar professor!');
    }
  }

  editar() {
    try{
      this.professorService.editar(this.professor).subscribe(
        (professorRetornado) => {
          for (let disciplina of this.professor.disciplinas) {
            disciplina.professores.push(professorRetornado);
            this.disciplinaService.editar(disciplina).subscribe();
          }
          this.professor = new Professor(0,'','','','',[],[]);
          this.isEdicao = false;
          this.mensagensService.sucesso('Professor editado com sucesso!');
          this.roteador.navigate(['listarprofessores'])
        }
      )
    } catch(erro){
      this.mensagensService.erro('Erro ao editar professor!');
    }
  }
}
