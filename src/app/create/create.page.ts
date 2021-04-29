import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { SongService } from '../services/song.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  public song = {
    id: 0,
    title: '',
    artist: '',
    favorite: false
  };

  constructor(
    private songService: SongService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  public create() {
    this.songService.create(this.song);
    this.navCtrl.back();
  }

}
