import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { RouterLink } from '@angular/router';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    RouterLink
  ],
  exports:[
    NavbarComponent,
    FooterComponent
  ]
})
export class LayoutModule { }
