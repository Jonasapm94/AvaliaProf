import { Component, OnInit } from '@angular/core';
import { ALUNOS } from 'src/app/shared/models/ALUNOS';
import { Aluno } from 'src/app/shared/models/aluno';
import { AlunoService } from 'src/app/shared/services/aluno/aluno.service';

@Component({
  selector: 'app-listar-aluno',
  templateUrl: './listar-aluno.component.html',
  styleUrls: ['./listar-aluno.component.css']
})
export class ListarAlunoComponent implements OnInit{
  alunos: Aluno[] = [];

  constructor(private alunoService: AlunoService) {

  }

  ngOnInit(): void {
     this.alunoService.listar().subscribe(alunosRetornados => this.alunos = alunosRetornados)
  }
}
