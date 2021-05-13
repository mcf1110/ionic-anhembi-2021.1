import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtistReleasesResult } from '../models/ArtistReleasesResult';
import { MusicService } from '../services/music.service';

@Component({
  selector: 'app-releases',
  templateUrl: './releases.page.html',
  styleUrls: ['./releases.page.scss'],
})
export class ReleasesPage {

  public result: ArtistReleasesResult = null;

  constructor(
    private route: ActivatedRoute,
    private music: MusicService
  ) {
    const id = this.route.snapshot.paramMap.get('id');
    this.getInfo(id);
  }

  private async getInfo(id: string) {
    this.result = await this.music.getReleases(id);
  }

}
