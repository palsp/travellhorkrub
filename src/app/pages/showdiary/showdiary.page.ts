import { Component, OnInit } from '@angular/core';
import { Observable} from 'rxjs';
import {Post} from 'src/models/post.model';
import {Postprovider} from 'src/providers /post';

import { AngularFirestore,AngularFirestoreDocument } from 'angularfire2/firestore';
import { AuthenticateService } from '../../services/authentication.service'
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import {Diary} from 'src/models/diary.model';
@Component({
  selector: 'app-showdiary',
  templateUrl: './showdiary.page.html',
  styleUrls: ['./showdiary.page.scss'],
})
export class ShowdiaryPage {
  public diary$ : Observable<Diary>
  constructor(private AuthService: AuthenticateService,
    public router:Router,
    private Postprovider:Postprovider,
    private toast : ToastController,) { }
    private userID : string
  show() {
    this.diary$ = this.Postprovider.getDataByID(this.getuserID())
    
  }

  getuserID(){
    this.userID  = this.AuthService.userDetails().email
    return this.userID
  }

}
