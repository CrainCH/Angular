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
    return this.breweries.filter(breweries =>
      breweries.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
      || breweries.country.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
      || breweries.state.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
      || breweries.street.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
      || breweries.phone.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
    );
  }

}
