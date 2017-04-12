import { Component } from '@angular/core';
import { NavController, NavParams,Platform } from 'ionic-angular';
import {AngularFire} from 'angularfire2';
import { Ticket} from '../ticket/ticket';
import * as moment from 'moment';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
/*
  Generated class for the GateKeeper page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-gate-keeper',
  templateUrl: 'gate-keeper.html'
})
export class GateKeeperPage {
  private event:string;
  private ticket:Ticket;
  private url:string;
   private img:string;
   private data:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private af:AngularFire,private scanner:BarcodeScanner,private pf:Platform) {
  this.event = "";    
  this.url="assets/img/";
  this.img = this.url + "scanner.svg";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GateKeeperPage');
    this.ticket = null;
  }

  logout(){
    this.af.auth.logout();
  }

  scan(){
    if(this.pf.is("mobile")){

    this.scanner.scan()
    .then(res => {
        this.validate(res.text);
    })
    .catch(err => {
        this.data = err;
    })
    }else {
      let mockDate = {
        issued_by:"ffN4ZYASl7ZttbJ5MaYboa0yLJU2",
        id:"-KgmB4r3JuVE2CN0lxrm"
      }
      this.validate(JSON.stringify(mockDate));
    }
  }



  validate(data){
    this.data = data;
    let url;
    let user;
    if(data != null){
    let {issued_by,id} = JSON.parse(data);
    user = issued_by;
     url = "/users/"+issued_by+"/tickets/"+id;
    }else {
     url = "/users/"+"issued_by"+"/tickets/"+"id";
    }
    this.af.database.object(url).$ref.once("value")
    .then(ticket => {
      console.log(ticket.val());
       this.ticket = ticket.val();
       if(this.ticket != null){
       if(this.isExp())
       this.img = this.url + "exp.svg";
       else{
           this.dVisit(url,user);
           this.img = this.url + "ok.svg";
       }
      
      }else 
      this.img = this.url + "exp.svg"; // not found !
       setTimeout(()=>{
         this.img = this.url + "scanner.svg";
       },3000); 

    });

  }

  isExp():boolean{
  if(this.ticket != null){  
  if(this.ticket.exp)
  return true;
  if(this.ticket.exp_by_date && moment().isAfter(this.ticket.exp_at))
  return true;
  if(this.ticket.exp_by_visit && this.ticket.exp_after <= 0)
  return true;

  return false;
  } else   
    return true;
}

dVisit(url,uid){
  // decrment the visits number
  if(this.ticket.exp_by_visit)
  this.af.database.object(url+"/exp_after").set(this.ticket.exp_after - 1);
// add new log
   let log:LogEvent = new LogEvent();
       log.event_name = this.event;
       log.by = this.ticket.to;
       log.at = new Date().toISOString();
       log.new = true;
   this.af.database.object("users/"+uid+"/logs").$ref.push(log);
}

}

export class LogEvent{
  public event_name:string;
  public by:string;
  public at:string;
  public new:boolean;
}



 