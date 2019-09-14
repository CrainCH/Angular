import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Brew, BrewAdapter } from './brew';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CountryAdapter, Country, CountryNameAdapter } from './country';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private restBreweries = 'https://api.openbrewerydb.org/breweries';
  private restCountries = 'https://restcountries.eu/rest/v2/all';

  constructor(
    private http: HttpClient,
    private brewAdapter: BrewAdapter,
    private countryAdapter: CountryAdapter,
    private countryNameAdapter: CountryNameAdapter,
  ) { }

  getBrews(): Observable<Brew[]> {
    return this.http.get(this.restBreweries).pipe(
      // Adapt each item in the raw data array
      map((data: any[]) => data.map(item => this.brewAdapter.adapt(item))),
    );
  }

  getCountries(): Observable<Country[]> {
    return this.http.get(this.restCountries).pipe(
      // Adapt each item in the raw data array
      map((data: any[]) => data.map(item => this.countryAdapter.adapt(item))),
    );
  }

  getCountryNames(): Observable<string[]> {
    return this.http.get(this.restCountries).pipe(
      // Adapt each item in the raw data array
      map((data: any[]) => data.map(item => this.countryNameAdapter.adapt(item))),
    );
  }

}
