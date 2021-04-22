import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-photo-card',
  templateUrl: './photo-card.component.html',
  styleUrls: ['./photo-card.component.scss'],
})
export class PhotoCardComponent {

  @Input() post;
  public dirty = false;

  public toggleLike(post) {
    this.dirty = true;
    post.liked = !post.liked;
  }

}
