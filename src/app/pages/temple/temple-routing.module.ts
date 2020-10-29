import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TemplePage } from './temple.page';

const routes: Routes = [
  {
    path: '',
    component: TemplePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TemplePageRoutingModule {}
