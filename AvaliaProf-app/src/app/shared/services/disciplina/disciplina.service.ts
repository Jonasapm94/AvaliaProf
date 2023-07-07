import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Disciplina } from '../../models/disciplina';

let link = 'http://localhost:8080/disciplina';

@Injectable({
  providedIn: 'root'
})
export class DisciplinaService {

  constructor(private httpClient: HttpClient) { }

  listar(): Observable<Disciplina[]>{
    return this.httpClient.get<Disciplina[]>(link+'/listar');
  }

  inserir(disciplina: Disciplina): Observable<Disciplina>{
    return this.httpClient.post<Disciplina>(link+'/cadastrar', disciplina);
  }
}
