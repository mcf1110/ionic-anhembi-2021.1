import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  private songs = [
    {
      id: 1,
      title: 'Maroon 5',
      favorite: true
    },
    {
      id: 2,
      title: 'Dua Lipa',
      favorite: false
    }
  ];

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

  constructor() { }
}
