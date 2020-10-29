import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';




@Injectable()
export class Postprovider {

    private insertURL = 'https://travellokrub.herokuapp.com/insertpost?post=';
    private insertbyidURL = "https://travellokrub.herokuapp.com/insertbyid?share=";
    categories :string;

    constructor(public http: HttpClient) {}

 

    insertPost( Name:string, Address:string, openingHour:string,Information:string,ImgUrl:string ,_category:string) {
        return this.http.get(this.insertURL+Name+'ฅ'+Address+'ฅ'+openingHour+'ฅ'+Information+'ฅ'+ImgUrl+'ฅ'+_category);
        
    }

    insertbyID(userid:any,datetime:string,post:string,goto:string,img:string){
        return this.http.get(this.insertbyidURL+userid+'ฅ'+datetime+'ฅ'+post+'ฅ'+goto+'ฅ'+img)

    }

}