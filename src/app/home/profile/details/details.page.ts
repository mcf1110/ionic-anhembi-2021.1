import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  private posts = [
    {
      id: 99,
      liked: false,
      user: 'luizreisn',
      description: 'Legenda',
      dirty: false,
    }, {
      id: 15,
      liked: false,
      user: 'luizreisn',
      description: 'Sempre em contato com a natureza!',
      dirty: false,
    }, {
      id: 80,
      liked: true,
      user: 'luizreisn',
      description: 'dei like na propria foto',
      dirty: false,
    },
    {
      id: 33,
      liked: false,
      user: 'luizreisn',
      description: 'Isso ai mesmo',
      dirty: false,
    },
  ]

  public post;

  constructor(route: ActivatedRoute) {
    const postId: number = +route.snapshot.paramMap.get('photoId');
    this.post = this.posts.find(p => p.id === postId);
  }

  ngOnInit() {
  }


  public toggleLike(post) {
    post.dirty = true;
    post.liked = !post.liked;
  }

}
