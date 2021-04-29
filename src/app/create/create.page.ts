import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Song, SongService } from '../services/song.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  public newSong: Song = {
    artist: '',
    id: 0,
    isFavorite: false,
    title: ''
  };

  constructor(private songService: SongService, private navCtrl: NavController) { }

  ngOnInit() {
  }

  public save() {
    this.songService.addSong(this.newSong);
    this.navCtrl.back();
  }
}
