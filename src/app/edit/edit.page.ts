import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { SongService } from '../services/song.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  public song;

  constructor(
    private songService: SongService,
    route: ActivatedRoute,
    private navCtrl: NavController
  ) {
    const id = +route.snapshot.paramMap.get('id');
    this.song = this.songService.findSong(id);
  }

  ngOnInit() {
  }

  public update() {
    this.songService.update(this.song);
    this.navCtrl.back();
  }

}
