import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class TecnicaService {

private api = 'http://localhost:3000/atendimentos';
public tecnicos: Observable<any[]>;

constructor(private _http: Http) { }

  getAtendimentos(): Observable<any[]> {
    return this._http.get(this.api)
                     .map((res) => res.json());
  }

  putAtendimento(atendimento): Observable<any> {
    return this._http.put(`${this.api}/${atendimento.id}`, atendimento)
                     .map((res: Response) => res.json());
  }
}

