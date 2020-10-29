import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { DiariesPageRoutingModule } from './diaries-routing.module';
import {  ReactiveFormsModule } from '@angular/forms';
import { Postprovider } from 'src/providers /add';
import { HttpClientModule } from '@angular/common/http';
import { DiariesPage } from './diaries.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: DiariesPage
      }
    ]),
    HttpClientModule
  ],
  declarations: [DiariesPage],
  providers: [Postprovider],
})
export class DiariesPageModule {}
