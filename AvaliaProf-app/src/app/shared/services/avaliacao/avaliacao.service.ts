import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Avaliacao } from '../../models/avaliacao';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AvaliacaoService {

  constructor(private httpClient: HttpClient) { }

  inserir(avaliacao: Avaliacao): Observable<Avaliacao>{
    return this.httpClient.post<Avaliacao>(`http://localhost:3000/avaliacoes`,avaliacao);
  }

  listar(): Observable<Avaliacao[]>{
    return this.httpClient.get<Avaliacao[]>(`http://localhost:3000/avaliacoes`);
  }
}