import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {

  public posts = [
    {
      author: 'matheus',
      id: 15,
      liked: true,
      dirty: false
    },
    {
      author: 'laura',
      id: 42,
      liked: false,
      dirty: false
    },
    {
      author: 'Gustavo',
      id: 30,
      liked: false,
      dirty: false
    },
    {
      author: 'Luckhaos Baião',
      id: 24,
      liked: true,
      dirty: false
    },
    {
      author: 'Pedro Dalda',
      id: 25,
      liked: false,
      dirty: false

    }, {
      author: 'Ana Carolina',
      id: 9,
      liked: true,
      dirty: false
    },
  ];

  constructor() { }

  ngOnInit() {
  }

  public toggleLike(post) {
    post.dirty = true;
    post.liked = !post.liked;
  }
}
