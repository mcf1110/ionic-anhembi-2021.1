import { Component } from '@angular/core';
import { SongService } from '../services/song.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public songs = this.songService.all();

  constructor(private songService: SongService) { }

}
