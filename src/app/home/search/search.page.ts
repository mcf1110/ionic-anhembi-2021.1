import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  public showSearch = false;

  constructor() { }

  ngOnInit() {
  }

  public setShowSearch(value: boolean) {
    this.showSearch = value;
  }

}
