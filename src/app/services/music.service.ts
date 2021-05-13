import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ArtistReleasesResult } from '../models/ArtistReleasesResult';
import { ArtistSearchResult } from '../models/ArtistSearchResult';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  constructor(private http: HttpClient) { }

  public searchForArtist(searchTerm: string) {
    const url = `//musicbrainz.org/ws/2/artist/?query=${searchTerm}&fmt=json`
    return this.http.get<ArtistSearchResult>(url).toPromise();
  }

  public getReleases(id: string) {
    const url = `//musicbrainz.org/ws/2/artist/${id}?inc=release-groups&fmt=json`
    return this.http.get<ArtistReleasesResult>(url).toPromise();
  }
}
