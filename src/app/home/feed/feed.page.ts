import { Component, OnInit } from '@angular/core';

interface Post {
  url: string;
  liked: boolean;
  i: number;
}

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage {

  public posts: Post[] = Array(15).fill(null).map((v, i) =>
  ({
    url: `https://picsum.photos/id/${i + 50}/400/400`,
    liked: false,
    i
  }));

  public likePhoto(post: Post) {
    post.liked = !post.liked;
  }

}
