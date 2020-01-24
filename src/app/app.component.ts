import { Component, OnInit } from '@angular/core';
import { WeatherService} from './weather.service'
import { environment } from '../environments/environment'
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'Säätutka';
  weatherCurrent: any[] = new Array();
  moment: any = moment;
  citySelected: number = null;

  constructor(private weatherService: WeatherService) {}

  cityChanged(value: number) {
    if(value) {
      this.citySelected = value;
    } else {
      this.citySelected = null;
    }
  }

  ngOnInit() {
    this.weatherService.getCurrent(environment.cities_to_include).subscribe(
      data => {
        if(data.error == undefined) {
          this.weatherCurrent = data.list;
        }
      },
      err => console.error(err)
    );
  }
      
}
