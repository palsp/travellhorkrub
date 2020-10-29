import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResPage } from './res.page';

const routes: Routes = [
  {
    path: '',
    component: ResPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResPageRoutingModule {}
