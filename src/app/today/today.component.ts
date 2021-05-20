import {Component, OnInit} from '@angular/core';
import {WeatherService} from "../service/weather.service";

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent implements OnInit {
  lat: any
  lon: any;
  weather: any;

  constructor(private weatherService: WeatherService) {
  }

  ngOnInit(): void {
    this.getLocation();
  }

  getLocation() {
    if ("geolocation" in navigator) {
      navigator.geolocation.watchPosition((success) => {

        this.lat = success.coords.latitude;

        this.lon = success.coords.longitude;

        this.weatherService.getWeatherDataByCoords(this.lat, this.lon).subscribe(value => {

          this.weather = value;

        });
      })
    }
  }

  getCity(city: string) {
    this.weatherService.getWeatherDataByCityName(city).subscribe(value => {

      this.weather = value;

    })
  }
}
