import { Component, OnInit } from '@angular/core';
import { CityService } from '../services/city.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  constructor(private cityService: CityService) { }

  ngOnInit() {
  }

  public addCity() {
    this.cityService.add({
      id: 1,
      name: 'São Paulo',
      latitude: 15,
      longitude: 42
    })
  }

}
