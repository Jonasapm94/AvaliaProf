import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})
export class MensagensService {

  constructor(private snackbar : MatSnackBar) {
  }

  sucesso(mensagem: string){
    this.snackbar.open(mensagem, 'X', {
      duration: 3000,
      panelClass: ['snackbar-success','success']
    })
  }

  erro(mensagem: string){
    this.snackbar.open(mensagem, 'X', {
      duration: 3000,
      panelClass: ['snackbar-error','error']
    })
  }
  
  alerta(mensagem: string){
    this.snackbar.open(mensagem, 'X', {
      duration: 3000,
      politeness: 'assertive',
      panelClass: ['snackbar-alert','info'],
    })
  }
}
