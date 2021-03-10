import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public counter = 0;
  public maxCounter = 0;

  public increment(){
    this.counter++;
    this.maxCounter = Math.max(this.counter, this.maxCounter);
    // if(this.counter > this.maxCounter){
    //   this.maxCounter = this.counter;
    // }
  }

  public decrement(){
    this.counter = Math.max(this.counter-1, 0);
    // if(this.counter < 0){
    //   this.counter--;
    // }
  }

  public reset(){
    this.counter = 0;
  }

}
