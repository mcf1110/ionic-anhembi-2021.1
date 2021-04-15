import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo-card',
  templateUrl: './photo-card.component.html',
  styleUrls: ['./photo-card.component.scss'],
})
export class PhotoCardComponent implements OnInit {

  @Input() public post;
  public dirty = false;

  constructor() { }

  ngOnInit() { }


  public toggleLike() {
    this.dirty = true;
    this.post.liked = !this.post.liked;
  }

}
