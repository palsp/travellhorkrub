import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { InfoPageRoutingModule } from './info-routing.module';
import {  ReactiveFormsModule } from '@angular/forms';
import { InfoPage } from './info.page';

const routes: Routes = [
  {
    path: '',
    component: InfoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    InfoPageRoutingModule
  ],
  declarations: [InfoPage]
})
export class InfoPageModule {}
