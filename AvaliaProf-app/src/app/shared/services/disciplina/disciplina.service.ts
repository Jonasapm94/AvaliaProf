import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Disciplina } from '../../models/disciplina';


@Injectable({
  providedIn: 'root'
})
export class DisciplinaService {

  base_url = 'http://localhost:8080/disciplina';

  constructor(private httpClient: HttpClient) { }

  listar(): Observable<Disciplina[]>{
    return this.httpClient.get<Disciplina[]>(this.base_url+'/listar');
  }

  inserir(disciplina: Disciplina): Observable<Disciplina>{
    return this.httpClient.post<Disciplina>(this.base_url+'/cadastrar', disciplina);
  }
}
