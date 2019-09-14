import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http/http.service';
import { Brew } from '../http/brew';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  brews: Brew[];
  filteredBrews: Brew[];
  private _searchTerm: string;

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.http.getBrews().subscribe(data => {
      this.brews = data;
      this.filteredBrews = data;
    });
  }

  get searchTerm(): string {
    return this._searchTerm;
  }

  set searchTerm(searchTerm: string) {
    this._searchTerm = searchTerm;
    this.filteredBrews = this.filterBrews(searchTerm);
  }

  filterBrews(searchTerm: string) {
    return this.brews.filter(brews =>
      brews.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
      || brews.country.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
      || brews.state.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
      || brews.street.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
      || brews.phone.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
    );
  }

}
