import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { TECNICOS } from './tecnicos.mock';


@Injectable()
export class TecnicaService {

private api = 'http://localhost:3000/atendimentos';
public tecnicos = TECNICOS;

constructor(private _http: Http) { }


getAtendimentos(): Observable<any[]> {
    return this._http.get(this.api).map((res) => res.json());
}

  getAtendimentosAssociado() {
    this.tecnicos.map(tecnico => {
    this._http.get(this.api).map((res) => res.json())
      .subscribe((atendimentos) => {
        tecnico.atd = atendimentos
        .filter(atendimento => atendimento.tecnico.nome === tecnico.name);
      });
        return tecnico;
    });

  }

  putAtendimento(atendimento): Observable<any> {
    return this._http.put(`${this.api}/${atendimento.id}`, atendimento)
                     .map((res: Response) => res.json());
     }
  }

