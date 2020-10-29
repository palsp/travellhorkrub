
import { Component, OnInit } from '@angular/core';

import { Observable} from 'rxjs';
import {Post} from 'src/models/post.model';
import {Postprovider} from 'src/providers /post'
@Component({
  selector: 'app-dep',
  templateUrl: './dep.page.html',
  styleUrls: ['./dep.page.scss'],
})
export class DepPage  {
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
