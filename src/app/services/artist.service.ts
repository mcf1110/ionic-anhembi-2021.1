import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ArtistSearchResult, ReleaseListResult } from '../models/ArtistSearchResult';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  constructor(private http: HttpClient) { }

  public async searchByName(name: string) {
    const url = 'http://musicbrainz.org/ws/2/artist/?query=' + name + '&fmt=json'
    const result = await this.http.get<ArtistSearchResult>(url).toPromise();
    return result.artists;
  }

  public async listReleases(id: string) {
    const url = `http://musicbrainz.org/ws/2/artist/${id}?inc=release-groups&fmt=json`
    const result = await this.http.get<ReleaseListResult>(url).toPromise();
    return result;
  }
}
