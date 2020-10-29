import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowdiaryPage } from './showdiary.page';

const routes: Routes = [
  {
    path: '',
    component: ShowdiaryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowdiaryPageRoutingModule {}
