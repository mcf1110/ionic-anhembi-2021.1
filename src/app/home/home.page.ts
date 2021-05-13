import { Component } from '@angular/core';
import { ArtistSearchResult } from '../models/ArtistSearchResult';
import { MusicService } from '../services/music.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public searchTerm = '';
  public result: ArtistSearchResult = null;

  constructor(private music: MusicService) { }

  public async performSearch() {
    this.result = await this.music.searchForArtist(this.searchTerm);
  }

}
