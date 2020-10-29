import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiaryhomePageRoutingModule } from './diaryhome-routing.module';

import { DiaryhomePage } from './diaryhome.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiaryhomePageRoutingModule
  ],
  declarations: [DiaryhomePage]
})
export class DiaryhomePageModule {}
