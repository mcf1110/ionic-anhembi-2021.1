import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { City } from '../models/City';
import { MetaWeatherCity } from '../models/MetaWeatherCity';
import { ConsolidatedWeather, MetaWeatherForecast } from '../models/MetaWeatherForecast';

@Injectable({
  providedIn: 'root'
})
export class MetaWeatherService {

  constructor(private http: HttpClient) { }

  private removeCors(url: string) {
    return 'https://cors-anywhere.herokuapp.com/' + url;
  }

  public async search(query: string): Promise<City[]> {
    const url = this.removeCors(
      'https://www.metaweather.com/api/location/search/?query=' + query
    );
    const results = await this.http.get<MetaWeatherCity[]>(url).toPromise();
    return results.map(mwc => {
      const latlong = mwc.latt_long.split(',');
      return {
        id: mwc.woeid,
        name: mwc.title,
        latitude: +latlong[0],
        longitude: +latlong[1],
      };
    });
  }

  public async getForecast(id: number): Promise<ConsolidatedWeather[]> {
    const url = this.removeCors(
      'https://www.metaweather.com/api/location/' + id
    );
    const results = await this.http.get<MetaWeatherForecast>(url).toPromise();
    return results.consolidated_weather;

  }
}
