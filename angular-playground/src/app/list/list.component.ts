import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http/http.service';
import { Brewery } from '../http/brewery';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  breweries: Brewery[];
  filteredBreweries: Brewery[];
  private _searchTerm: string;

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.http.getBreweries().subscribe(data => {
      this.breweries = data;
      this.filteredBreweries = data;
    });
  }

  get searchTerm(): string {
    return this._searchTerm;
  }

  set searchTerm(searchTerm: string) {
    this._searchTerm = searchTerm;
    this.filteredBreweries = this.filterBreweries(searchTerm);
  }

  private filterBreweries(searchTerm: string) {
    return this.breweries.filter(brewery => this.filterBrewery(searchTerm, brewery));
  }

  private filterBrewery(searchTerm: string, brewery: Brewery) {
    const allFields = "".concat(
      brewery.name,
      brewery.country,
      brewery.state,
      brewery.postal_code,
      brewery.city,
      brewery.street,
      brewery.phone,
    );
    return allFields.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;
  }

}
