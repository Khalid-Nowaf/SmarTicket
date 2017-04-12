import { Component } from '@angular/core';
import { NavController, NavParams,ModalController} from 'ionic-angular';
import { TicketPage, Ticket} from '../ticket/ticket';
import { AngularFire,FirebaseListObservable } from 'angularfire2';
/*
  Generated class for the Tickets page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-tickets',
  templateUrl: 'tickets.html'
})

export class TicketsPage {
  private user;
  tickets;
  constructor(private modalCtrl:ModalController,af:AngularFire) {
    this.user = af.auth.getAuth().uid;
    this.tickets = af.database.list("/users/"+this.user+"/tickets");

  }

  add(){
    this.modalCtrl.create(TicketPage).present();
  }

  view(uid){

  }

  send(uid){

  }

  delete(uid){

  }

  exp(uid){

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad TicketsPage');
  }

}
