import { Component, OnInit, Input } from '@angular/core';
import { Brew } from '../http/brew';

@Component({
  selector: 'app-brew-card',
  templateUrl: './brew-card.component.html',
  styleUrls: ['./brew-card.component.scss']
})
export class BrewCardComponent {

  @Input() brew: Brew = new Brew();

  constructor() { }

}
