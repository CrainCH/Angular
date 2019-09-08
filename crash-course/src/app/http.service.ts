import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Brew, BrewAdapter } from './list/Brew';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient,
    private adapter: BrewAdapter,
  ) { }

  getBeer(): Observable<Brew[]> {
    const url = 'https://api.openbrewerydb.org/breweries';
    return this.http.get(url).pipe(
      // Adapt each item in the raw data array
      map((data: any[]) => data.map(item => this.adapter.adapt(item))),
    );
  }

}
