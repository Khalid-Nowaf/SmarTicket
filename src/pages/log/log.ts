import { Component,OnDestroy } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

/*
  Generated class for the Log page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-log',
  templateUrl: 'log.html'
})
export class LogPage implements OnDestroy {

    ngOnDestroy(): void {
     console.log("Log Des!!!");
    }

  private logs: FirebaseListObservable<any[]>;
  constructor(public navCtrl: NavController, public navParams: NavParams, private af:AngularFire) {
    this.logs = af.database.list('/users/'+af.auth.getAuth().uid+"/logs");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LogPage');
  }

}
