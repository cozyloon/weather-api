import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  url = 'https://api.openweathermap.org/data/2.5/weather';
  apiKey = '7301e93404ceaa6dfb844e7cbdc7587d';

  constructor(private http: HttpClient) {
  }

  // @ts-ignore
  getWeatherDataByCoords(lat, lon) {
    let params = new HttpParams()
      .set('lat', lat)

      .set('lon', lon)

      .set('units', 'imperial')

      .set('appid', this.apiKey)

    return this.http.get(this.url, {params});
  }

  getWeatherDataByCityName(city: string) {
    let params = new HttpParams()
      .set('q', city)

      .set('units', 'imperial')

      .set('appid', this.apiKey)

    return this.http.get(this.url, {params})
  }
}
