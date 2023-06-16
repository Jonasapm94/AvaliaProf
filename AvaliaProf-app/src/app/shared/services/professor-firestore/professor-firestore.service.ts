import { Injectable } from '@angular/core';
import { Professor } from '../../models/professor';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable, from, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfessorFirestoreService {

  colecaoProfessores: AngularFirestoreCollection<Professor>;
  NOME_COLECAO = 'professores';

  constructor(private afs: AngularFirestore) {
    this.colecaoProfessores = afs.collection(this.NOME_COLECAO);
  }

  listar(): Observable<Professor[]> {
    return this.colecaoProfessores.valueChanges({idField: 'id'});
  }

  inserir(professor: Professor): Observable<object> {
    delete professor.id;

    return from(this.colecaoProfessores.add(Object.assign({}, professor)));
  }

  apagar(id:string): Observable<void> {
    return from(this.colecaoProfessores.doc(id).delete());
  }

  pesquisarPorId(id: string): Observable<Professor> {
    return this.colecaoProfessores.doc(id).get().pipe(map(document => {
      const data = document.data()
      return new Professor(document.id, data!.nome, data!.matricula, data!.email, data!.senha, data!.disciplinas, data!.formacoes);
    }));
  }

  atualizar(professor: Professor): Observable<void> {
    const id = professor.id;
    delete professor.id;
    return from(this.colecaoProfessores.doc(id).update(Object.assign({}, professor)))
  }
}
