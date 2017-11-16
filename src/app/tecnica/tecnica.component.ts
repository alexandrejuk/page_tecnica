import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
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

}
