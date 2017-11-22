import { errorObject } from 'rxjs/util/errorObject';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { DragulaService } from 'ng2-dragula/components/dragula.provider';

import { TecnicaService } from './tecnica.service';
import { TECNICOS } from './tecnicos.mock';

@Component({
  selector: 'app-tecnica',
  templateUrl: './tecnica.component.html',
  styleUrls: ['./tecnica.component.css']
})
export class TecnicaComponent implements OnInit {

  public atendimentos$: Observable<any[]>;
  public tecnicos = TECNICOS;

  constructor(private tecnicaService: TecnicaService) { }

  ngOnInit() {
    this.atendimentos$ = this.tecnicaService.getAtendimentos();
  }

  transferDataSuccess($event: any) {
console.log($event);
    const tecnicoAssociado = $event.mouseEvent.target.innerHTML;
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
                       .subscribe(res => console.log(res));
  }

}


