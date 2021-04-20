import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SongService } from '../services/song.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  public song;

  constructor(route: ActivatedRoute, private songService: SongService) {
    const id = +route.snapshot.paramMap.get('id');
    this.song = this.songService.get(id);
  }

  ngOnInit() {
  }

  onClick() {
    this.songService.update(this.song);
  }

}
