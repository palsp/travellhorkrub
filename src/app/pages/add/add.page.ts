import { Component, OnInit } from '@angular/core';
import { add } from "src/models/add.model";
import { Postprovider } from 'src/providers /add';
import { Observable } from 'rxjs';
import { ToastController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage  {
  Name : any;
  Description : any;
  ImgUrl:any;
  add$ : any;
  _cat : any;

  constructor(private Postprovider : Postprovider , 
    private toast : ToastController, 
    private alertcontroller : AlertController ) {}

    async showGreeting() {
      const t = await this.toast.create({
        message: "Successful",
        duration: 3000
      });
      await t.present();
    }

  insertPost(Name:string,Address:string,openingHour:string,Information:string,ImgUrl:string,_cat:string) {
    this.add$ = this.Postprovider.insertPost(Name,Address,openingHour,Information,ImgUrl,_cat);
  }

  /*insert(Name:string,Address:string,openingHour:string,Information:string,ImgUrl:string,_cat:string){
      this.insertPost(Name,Address,openingHour,Information,ImgUrl,_cat)
      return this.showGreeting()
  }*/

}
