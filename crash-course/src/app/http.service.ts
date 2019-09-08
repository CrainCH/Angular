import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Brew } from './list/Brew';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getBeer(): Observable<Brew[]> {
    const url = 'https://api.openbrewerydb.org/breweries';
    return this.http.get(url).pipe(
      map((data: any[]) => data.map((item: any) => new Brew(
        item.id,
        item.name,
        item.brewery_type,
        item.street,
        item.city,
        item.state,
        item.postal_code,
        item.country,
        item.longitude,
        item.latitude,
        item.phone,
        item.website_url,
      ))),
    );
  }
}
