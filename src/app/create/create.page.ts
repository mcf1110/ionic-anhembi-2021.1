import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { City } from '../models/City';
import { CityService } from '../services/city.service';
import { MetaWeatherService } from '../services/meta-weather.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage {

  public query = '';
  public searchResults: City[];

  constructor(
    private cityService: CityService,
    private metaWeather: MetaWeatherService,
    private navController: NavController
  ) { }

  public addCity(city: City) {
    this.cityService.add(city);
    this.navController.back();
  }

  public async search() {
    this.searchResults = await this.metaWeather.search(this.query);
  }

}
