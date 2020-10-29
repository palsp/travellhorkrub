import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AddPage } from './add.page';
import { Postprovider } from 'src/providers /add';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  imports: [

    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: AddPage
      }
    ]),
    HttpClientModule
  ],
  declarations: [AddPage],
  providers: [Postprovider],
})

export class AddPageModule {}