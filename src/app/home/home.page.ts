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
  public loading = false;

  constructor(private music: MusicService) { }

  public async performSearch() {
    this.loading = true;
    try {
      this.result = await this.music.searchArtists(this.currentSearch);
    } catch (e) {
      this.result = {
        artists: [],
        count: 0,
        created: null,
        offset: 0
      };
    }
    this.loading = false;
  }

}
