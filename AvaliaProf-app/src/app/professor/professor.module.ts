import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManutenirProfessorComponent } from './manutenir-professor/manutenir-professor.component';
import { ListarProfessorComponent } from './listar-professor/listar-professor.component';
import { AngularMaterialModule } from 'src/app/angular-material/angular-material.module';

@NgModule({
  declarations: [
    ManutenirProfessorComponent,
    ListarProfessorComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule
  ],
  exports:[
    ManutenirProfessorComponent,
    ListarProfessorComponent
  ]
})
export class ProfessorModule { }
