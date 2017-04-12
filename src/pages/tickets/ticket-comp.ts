import { Component,Input } from '@angular/core';
import { Ticket,TicketPage } from '../ticket/ticket';
import * as moment from 'moment';
import {AngularFire } from 'angularfire2';
import { SocialSharing } from '@ionic-native/social-sharing';
import {ModalController} from 'ionic-angular';
@Component({
  selector: 'ticket-box',
  templateUrl: 'ticket-box.html'
})


export class TicketBox {
@Input() public ticket:Ticket;
private uid;
constructor(private af:AngularFire,private sharing: SocialSharing,private modalCtrl:ModalController){
this.ticket = new Ticket();
this.uid = af.auth.getAuth().uid;


}

  isExp(ticket:Ticket){
  if(ticket.exp)
  return true;
  if(ticket.exp_by_date && moment().isAfter(ticket.exp_at))
  return true;
  if(ticket.exp_by_visit && ticket.exp_after <= 0)
  return true;

  return false;
}

makeExp(ticket:Ticket){
  this.af.database.object("users/"+this.uid+"/tickets/"+ticket.$key+"/exp").set(!ticket.exp);
}

 update(){
    this.modalCtrl.create(TicketPage,{"ticket":this.ticket}).present();
  }

share(event){
   event.stopPropagation();
  let url = "https://smarticket-627ee.firebaseapp.com?"+this.uid+"?"+this.ticket.$key;
  console.log(url);
  let msg = "Hi "+ this.ticket.to +",\nThis is your E-Ticket: "+url+"\nBest Regards\nSmarTicket Team";
  this.sharing.shareWithOptions({message:msg,subject:"Your new E-Ticket from SmarTicket",chooserTitle:"New E-Ticket"})
  .then(res =>{

  }).catch(err =>{
  });
}
}