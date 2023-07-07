import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { Professor } from '../../models/professor';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {
  link:string = 'http://localhost:8080/professor';
  constructor(private httpClient: HttpClient) { }

  listar(): Observable<Professor[]>{
    return this.httpClient.get<Professor[]>(this.link+'/listar');
  }

  inserir(professor: Professor): Observable<Professor>{
    console.log(professor);
    return this.httpClient.post<Professor>(this.link+'/cadastrar', professor);
  }
}
