import { Component, OnInit } from '@angular/core';
import { TecnicaService } from './tecnica.service';

@Component({
  selector: 'app-tecnica',
  templateUrl: './tecnica.component.html',
  styleUrls: ['./tecnica.component.css']
})
export class TecnicaComponent implements OnInit {

  public atendimentos;
  public tecnicos;

  constructor(private tecnicaService: TecnicaService) { }

  ngOnInit() {
   this.tecnicaService.getAtendimentos()
   .subscribe(atendimentos => 
    this.atendimentos = atendimentos
    .filter(atendimento => atendimento.tecnico.nome === ''));
   
   this.tecnicaService.getAtendimentosAssociado();

   this.tecnicos = this.tecnicaService.tecnicos;
  }

  associarTecnico($event: any, tecnico) {
      const tecnicoAssociado = tecnico.name;
    const atendimento = $event.dragData;

    atendimento.tecnico = { nome: tecnicoAssociado };


    this.tecnicos.filter(tecnico => {
      const buscar = tecnico.name === tecnicoAssociado;
      if  (buscar) {
        tecnico.atd.push(atendimento);
      }
     return (tecnico);
    });

    this.tecnicaService.putAtendimento(atendimento)
                       .subscribe(res => res);
  }

}


