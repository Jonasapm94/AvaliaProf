import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Usuario} from "../models/usuario";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private httpClient: HttpClient) { }

  listar(): Observable<Usuario[]>{
    return this.httpClient.get<Usuario[]>('http://localhost:3000/usuarios');
  }

  inserir(usuario: Usuario): Observable<Usuario>{
    return this.httpClient.post<Usuario>('http://localhost:3000', usuario);
  }

  getUsuarioById(usuario: Usuario): Observable<Usuario>{
    return this.httpClient.get<Usuario>(`http://localhost:3000${usuario.id}`);
  }
  
}
