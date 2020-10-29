import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ClubPageRoutingModule } from './club-routing.module';

import {HttpClientModule} from '@angular/common/http';
import { ClubPage } from './club.page';
import {Postprovider} from 'src/providers /post'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: ClubPage
      }
    ]),
    HttpClientModule
  ],
  declarations: [ClubPage],
  providers:[Postprovider],
})
export class ClubPageModule {}
