import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Usuario} from "../../models/usuario";
import { Aluno } from '../../models/aluno';
import { Professor } from '../../models/professor';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private httpClient: HttpClient) { }

  //Alunos
  listarAlunos(): Observable<Aluno[]>{
    return this.httpClient.get<Aluno[]>('http://localhost:3000/alunos');
  }

  inserirAluno(aluno: Aluno): Observable<Aluno>{
    return this.httpClient.post<Aluno>('http://localhost:3000/alunos', aluno);
  }

  getAlunoById(aluno: Aluno): Observable<Aluno>{
    return this.httpClient.get<Aluno>(`http://localhost:3000/alunos/${aluno.id}`);
  }

  editarAluno(aluno: Aluno): Observable<Aluno>{
    return this.httpClient.put<Aluno>(`http://localhost:3000/alunos/${aluno.id}`, aluno)
  }


  //Professores
  listarProfessores(): Observable<Professor[]>{
    return this.httpClient.get<Professor[]>('http://localhost:3000/professores');
  }

  inserirProfessor(professor: Professor): Observable<Professor>{
    return this.httpClient.post<Professor>('http://localhost:3000/professores', professor);
  }

  getProfessorById(professor: Professor): Observable<Professor>{
    return this.httpClient.get<Professor>(`http://localhost:3000/professores/${professor.id}`);
  }

  editarProfessor(professor: Professor): Observable<Professor>{
    return this.httpClient.put<Professor>(`http://localhost:3000/professores/${professor.id}`, professor)
  }

}
