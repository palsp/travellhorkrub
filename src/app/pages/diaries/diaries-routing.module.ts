import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiariesPage } from './diaries.page';

const routes: Routes = [
  {
    path: '',
    component: DiariesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiariesPageRoutingModule {}
