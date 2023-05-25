import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Aluno } from 'src/app/shared/models/aluno';
import { AlunoService } from 'src/app/shared/services/aluno/aluno.service';

@Component({
  selector: 'app-manutenir-aluno',
  templateUrl: './manutenir-aluno.component.html',
  styleUrls: ['./manutenir-aluno.component.css']
})
export class ManutenirAlunoComponent {
  aluno:Aluno;
  constructor(private roteador:Router, private alunoService:AlunoService){
    this.aluno = new Aluno(0,'','','','','');
  }
  manutenir(){
    this.alunoService.inserir(this.aluno).subscribe(
      (alunoRetornado)=>{
        console.log(alunoRetornado);
        this.aluno = new Aluno(0,'','','','','');
        this.roteador.navigate(['listaralunos'])
      }
    )
  }
}
