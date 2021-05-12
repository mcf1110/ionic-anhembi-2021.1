import { Component } from '@angular/core';
import { ArtistSearchResult } from '../models/ArtistSearchResults';
import { MusicService } from '../services/music.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public currentSearch = '';
  public result: ArtistSearchResult = null;

  constructor(private music: MusicService) { }

  public async performSearch() {
    this.result = await this.music.searchArtists(this.currentSearch);
  }

}
