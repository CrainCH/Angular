import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Brewery, BreweryAdapter } from './brewery';
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
    private breweryAdapter: BreweryAdapter,
    private countryAdapter: CountryAdapter,
    private countryNameAdapter: CountryNameAdapter,
  ) { }

  getBreweries(): Observable<Brewery[]> {
    return this.http.get(this.restBreweries).pipe(
      // Adapt each item in the raw data array
      map((data: any[]) => data.map(item => this.breweryAdapter.adapt(item))),
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
