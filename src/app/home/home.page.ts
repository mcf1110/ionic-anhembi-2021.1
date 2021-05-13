import { Component } from '@angular/core';
import { CameraResultType, Plugins } from '@capacitor/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public image = '';

  constructor() { }

  public async getPicture() {
    const photo = await Plugins.Camera.getPhoto({
      resultType: CameraResultType.DataUrl
    });
    this.image = photo.dataUrl;

  }

}
