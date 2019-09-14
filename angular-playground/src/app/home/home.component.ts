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

  states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'Nebraska'];

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
