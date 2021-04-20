import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  private songs = [];

  public all() {
    return this.songs;
  }

  public get(id: number) {
    return { ...this.songs.find(s => s.id === id) };
  }

  public update(song) {
    const index = this.songs.findIndex(s => s.id === song.id);
    this.songs[index] = song;
  }

  public add(song) {
    const maxId = Math.max(0, ...this.songs.map(s => s.id))
    this.songs.push({ ...song, id: maxId + 1 });
  }

  constructor() { }
}
