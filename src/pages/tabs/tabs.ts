import { Component,ViewChild } from '@angular/core';
import { HomePage } from '../home/home';
import {TicketsPage } from '../tickets/tickets';
import { AngularFire,FirebaseListObservable} from 'angularfire2';
import { LogEvent } from '../gate-keeper/gate-keeper';
import {LogPage } from '../log/log';
import {Tab } from "ionic-angular";
import { Firebase } from '@ionic-native/firebase';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})

export class TabsPage {

private count:number;
private newLogs:{};
private uid;
private prevIndex;
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = TicketsPage;
  tab3Root: any = LogPage;

  constructor(private af:AngularFire,private fb:Firebase) {
    this.prevIndex = 0;
    this.newLogs = {};
    this.count = null;
     this.uid = af.auth.getAuth().uid;
     let q = {
       query: {
         orderByChild: 'new',
         equalTo: 'false'
       }
     };
    let obs = af.database.object('users/'+this.uid+"/logs").$ref.
    orderByChild("new").equalTo(true).
    on("child_added",(log)=>{
      console.log(log.val());
      this.newLog(log);
      this.newLogs[log.key+"/new"] = false;
    }) 
  }

  newLog(log){
    if(this.count == null)
    this.count = 1;
    else
    this.count++;
  }

  markRead(tab:Tab){

    if(this.prevIndex == 2){ 
    this.af.database.object('/users/'+this.uid+"/logs").$ref.update(this.newLogs)
    .then(res =>{
      console.log(res);
      this.newLogs = {};
      this.count = null;
    });
  }
  this.prevIndex = tab.index;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
