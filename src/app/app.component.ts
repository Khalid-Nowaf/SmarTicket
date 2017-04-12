import { Component } from '@angular/core';

import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {AngularFireAuth, FirebaseAuthState } from 'angularfire2';
import { TabsPage } from '../pages/tabs/tabs';
import { SignInPage } from '../pages/sign-in/sign-in';
import { GateKeeperPage } from '../pages/gate-keeper/gate-keeper';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;
 
  constructor(platform: Platform, statusBar: StatusBar,
             splashScreen: SplashScreen,public auth: AngularFireAuth) {
    platform.ready().then(() => {
     // Auth handling 
      //this.handleSatus(auth.getAuth()); 
      
      auth.subscribe( (state: FirebaseAuthState) => {
      this.handleSatus(state);
    });

      statusBar.backgroundColorByHexString('#087f23');
      // statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  handleSatus(status:FirebaseAuthState){
    console.log("Auth checked!!");
    if(status == null) // not logged in 
    this.rootPage = SignInPage;
    else if (status.anonymous)
    this.rootPage = GateKeeperPage;
    else if (status.auth){
      this.rootPage = TabsPage;
    }
  }
}
