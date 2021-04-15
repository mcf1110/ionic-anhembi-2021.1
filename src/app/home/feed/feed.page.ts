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
    },
    {
      author: 'laura',
      id: 42,
      liked: false,
    },
    {
      author: 'Gustavo',
      id: 30,
      liked: false,
    },
    {
      author: 'Luckhaos Baião',
      id: 24,
      liked: true,
    },
    {
      author: 'Pedro Dalda',
      id: 25,
      liked: false,

    }, {
      author: 'Ana Carolina',
      id: 9,
      liked: true,
    },
  ];

  constructor() { }

  ngOnInit() {
  }
}
