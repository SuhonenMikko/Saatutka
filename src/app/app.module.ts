import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherService } from './weather.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ForecastComponent } from './forecast/forecast.component';
import { LocationWeatherComponent } from './location-weather/location-weather.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    ForecastComponent,
    LocationWeatherComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [WeatherService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
