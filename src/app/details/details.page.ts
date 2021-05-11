import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { City } from '../models/City';
import { CityService } from '../services/city.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage {
  public city: City;

  constructor(private cityService: CityService, private route: ActivatedRoute) {
    const id = +this.route.snapshot.paramMap.get('id');
    this.city = this.cityService.find(id);
  }

}
