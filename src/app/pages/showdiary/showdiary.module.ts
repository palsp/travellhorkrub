import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { ShowdiaryPageRoutingModule } from './showdiary-routing.module';

import {HttpClientModule} from '@angular/common/http';
import {Postprovider} from 'src/providers /post'
import { ShowdiaryPage } from './showdiary.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowdiaryPageRoutingModule,
    RouterModule.forChild([
      {
        path: '',
        component: ShowdiaryPage
      }
    ]),
    HttpClientModule
  ],
  declarations: [ShowdiaryPage],
  providers:[Postprovider],
})
export class ShowdiaryPageModule {}
