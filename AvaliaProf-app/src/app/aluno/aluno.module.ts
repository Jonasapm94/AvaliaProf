import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarAlunoComponent } from './listar-aluno/listar-aluno.component';
import { ManutenirAlunoComponent } from './manutenir-aluno/manutenir-aluno.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
  
    ListarAlunoComponent,
    ManutenirAlunoComponent,

  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    FormsModule
  ]
})
export class AlunoModule { }
