import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { City } from '../models/City';
import { ConsolidatedWeather } from '../models/MetaWeatherForecast';
import { CityService } from '../services/city.service';
import { MetaWeatherService } from '../services/meta-weather.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage {
  public city: City;
  public weather: ConsolidatedWeather[];

  constructor(
    private cityService: CityService,
    private route: ActivatedRoute,
    private metaWeather: MetaWeatherService) {
    const id = +this.route.snapshot.paramMap.get('id');
    this.city = this.cityService.find(id);
    this.loadWeather(id);
  }

  private async loadWeather(id: number) {
    this.weather = await this.metaWeather.getForecast(id);
  }

}
