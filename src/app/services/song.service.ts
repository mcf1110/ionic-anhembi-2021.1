import { Injectable } from '@angular/core';

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

  public songs: Song[] = [
    {
      id: 1,
      title: 'Never gonna give you up',
      artist: 'Rick Astley',
      favorite: true
    },
    {
      id: 2,
      title: 'Xote dos milagres',
      artist: 'Falamansa',
      favorite: false
    },
    {
      id: 3,
      title: 'I belive I can fly',
      artist: 'R. Kelly',
      favorite: true
    },
    {
      id: 4,
      title: 'Hammer Smashed face',
      artist: 'Cannibal Corpse',
      favorite: true
    },
    {
      id: 5,
      title: 'Dame Tu Cosita',
      artist: 'El Chombo',
      favorite: false
    },
    {
      id: 6,
      title: 'Enter sandman',
      artist: 'Metallica',
      favorite: true
    },
    {
      id: 7,
      title: 'Lost On You',
      artist: 'LP',
      favorite: false
    },
    {
      id: 8,
      title: 'Rap do Naruto',
      artist: '7 MInutoz',
      favorite: true
    },
    {
      id: 9,
      title: 'Pen Pineapple Apple Pen',
      artist: 'PIKOTARO',
      favorite: false
    },
    {
      id: 10,
      title: 'Até que durou',
      artist: 'Pericles',
      favorite: true
    },
    {
      id: 11,
      title: 'Alors on Danse',
      artist: 'Stromae',
      favorite: false
    },
  ]

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
  }

  constructor() { }
}
