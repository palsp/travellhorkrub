import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { DepPageRoutingModule } from './dep-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {Postprovider} from 'src/providers /post'
import { DepPage } from './dep.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: DepPage
      }
    ]),
    HttpClientModule
  ],
  declarations: [DepPage],
  providers:[Postprovider],
})
export class DepPageModule {}
