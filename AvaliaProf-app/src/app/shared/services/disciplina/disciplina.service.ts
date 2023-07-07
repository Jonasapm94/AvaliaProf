import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Disciplina } from '../../models/disciplina';

// let link = 'http://localhost:8080/disciplina';
let link = 'http://localhost:3000/disciplinas'

@Injectable({
  providedIn: 'root'
})
export class DisciplinaService {

  constructor(private httpClient: HttpClient) { }

  listar(): Observable<Disciplina[]>{
    return this.httpClient.get<Disciplina[]>(link);
  }

  inserir(disciplina: Disciplina): Observable<Disciplina>{
    return this.httpClient.post<Disciplina>(link, disciplina);
  }

  pegarPorId(id:string): Observable<Disciplina>{
    return this.httpClient.get<Disciplina>(`${link}/${id}`);
  }

  editar(disciplina: Disciplina): Observable<Disciplina>{
    return this.httpClient.put<Disciplina>(`${link}/${disciplina.id}`, disciplina)
  }

  excluir(disciplina: Disciplina): Observable<Disciplina>{
    return this.httpClient.delete<Disciplina>(`${link}/${disciplina.id}`)
  }
}
