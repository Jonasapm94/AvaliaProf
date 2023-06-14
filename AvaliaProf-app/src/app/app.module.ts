import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { ProfessorModule } from './professor/professor.module';
import { AlunoModule } from './aluno/aluno.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TelaInicialComponent } from './paginas/tela-inicial/tela-inicial.component';


@NgModule({
  declarations: [
    AppComponent,
    TelaInicialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    ProfessorModule,
    AlunoModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
