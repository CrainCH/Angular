import { Component, OnInit, Input } from '@angular/core';
import { Brewery } from '../http/brewery';

@Component({
  selector: 'app-brewery-card',
  templateUrl: './brewery-card.component.html',
  styleUrls: ['./brewery-card.component.scss']
})
export class BreweryCardComponent {

  @Input()
  brewery: Brewery = new Brewery();

  public openLink() {
    window.open(this.brewery.website_url, "_blank");
  }

}
