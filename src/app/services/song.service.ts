import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  constructor(private storage: Storage) {
    this.loadFromStorage();
  }
  private songs = [];

  private async loadFromStorage() {
    const storedSongs = await this.storage.get('songs');
    if (storedSongs) {
      this.songs.push(...storedSongs);
    }
  }

  public all() {
    return this.songs;
  }

  public get(id: number) {
    return { ...this.songs.find(s => s.id === id) };
  }

  public update(song) {
    const index = this.songs.findIndex(s => s.id === song.id);
    this.songs[index] = song;
    this.storage.set('songs', this.songs);
  }

  public add(song) {
    const maxId = Math.max(0, ...this.songs.map(s => s.id));
    this.songs.push({ ...song, id: maxId + 1 });
    this.storage.set('songs', this.songs);
  }

}
