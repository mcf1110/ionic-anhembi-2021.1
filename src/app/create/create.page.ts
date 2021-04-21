import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
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

  constructor(private songService: SongService, private navCtrl: NavController) { }


  onClick() {
    this.songService.add(this.song);
    this.navCtrl.back();
  }

}
