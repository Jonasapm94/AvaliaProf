import { Component, OnInit } from '@angular/core';
import { Aluno } from 'src/app/shared/models/aluno';
import { AlunoFirestoreService } from 'src/app/shared/services/aluno-firestore/aluno-firestore.service';
import { AlunoService } from 'src/app/shared/services/aluno/aluno.service';

@Component({
  selector: 'app-listar-aluno',
  templateUrl: './listar-aluno.component.html',
  styleUrls: ['./listar-aluno.component.css']
})
export class ListarAlunoComponent implements OnInit{
  alunos: Aluno[] = [];

  constructor(private alunoService: AlunoFirestoreService) {

  }

  ngOnInit(): void {
     this.alunoService.listar().subscribe(alunosRetornados => this.alunos = alunosRetornados)
  }
}
