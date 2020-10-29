import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
  menu : any;
  userEmail: string;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,

  ) {
    this.sideMenu();
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  

  sideMenu()
  {
    this.menu =
    [
      {
        title : "info",
        url   : "/info",
        icon  : "information"
      },
      {
        title : "diaries",
        url   : "/diaryhome",
        icon  : "book"
      },
      {
        title : "Logout",
        url   : "/logout",
        icon  : "contacts"
      },
    ]
  }

}
