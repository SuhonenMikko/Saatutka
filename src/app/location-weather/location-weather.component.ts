import { Component, Input } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'location-weather',
  templateUrl: './location-weather.component.html',
})
export class LocationWeatherComponent {
  moment: any = moment;

  constructor() { }

  @Input() data: any;
}
