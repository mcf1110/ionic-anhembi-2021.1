import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ArtistInfoResults } from '../models/ArtistInfoResults';
import { ArtistSearchResult } from '../models/ArtistSearchResults';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  constructor(private http: HttpClient) { }

  public searchArtists(query: string) {
    const url = `http://musicbrainz.org/ws/2/artist/?query=${query}&fmt=json`
    return this.http.get<ArtistSearchResult>(url).toPromise();
  }

  public getReleases(id: string) {
    const url = `http://musicbrainz.org/ws/2/artist/${id}?inc=release-groups&fmt=json`
    return this.http.get<ArtistInfoResults>(url).toPromise();
  }
}
