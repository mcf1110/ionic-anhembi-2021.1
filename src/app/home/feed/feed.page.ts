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
    },
    {
      id: 7,
      liked: false,
      user: 'luizreisn',
      description: 'Universitário Indie',
    },
    {
      id: 60,
      liked: true,
      user: 'jpssantiago',
      description: 'Ainda não consegui sair do VIM.',
    },
    {
      id: 14,
      liked: true,
      user: 'sushiland',
      description: 'Batata doce',
    },
    {
      id: 11,
      liked: true,
      user: 'VRYDEV',
      description: 'Incrivel man',
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
