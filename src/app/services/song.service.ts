import { Injectable } from '@angular/core';

export interface Song {
  id: number;
  artist: string;
  title: string;
  isFavorite: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class SongService {

  public songs: Song[] = [
    { id: 1, artist: 'Rick Astley', title: 'Never Gonna Give You Up', isFavorite: true },
    { id: 2, artist: 'Post Malone', title: 'Sunflower', isFavorite: false },
    { id: 3, artist: 'StayC', title: 'ASAP', isFavorite: true },
    { id: 4, artist: 'Charles Bradley', title: 'The World (Is Going Up In Flames)', isFavorite: false },
    { id: 5, artist: 'Roddy Ricch', title: 'Every Season', isFavorite: false },
    { id: 6, artist: 'Gamma Ray', title: 'Rebellion in Dreamland', isFavorite: false },
    { id: 7, artist: 'Metallica', title: 'One', isFavorite: true },
    { id: 8, artist: 'Britney Spears ', title: 'Oops! ... Did It Again', isFavorite: false },
    { id: 9, artist: 'Ke$ha', title: 'Timber', isFavorite: false },
    { id: 10, artist: 'Sabotage', title: 'Um bom lugar', isFavorite: true },
  ];

  public getSongById(id: number) {
    return { ...this.songs.find(s => s.id === id) };
  }

  public updateSong(updatedSong: Song) {
    const index = this.songs.findIndex(s => s.id === updatedSong.id);
    this.songs[index] = updatedSong;
  }

  public addSong(newSong: Song) {
    newSong.id = 1 + Math.max(0, ...this.songs.map(s => s.id));
    this.songs.push(newSong);
  }

  constructor() { }
}
