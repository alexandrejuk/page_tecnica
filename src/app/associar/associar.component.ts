import { Component, OnInit } from '@angular/core';
import { AssociarService } from './associar.service';
import { Observable } from 'rxjs/Rx';
import { TECNICOS } from './tecnicos.mock';

@Component({
  selector: 'app-associar',
  templateUrl: './associar.component.html',
  styleUrls: ['./associar.component.css']
})
export class AssociarComponent implements OnInit {

  public atendimentos$: Observable<any[]>;
  public atendimentosSeparadosEAgrupado = [];
  public tecnicos = TECNICOS;

  private atendimentosSelecionadoParaAgrupar = [];
  private grupoAtendimentosParaOTecnico = [];
  private tecnicoSelecionado;

  constructor(private associarService: AssociarService) { }

  ngOnInit() {
  this.atendimentos$ = this.associarService.getAtendimentos();
  }

  agruparAtendimentosPorRegiaoEServico(atendimentoSelecionado) {
  const isIgual = this.atendimentosSelecionadoParaAgrupar.find(atendimento => atendimento === atendimentoSelecionado);
    if (!isIgual) {
      this.atendimentosSelecionadoParaAgrupar.push(atendimentoSelecionado);
     } else {
      this.atendimentosSelecionadoParaAgrupar.splice(this.atendimentosSelecionadoParaAgrupar.indexOf(atendimentoSelecionado), 1);
     }
  }

  AtendimentosAgrupados() {
    this.atendimentosSeparadosEAgrupado.push({ grupo: this.atendimentosSelecionadoParaAgrupar });
    this.atendimentosSelecionadoParaAgrupar = [];
  }

  associartecnico(grupo) {
   this.grupoAtendimentosParaOTecnico = grupo;
  }

  selecionaTecnico(tecnico) {
    this.tecnicoSelecionado = tecnico;
  }

  salvarAssociacaoAoTecnico() {
    this.atendimentosSeparadosEAgrupado.map(atendimentosSeparados => {
      if (atendimentosSeparados.grupo === this.grupoAtendimentosParaOTecnico) {
        atendimentosSeparados.grupo.map(atendimento => {
          atendimento.tecnico = { nome : this.tecnicoSelecionado };
        });
        this.tecnicoSelecionado = '';
      }
      return atendimentosSeparados;
    });
  }

  removerAtendimento(atendimento) {
  this.atendimentosSeparadosEAgrupado.map(atendimentosSeparados => {
      atendimentosSeparados.grupo.splice(atendimentosSeparados.grupo.indexOf(atendimento), 1);
        return atendimentosSeparados;
    });

  }
}

