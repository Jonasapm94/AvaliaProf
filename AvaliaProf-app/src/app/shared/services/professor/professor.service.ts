import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { Professor } from '../../models/professor';

let link:string = 'http://localhost:8080/professor';
@Injectable({
  providedIn: 'root'
})
export class ProfessorService {
  constructor(private httpClient: HttpClient) { }

  listar(): Observable<Professor[]>{
    return this.httpClient.get<Professor[]>(link+'/listar');
  }

  inserir(professor: Professor): Observable<Professor>{
    return this.httpClient.post<Professor>(link+'/cadastrar', professor);
  }
}
