import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class TecnicaService {

private api = 'http://localhost:3000/atendimentos';

  constructor(private _http: Http) {}

  getAtendimentos(): Observable<any[]> {
    return this._http.get(this.api).map(res => res.json());
  }
}

