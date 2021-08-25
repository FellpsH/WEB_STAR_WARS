import { Injectable } from '@angular/core';
import { retry, catchError } from 'rxjs/operators';

import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { People } from '../models/People';
import { Starship } from '../models/Starship';
import { Film } from '../models/film';
import { Vehicle } from '../models/Vehicle';
import { Specie } from '../models/Specie';
import { Planet } from '../models/Planet';
import { Reponse } from '../models/Reponse';

@Injectable({
  providedIn: 'root',
})
export class StarService {
  endpoint: string = 'https://swapi.dev/api/';

  constructor(private httpClient: HttpClient) {}

  getPeoples(): Observable<Reponse<People[]>>  {
    return this.httpClient.get<Reponse<People[]>>(this.endpoint + '/people/');
  }

  getFilms():Observable<Reponse<Film[]>> {
    return this.httpClient.get<Reponse<Film[]>>(this.endpoint + '/films/');
  }

  getStarships():Observable<Reponse<Starship[]>> {
    return this.httpClient.get<Reponse<Starship[]>>(
      this.endpoint + '/starships/'
    );
  }

  getVehicles():Observable<Reponse<Vehicle[]>> {
    return this.httpClient.get<Reponse<Vehicle[]>>(
      this.endpoint + '/vehicles/'
    );
  }

  getSpecies():Observable<Reponse<Specie[]>> {
    return this.httpClient.get<Reponse<Specie[]>>(this.endpoint + '/species/');
  }

  getPlanets():Observable<Reponse<Planet[]>> {
    return this.httpClient.get<Reponse<Planet[]>>(this.endpoint + '/planets/');
  }
}
