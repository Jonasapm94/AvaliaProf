import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarAvaliacoesComponent } from './listar-avaliacoes/listar-avaliacoes.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';



@NgModule({
  declarations: [
    ListarAvaliacoesComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule
  ],
  exports:[
    ListarAvaliacoesComponent
  ]
})
export class AvaliacaoModule { }
