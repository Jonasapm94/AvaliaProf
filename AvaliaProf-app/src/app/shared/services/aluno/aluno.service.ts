import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { Aluno } from '../../models/aluno';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  constructor(private httpClient: HttpClient) {}

  listar(): Observable<Aluno[]>{
    return this.httpClient.get<Aluno[]>('http://localhost:3000/alunos');
  }

  inserir(aluno: Aluno): Observable<Aluno>{
    return this.httpClient.post<Aluno>('http://localhost:3000/alunos', aluno);
  }

  pegarId(aluno: Aluno): Observable<Aluno>{
    return this.httpClient.get<Aluno>(`http://localhost:3000/alunos/${aluno.id}`);
  }

  editar(aluno: Aluno): Observable<Aluno>{
    return this.httpClient.put<Aluno>(`http://localhost:3000/alunos/${aluno.id}`, aluno)
  }
}
