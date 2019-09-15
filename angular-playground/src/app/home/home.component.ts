import { Component, OnInit } from '@angular/core';
import { Brew } from '../http/brew';
import { HttpService } from '../http/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  brew: Brew = new Brew();
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
    this.http.getBrews().subscribe(data => {
      this.brew = data[0];
    });
    this.http.getCountryNames().subscribe(data => {
      this.countries = data;
    });
  }

}
