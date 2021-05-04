import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReleaseListResult } from '../models/ArtistSearchResult';
import { ArtistService } from '../services/artist.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.page.html',
  styleUrls: ['./results.page.scss'],
})
export class ResultsPage implements OnInit {

  public info: ReleaseListResult;

  constructor(private route: ActivatedRoute, private artistService: ArtistService) {
    this.getInfo();
  }

  private async getInfo() {
    const id = this.route.snapshot.paramMap.get('id')
    this.info = await this.artistService.listReleases(id)
  }

  ngOnInit() {
  }

}
