import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhotoPage } from './photo.page';

const routes: Routes = [
  {
    path: '',
    component: PhotoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhotoPageRoutingModule {}
