import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
   items: FirebaseListObservable<any[]>;
  constructor(public navCtrl: NavController,private af: AngularFire) {
     this.items = this.af.database.list('/items');
  }

  logout(){
    this.af.auth.logout();
  }

}
