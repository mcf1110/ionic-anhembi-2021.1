import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReleasesPage } from './releases.page';

const routes: Routes = [
  {
    path: ':id',
    component: ReleasesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReleasesPageRoutingModule { }
