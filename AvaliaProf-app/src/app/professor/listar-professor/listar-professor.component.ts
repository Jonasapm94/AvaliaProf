import { Component, OnInit } from '@angular/core';
import { Professor } from 'src/app/shared/models/professor';
import { ProfessorFirestoreService } from 'src/app/shared/services/professor-firestore/professor-firestore.service';
import { ProfessorService } from 'src/app/shared/services/professor/professor.service';

@Component({
  selector: 'app-listar-professor',
  templateUrl: './listar-professor.component.html',
  styleUrls: ['./listar-professor.component.css']
})
export class ListarProfessorComponent implements OnInit{
  professores: Professor[]= [];

  constructor(private professorService: ProfessorFirestoreService) {

  }

  ngOnInit(): void {
    this.professorService.listar().subscribe(professoresRetornados => this.professores = professoresRetornados)
  }
}
