import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtistInfoResults } from '../models/ArtistInfoResults';
import { MusicService } from '../services/music.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage {
  public artistInfo: ArtistInfoResults = null;

  constructor(private music: MusicService, private route: ActivatedRoute) {
    const id = this.route.snapshot.paramMap.get('id');
    this.loadData(id);
  }

  private async loadData(id: string) {
    this.artistInfo = await this.music.getReleases(id);
  }

}
