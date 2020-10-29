import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ResPageRoutingModule } from './res-routing.module';

import {HttpClientModule} from '@angular/common/http';
import {Postprovider} from 'src/providers /post'
import { ResPage } from './res.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: ResPage
      }
    ]),
    HttpClientModule
  ],
  declarations: [ResPage],
  providers:[Postprovider],
})
export class ResPageModule {}
