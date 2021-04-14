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
      dirty: false
    },
    {
      author: 'laura',
      id: 1,
      liked: false,
      dirty: false
    },
    {
      author: 'Gustavo',
      id: 2,
      liked: false,
      dirty: false
    },
    {
      author: 'Luckhaos Baião',
      id: 3,
      liked: true,
      dirty: false
    },
    {
      author: 'Pedro Dalda',
      id: 4,
      liked: false,
      dirty: false

    }, {
      author: 'Ana Carolina',
      id: 5,
      liked: true,
      dirty: false
    },
  ];

  constructor(route: ActivatedRoute) {
    const currentId = +route.snapshot.paramMap.get('id');
    this.post = this.posts.find(p => p.id === currentId);
  }

  ngOnInit() {
  }

  public toggleLike(post) {
    post.dirty = true;
    post.liked = !post.liked;
  }

}
