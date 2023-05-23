import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { Professor } from '../../models/professor';


@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

  constructor(private httpClient: HttpClient) { }

  listar(): Observable<Professor[]>{
    return this.httpClient.get<Professor[]>('http://localhost:3000/professores');
  }

  inserir(professor: Professor): Observable<Professor>{
    return this.httpClient.post<Professor>('http://localhost:3000/professores', professor);
  }

  pegarId(professor: Professor): Observable<Professor>{
    return this.httpClient.get<Professor>(`http://localhost:3000/professores/${professor.id}`);
  }

  editar(professor: Professor): Observable<Professor>{
    return this.httpClient.put<Professor>(`http://localhost:3000/professores/${professor.id}`, professor)
  }
}
