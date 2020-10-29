import { Component, OnInit } from '@angular/core';
import { Observable} from 'rxjs';
import {Post} from 'src/models/post.model';
import {Postprovider} from 'src/providers /post'

@Component({
  selector: 'app-res',
  templateUrl: './res.page.html',
  styleUrls: ['./res.page.scss'],
})
export class ResPage {

  public post$ : Observable<Post>
  constructor( private Postprovider : Postprovider) { }

  getPost(_cat :string) {
    this.post$ = this.Postprovider.getPost(_cat)
}
searchByName(Name:string,_cat:string){
  this.post$ = this.Postprovider.searchByName(Name,_cat)
  
}

searchByLocation(Loc:string,_cat:string){
  this.post$ = this.Postprovider.searchByLocation(Loc,_cat)
}



}
