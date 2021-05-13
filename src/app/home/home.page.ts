import { Component } from '@angular/core';
import { Plugins, CameraResultType } from '@capacitor/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public image = ''

  constructor() { }

  public async getPhoto() {
    const photo = await Plugins.Camera.getPhoto({
      resultType: CameraResultType.DataUrl,
    });
    this.image = photo.dataUrl;
  }

}
