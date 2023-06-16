import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TelaAvaliacaoComponent } from './tela-avaliacao/tela-avaliacao.component';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { LayoutModule } from '../layout/layout.module';
import { TelaLoginComponent } from './tela-login/tela-login.component';

@NgModule({
  declarations: [
    TelaAvaliacaoComponent,
    TelaInicialComponent,
    TelaLoginComponent

  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    LayoutModule
  ]
})
export class PaginasModule { }
