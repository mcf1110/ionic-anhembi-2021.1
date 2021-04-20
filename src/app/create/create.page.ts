import { Component, OnInit } from '@angular/core';
import { SongService } from '../services/song.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage {

  public song = {
    title: '',
    favorite: false
  };

  constructor(private songService: SongService) { }


  onClick() {
    this.songService.add(this.song);
  }

}
