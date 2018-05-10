import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable()
export class WebAPI {
  LOCAL_CONFIG = {
    API_HOST: 'https://pokeapi.co/api'
  };

  constructor(private http: HttpClient) { }

  getPokemon(search) {
    return this.http.get(this.LOCAL_CONFIG.API_HOST + `/v2/pokemon/${search.toLowerCase()}/`)
    .pipe(
      map(res => res),
      catchError(this.handleError)
    );
  }

  getPokemonsList({limit, offset}) {
    const params = new HttpParams()
      .set('limit', limit || 12)
      .set('offset', offset || 0);
    return this.http.get(this.LOCAL_CONFIG.API_HOST + `/v1/pokemon/`, { params })
    .pipe(
      map(res => res),
      catchError(this.handleError)
    );
  }

  handleError({error}, caught) {
    return throwError(error);
  }
}
