import { Component, OnInit } from '@angular/core';
import { Brewery } from '../http/brewery';
import { HttpService } from '../http/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  brewery: Brewery = new Brewery();
  countries: string[];

  selectedTags = [1, 4];
  tags = [
    { id: 1, name: 'Beer' },
    { id: 2, name: 'Brandy' },
    { id: 3, name: 'Champagne' },
    { id: 4, name: 'Whisky' },
    { id: 5, name: 'Wine' },
  ];

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.http.getBreweries().subscribe(data => {
      this.brewery = data[0];
    });
    this.http.getCountryNames().subscribe(data => {
      this.countries = data;
    });
  }

}
