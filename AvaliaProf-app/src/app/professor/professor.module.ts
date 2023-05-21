import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManutenirProfessorComponent } from './manutenir-professor/manutenir-professor.component';
import { ListarProfessorComponent } from './listar-professor/listar-professor.component';



@NgModule({
  declarations: [
    ManutenirProfessorComponent,
    ListarProfessorComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProfessorModule { }
