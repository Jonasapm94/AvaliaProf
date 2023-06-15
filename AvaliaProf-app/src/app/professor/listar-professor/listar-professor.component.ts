import { Component, OnInit } from '@angular/core';
import { Professor } from 'src/app/shared/models/professor';
import { ProfessorService } from 'src/app/shared/services/professor/professor.service';

@Component({
  selector: 'app-listar-professor',
  templateUrl: './listar-professor.component.html',
  styleUrls: ['./listar-professor.component.css']
})
export class ListarProfessorComponent implements OnInit{
  professores: Professor[]= [];

  constructor(private professorService: ProfessorService) {

  }

  ngOnInit(): void {
    this.professorService.listar().subscribe(professoresRetornados => this.professores = professoresRetornados)
  }
}
