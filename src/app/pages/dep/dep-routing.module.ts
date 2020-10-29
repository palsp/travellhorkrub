import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DepPage } from './dep.page';

const routes: Routes = [
  {
    path: '',
    component: DepPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DepPageRoutingModule {}
