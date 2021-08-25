import { Injectable } from '@angular/core';
import { retry, catchError } from 'rxjs/operators';

import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pessoa } from '../models/People';

@Injectable({
  providedIn: 'root'
})
export class StarService {
  endpoint: string = "https://swapi.dev/api/";

  constructor(private httpClient: HttpClient) { }
  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getPeople(id : Number): Observable<Pessoa> {
    return this.httpClient.get<Pessoa>(this.endpoint + '/people/' + id, this.httpHeader).pipe(
      retry(1),
    );
  }
}
