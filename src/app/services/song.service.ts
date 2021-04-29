import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular'

interface Song {
  id: number;
  title: string;
  artist: string;
  favorite: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class SongService {

  public songs: Song[] = [];

  public findSong(id: number) {
    return { ...this.songs.find(s => s.id === id) };
  }

  public update(song: Song) {
    // const originalSong = this.songs.find(s => s.id === song.id);
    // originalSong.favorite = song.favorite;
    // originalSong.title = song.title;
    // originalSong.artist = song.artist;
    const index = this.songs.findIndex(s => s.id === song.id);
    this.songs[index] = song;
    this.storage.set('songs', this.songs);
  }

  public create(song: Song) {
    song.id = 1 + Math.max(0, ...this.songs.map(s => s.id));
    this.songs.push(song);
    this.storage.set('songs', this.songs);
  }

  private async loadSongs() {
    const loadedSongs = await this.storage.get('songs') as Song[];
    if (loadedSongs) {
      this.songs.push(...loadedSongs);
    }
  }

  constructor(private storage: Storage) {
    this.loadSongs();
  }
}
