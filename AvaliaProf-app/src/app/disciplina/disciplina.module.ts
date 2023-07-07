import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManutenirDisciplinaComponent } from './manutenir-disciplina/manutenir-disciplina.component';
import { ListarDisciplinaComponent } from './listar-disciplina/listar-disciplina.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';



@NgModule({
  declarations: [
    ManutenirDisciplinaComponent,
    ListarDisciplinaComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule
  ],
  exports:[
    ManutenirDisciplinaComponent,
    ListarDisciplinaComponent
  ]
})
export class DisciplinaModule { }
