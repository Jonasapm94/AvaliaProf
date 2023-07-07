import { Component, OnInit } from '@angular/core';
import { Professor } from 'src/app/shared/models/professor';
import { ProfessorService } from 'src/app/shared/services/professor/professor.service';

@Component({
  selector: 'app-listar-professor',
  templateUrl: './listar-professor.component.html',
  styleUrls: ['./listar-professor.component.css'],
})


export class ListarProfessorComponent{
  professores: Professor[]=[];
  displayedColumns: string[] = ['nome', 'matricula', 'media', 'nAvaliacoes','acoes'];

  constructor(private professorService: ProfessorService) {
    this.professorService.listar().subscribe(
      (professoresRetornados:Professor[]) => 
      {this.professores = professoresRetornados
        console.log(this.professores)})

    
  }

  calcularMedia(professor: Professor): number{
    let soma = 0;
    if(professor.avaliacoes.length == 0){
      return 0
    }
    professor.avaliacoes.forEach(avaliacao => soma += avaliacao.nota);
    return soma/professor.avaliacoes.length;
  }
}
