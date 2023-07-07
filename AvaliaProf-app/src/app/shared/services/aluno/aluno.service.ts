import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { Aluno } from '../../models/aluno';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  base_url: string = "http://localhost:8080/aluno"

  constructor(private httpClient: HttpClient) {}

  listar(): Observable<Aluno[]>{
    return this.httpClient.get<Aluno[]>(`${this.base_url}/listar`);
  }

  inserir(aluno: Aluno): Observable<Aluno>{
    return this.httpClient.post<Aluno>(`${this.base_url}/inserir`, aluno);
  }

  pegarPorId(id:string): Observable<Aluno>{
    return this.httpClient.get<Aluno>(`${this.base_url}${id}`);
  }

  editar(aluno: Aluno): Observable<Aluno>{
    return this.httpClient.put<Aluno>(`/${aluno.id}`, aluno)
  }
}
