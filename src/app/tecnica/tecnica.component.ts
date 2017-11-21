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
  constructor(private tecnicaService: TecnicaService,
              private dragulaService: DragulaService) {

                dragulaService.drag.subscribe((value) => {
                  this.onDrag(value.slice(1));
                });
              }

  ngOnInit() {
    this.atendimentos$ = this.tecnicaService.getAtendimentos();
  }


  private onDrag(args) {
    const [e, el] = args;
    console.log(e, el);
    console.log(args);
  }
}
