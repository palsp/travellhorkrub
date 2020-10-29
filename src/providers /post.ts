import { Injectable } from "@angular/core";
import {HttpClient} from"@angular/common/http";
import { Post } from 'src/models/post.model';
import { Diary } from 'src/models/diary.model';


@Injectable()
export class Postprovider{
    private dataURL = "https://travellokrub.herokuapp.com/showpost?post="
    private searchNameURL = "https://travellokrub.herokuapp.com/searchbyname?Name="
    private searchLocURL = "https://travellokrub.herokuapp.com/searchbylocation?Loc="

    private getDataByIdURL ="https://travellokrub.herokuapp.com/searchbyid?id="   
    constructor(public http:HttpClient){}


    getPost(_cat:string){
        return this.http.get<Post>(this.dataURL+_cat)
    }


    searchByName(Name:string,_cat:string) {
        return this.http.get<Post>(this.searchNameURL+Name+"ฅ"+_cat)
 
    }

    searchByLocation(Loc:string,_cat:string){
        return this.http.get<Post>(this.searchLocURL+Loc+"ฅ"+_cat)
    }

    getDataByID(userid:any){
        return this.http.get<Diary>(this.getDataByIdURL+userid)
    }
}