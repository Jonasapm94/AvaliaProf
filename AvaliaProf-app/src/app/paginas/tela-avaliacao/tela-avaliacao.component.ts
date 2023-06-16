import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Avaliacao } from 'src/app/shared/models/avaliacao';
import { AvaliacaoService } from 'src/app/shared/services/avaliacao/avaliacao.service';

@Component({
  selector: 'app-tela-avaliacao',
  templateUrl: './tela-avaliacao.component.html',
  styleUrls: ['./tela-avaliacao.component.css']
})

export class TelaAvaliacaoComponent {
  avaliacao: Avaliacao;
  constructor(private avaliavaoService: AvaliacaoService, private roteador: Router) {
    this.avaliacao = new Avaliacao(0,'','','');
  }

  publicar() {
    this.avaliavaoService.inserir(this.avaliacao).subscribe(
      (avaliacaoRetornada) => {
        console.log(avaliacaoRetornada);
        this.avaliacao = new Avaliacao(0,'','','');
        this.roteador.navigate(['/'])
      }
    )
  }
}
