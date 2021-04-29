import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular'

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

  public songs: Song[] = [];

  private saveToStorage() {
    this.storage.set('songs', this.songs);
  }

  private async loadFromStorage() {
    const loadedSongs = await this.storage.get('songs');
    if (loadedSongs) {
      this.songs.push(...loadedSongs);
    }
  }

  public getSongById(id: number) {
    return { ...this.songs.find(s => s.id === id) };
  }

  public updateSong(updatedSong: Song) {
    const index = this.songs.findIndex(s => s.id === updatedSong.id);
    this.songs[index] = updatedSong;
    this.saveToStorage();
  }

  public addSong(newSong: Song) {
    newSong.id = 1 + Math.max(0, ...this.songs.map(s => s.id));
    this.songs.push(newSong);
    this.saveToStorage();
  }

  public deleteSong(id: number) {
    const index = this.songs.findIndex(s => s.id === id);
    this.songs.splice(index, 1);
    this.saveToStorage();
  }

  public clearSongs() {
    this.songs.splice(0, this.songs.length);
    this.saveToStorage();
  }

  constructor(private storage: Storage) {
    this.loadFromStorage();
  }
}
