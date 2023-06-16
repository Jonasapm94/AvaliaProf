import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Aluno } from '../../models/aluno';
import { Observable, from, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlunoFirestoreService {

  colecaoAlunoes: AngularFirestoreCollection<Aluno>;
  NOME_COLECAO = 'alunos';

  constructor(private afs: AngularFirestore) {
    this.colecaoAlunoes = afs.collection(this.NOME_COLECAO);
  }

  listar(): Observable<Aluno[]> {
    return this.colecaoAlunoes.valueChanges({idField: 'id'});
  }

  inserir(aluno: Aluno): Observable<object> {
    delete aluno.id;

    return from(this.colecaoAlunoes.add(Object.assign({}, aluno)));
  }

  apagar(id:string): Observable<void> {
    return from(this.colecaoAlunoes.doc(id).delete());
  }

  pesquisarPorId(id: string): Observable<Aluno> {
    return this.colecaoAlunoes.doc(id).get().pipe(map(document => {
      const data = document.data()
      return new Aluno(document.id, data!.nome, data!.matricula, data!.email, data!.senha, data!.curso);
    }));
  }

  atualizar(aluno: Aluno): Observable<void> {
    const id = aluno.id;
    delete aluno.id;
    return from(this.colecaoAlunoes.doc(id).update(Object.assign({}, aluno)))
  }
}
