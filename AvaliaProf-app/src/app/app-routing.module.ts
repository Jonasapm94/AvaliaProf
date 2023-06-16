import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManutenirProfessorComponent } from './professor/manutenir-professor/manutenir-professor.component';
import { ListarProfessorComponent } from './professor/listar-professor/listar-professor.component';
import { ManutenirAlunoComponent } from './aluno/manutenir-aluno/manutenir-aluno.component';
import { ListarAlunoComponent } from './aluno/listar-aluno/listar-aluno.component';
import { TelaInicialComponent } from './paginas/tela-inicial/tela-inicial.component';
import { TelaAvaliacaoComponent } from './paginas/tela-avaliacao/tela-avaliacao.component';
import { TelaLoginComponent } from './paginas/tela-login/tela-login.component';


const routes: Routes = [
  {
    path:'',
    component:TelaInicialComponent
  },
  {
    path: 'cadastrarprofessor',
    component: ManutenirProfessorComponent
  },
  {
    path: 'listarprofessores',
    component: ListarProfessorComponent
  },
  {
    path: 'cadastraraluno',
    component: ManutenirAlunoComponent
  },
  {
    path: 'listaralunos',
    component: ListarAlunoComponent
  },
  {
    path: 'avaliacaoprofessor',
    component: TelaAvaliacaoComponent
  },
  {
    path: 'home',
    component: TelaInicialComponent
  },
  {
    path: 'telalogin',
    component: TelaLoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
