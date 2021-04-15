import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  public post;
  private posts = [
    {
      author: 'matheus',
      id: 0,
      liked: true,
    },
    {
      author: 'laura',
      id: 1,
      liked: false,
    },
    {
      author: 'Gustavo',
      id: 2,
      liked: false,
    },
    {
      author: 'Luckhaos Baião',
      id: 3,
      liked: true,
    },
    {
      author: 'Pedro Dalda',
      id: 4,
      liked: false,

    }, {
      author: 'Ana Carolina',
      id: 5,
      liked: true,
    },
  ];

  constructor(route: ActivatedRoute) {
    const currentId = +route.snapshot.paramMap.get('id');
    this.post = this.posts.find(p => p.id === currentId);
  }

  ngOnInit() {
  }
}
