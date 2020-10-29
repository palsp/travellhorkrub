import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AngularFirestore,AngularFirestoreDocument } from 'angularfire2/firestore';
import { AuthenticateService } from '../../services/authentication.service'
import { FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {
  validations_form : FormGroup;
  name:string;
  age:number;
  constructor(private afs: AngularFirestore,
    private AuthService: AuthenticateService,
    public formBuilder: FormBuilder,
    public router:Router) { 
    
}

  ngOnInit() {
    this.validations_form = this.formBuilder.group({
     name : new FormControl(),
      age:new FormControl()
    })
  }

  addUserData(value){
    return new Promise<any>((resolve, reject) => {
      this.afs.collection('/usersinfo').doc(this.AuthService.userDetails().email).set({
        name : value.name,
        age : value.age,
      })
      .then(
        (res) => {
          resolve(res)
        },
        err => reject(err)
      )
      this.router.navigate(['/home'])
    })
  }

  getUserData(){
    const ref: AngularFirestoreDocument<any> = this.afs.collection('/usersinfo').doc(this.AuthService.userDetails().email);
    ref.get().subscribe(snap => {
    if (snap.exists) {
      console.log(snap.data());
      this.name = snap.data().name
      this.age = snap.data().age 
    }
  });

  }

}

