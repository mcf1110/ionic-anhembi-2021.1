import { Component } from '@angular/core';
import { Artist } from '../models/ArtistSearchResult';
import { ArtistService } from '../services/artist.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public query = ''
  public artists: Artist[] = []

  constructor(private artistService: ArtistService) { }

  public async performSearch() {
    this.artists = await this.artistService.searchByName(this.query);
  }

}
