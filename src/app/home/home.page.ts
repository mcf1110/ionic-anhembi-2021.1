import { Component } from '@angular/core';
import { Song, SongService } from '../services/song.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public songs: Song[] = this.songService.songs;

  constructor(private songService: SongService) { }

}
