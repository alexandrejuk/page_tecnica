import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class AssociarService {

private api = 'http://localhost:3000/atendimentos';

  constructor(private http: Http) { }

  getAtendimentos() {
    return this.http
       .get(this.api)
       .map(atendimentos => atendimentos.json());
   }
}
