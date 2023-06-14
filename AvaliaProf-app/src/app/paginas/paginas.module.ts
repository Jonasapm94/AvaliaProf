import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TelaLoginComponent } from './tela-login/tela-login.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';

@NgModule({
  declarations: [
    TelaLoginComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
  ]
})
export class PaginasModule { }
