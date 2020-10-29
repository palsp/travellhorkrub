import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import {HttpClientModule} from '@angular/common/http';
import { TemplePage } from './temple.page';
import {Postprovider} from 'src/providers /post'

import { TemplePageRoutingModule } from './temple-routing.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: TemplePage
      }
    ]),
    HttpClientModule
  ],
  declarations: [TemplePage],
  providers:[Postprovider],
})
export class TemplePageModule {}
