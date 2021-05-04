import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResultsPage } from './results.page';

const routes: Routes = [
  {
    path: ':id',
    component: ResultsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResultsPageRoutingModule { }
