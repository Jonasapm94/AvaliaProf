import { Injectable } from '@angular/core';
import { AngularFirestoreCollection } from '@angular/fire/compat/firestore/collection/collection';
import { Usuario } from '../models/usuario';
import { AngularFirestore } from '@angular/fire/compat/firestore/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioFirestoreService {

  colecaoUsuarios: AngularFirestoreCollection<Usuario>;
  NOME_COLECAO = 'usuarios';

  constructor(private afs: AngularFirestore) {
    this.colecaoUsuarios = afs.collection(this.NOME_COLECAO);
  }

  listar(): Observable<Usuario[]> {
    return this.colecaoUsuarios.valueChanges({idField: 'id'});
  }
}
