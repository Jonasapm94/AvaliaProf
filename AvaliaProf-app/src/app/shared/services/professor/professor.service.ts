import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { Professor } from '../../models/professor';

//let link:string = 'http://localhost:8080/professor';
let link:string = 'http://localhost:3000/professores';
@Injectable({
  providedIn: 'root'
})
export class ProfessorService {
  constructor(private httpClient: HttpClient) { }

  listar(): Observable<Professor[]>{
    return this.httpClient.get<Professor[]>(link);
  }

  inserir(professor: Professor): Observable<Professor>{
    return this.httpClient.post<Professor>(link, professor);
  }

  pegarPorId(id:string): Observable<Professor>{
    return this.httpClient.get<Professor>(`${link}/${id}`);
  }

  editar(professor: Professor): Observable<Professor>{
    return this.httpClient.put<Professor>(`${link}/${professor.id}`, professor)
  }

  excluir(professor: Professor): Observable<Professor>{
    return this.httpClient.delete<Professor>(`${link}/${professor.id}`)
  }

}
