import { Component, OnInit, Input } from '@angular/core';
import { WeatherService } from '../weather.service'
import * as moment from 'moment';

@Component({
  selector: 'forecast-weather',
  templateUrl: './forecast.component.html',
})
export class ForecastComponent implements OnInit {
  weatherForecast: any[] = new Array();
  moment: any = moment;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    if(this.id != undefined) {
      this.weatherService.getForecast(this.id).subscribe(
        data => {
          if(data.error == undefined) {
            this.weatherForecast = data.list;
          }
        },
        err => console.error(err)
      );
    }
  }

  @Input() id: number;
}
