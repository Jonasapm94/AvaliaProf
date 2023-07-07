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
import { TelaAvaliacaoComponent } from './paginas/tela-avaliacao/tela-avaliacao.component';
import { PaginasModule } from './paginas/paginas.module';
import { AvaliacaoModule } from './avaliacao/avaliacao.module';
import { DisciplinaModule } from './disciplina/disciplina.module';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    ProfessorModule,
    AlunoModule,
    FormsModule,
    HttpClientModule,
    PaginasModule,
    AvaliacaoModule,
    DisciplinaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
