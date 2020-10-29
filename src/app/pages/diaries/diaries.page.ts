import { Component, OnInit } from '@angular/core';
import { ToastController, AlertController } from '@ionic/angular';
import { AngularFirestore,AngularFirestoreDocument } from 'angularfire2/firestore';
import { AuthenticateService } from '../../services/authentication.service'
import { FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';
import { Router } from '@angular/router';

import {Postprovider} from 'src/providers /add';
@Component({
  selector: 'app-diaries',
  templateUrl: './diaries.page.html',
  styleUrls: ['./diaries.page.scss'],
})
export class DiariesPage {
  userID :string;
  add$ : any;

  constructor(
    private AuthService: AuthenticateService,
    public router:Router,
    private Postprovider:Postprovider,
    private toast : ToastController,
      
    ){

} 

 async showGreeting() {
    const t = await this.toast.create({
      message: "Successful",
      duration: 3000
    });
    await t.present();
  }
  addDataByID(goto:string,Post:string,datetime:string,img:string){ 
    this.userID = this.AuthService.userDetails().email
    this.add$ = this.Postprovider.insertbyID(this.userID,datetime,Post,goto,img);
  }
  addData(goto:string,Post:string,datetime:string,img:string){ 
    this.addDataByID(goto,Post,datetime,img)
    this.showGreeting()
  }

}