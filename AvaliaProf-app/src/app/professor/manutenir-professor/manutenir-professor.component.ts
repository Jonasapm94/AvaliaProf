import { Component } from '@angular/core';
import { Professor } from 'src/app/shared/models/professor';
import { ProfessorService } from 'src/app/shared/services/professor/professor.service';
import { Router } from '@angular/router';
import { ProfessorFirestoreService } from 'src/app/shared/services/professor-firestore/professor-firestore.service';

@Component({
  selector: 'app-manutenir-professor',
  templateUrl: './manutenir-professor.component.html',
  styleUrls: ['./manutenir-professor.component.css']
})
export class ManutenirProfessorComponent {
  professor: Professor;
  constructor(private roteador: Router, private professorService:ProfessorFirestoreService) {
    this.professor = new Professor("",'','','','',[],[])
  }

  manutenir() {
    this.professorService.inserir(this.professor).subscribe(
      (professorRetornado) => {
        console.log(professorRetornado);
        this.professor = new Professor("",'','','','',[],[]);
        this.roteador.navigate(['listarprofessores'])
      }
    )
  }
}
