import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiaryhomePage } from './diaryhome.page';

const routes: Routes = [
  {
    path: '',
    component: DiaryhomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiaryhomePageRoutingModule {}
