import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private API_KEY: string;

  constructor(private http: HttpClient) {
    this.API_KEY = "API_KEY_HERE"
  }

  getCurrent(city_ids) : Observable<any> {
    return this.http.get(
        "http://api.openweathermap.org/data/2.5/group" + 
        "?id="+city_ids + 
        "&units=metric" + 
        "&appid="+this.API_KEY)
      .pipe(map(res => res));
  }

  getForecast(city_id:number) : Observable<any> {
    return this.http.get(
        "http://api.openweathermap.org/data/2.5/forecast" + 
        "?id="+city_id + 
        "&units=metric" + 
        "&cnt=5"+
        "&appid="+this.API_KEY)
      .pipe(map(res => res));
  
  }
}



