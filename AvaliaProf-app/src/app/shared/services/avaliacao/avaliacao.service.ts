import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Avaliacao } from '../../models/avaliacao';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AvaliacaoService {

  base_url = `http://localhost:8080/avaliacao`

  constructor(private httpClient: HttpClient) { }

  inserir(avaliacao: Avaliacao): Observable<Avaliacao>{
    return this.httpClient.post<Avaliacao>(`${this.base_url}`,avaliacao);
  }

  listar(): Observable<Avaliacao[]>{
    return this.httpClient.get<Avaliacao[]>(`${this.base_url}`);
  }
}
