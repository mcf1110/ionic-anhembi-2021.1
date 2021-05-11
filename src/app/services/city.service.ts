import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { City } from '../models/City';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  public cities: City[] = [];

  constructor(private storage: Storage) {
    this.loadCities();
  }

  public add(city: City) {
    this.cities.push(city);
    this.saveCities();
  }

  public remove(id: number) {
    const index = this.cities.findIndex(c => c.id === id);
    this.cities.splice(index, 1);
    this.saveCities();
  }

  public find(id: number): City {
    return { ...this.cities.find(c => c.id === id) };
  }

  private async loadCities() {
    const result = await this.storage.get('cities') as City[];
    if (result) {
      this.cities.push(...result);
    }
  }

  private async saveCities() {
    await this.storage.set('cities', this.cities);
  }
}
