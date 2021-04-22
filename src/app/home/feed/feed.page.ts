import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {

  public posts = [
    {
      id: 22,
      liked: true,
      user: 'mcf1110',
      description: 'Abbey road mas eu sou um artista solo',
      dirty: false,
    },
    {
      id: 7,
      liked: false,
      user: 'luizreisn',
      description: 'Universitário Indie',
      dirty: false,
    },
    {
      id: 60,
      liked: true,
      user: 'jpssantiago',
      description: 'Ainda não consegui sair do VIM.',
      dirty: false,
    },
    {
      id: 14,
      liked: true,
      user: 'sushiland',
      description: 'Batata doce',
      dirty: false,
    },
    {
      id: 11,
      liked: true,
      user: 'VRYDEV',
      description: 'Incrivel man',
      dirty: false,
    },
  ]

  constructor() { }

  ngOnInit() {
  }

  public toggleLike(post) {
    post.dirty = true;
    post.liked = !post.liked;
  }

}
