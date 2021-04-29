import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Song, SongService } from '../services/song.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  public song: Song;

  constructor(
    route: ActivatedRoute,
    private songService: SongService,
    private navCtrl: NavController
  ) {
    const id = +route.snapshot.paramMap.get('id');
    this.song = songService.getSongById(id);
  }

  ngOnInit() {
  }

  public save() {
    this.songService.updateSong(this.song);
    this.navCtrl.back();
  }

}
