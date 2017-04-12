import { Component,Inject } from '@angular/core';
import { NavParams,ViewController } from 'ionic-angular';
import { AngularFire,FirebaseApp} from 'angularfire2';
import * as fb from 'firebase';
import * as QR from 'qrious';
/*
  Generated class for the Ticket page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-ticket',
  templateUrl: 'ticket.html'
})

// TODO form validation
export class TicketPage {
  private ticket:Ticket;
  private user: string;
  private dbRef ;
  private isUpdate:boolean;
  private key:string;

  constructor(private af: AngularFire, public navParams: NavParams, private viewCtrl: ViewController, 
              @Inject(FirebaseApp) private fApp:any){

    this.user = this.af.auth.getAuth().uid;
    this.dbRef = this.af.database.object("users/"+this.user+"/tickets");
     this.ticket = new Ticket();
     console.log(this.navParams.get("ticket"));
    if(this.navParams.get("ticket") != null){
      this.isUpdate = true;
      let toUpdate = this.navParams.get("ticket");
         this.ticket.to = toUpdate.to;
         this.ticket.email = toUpdate.email;
         this.ticket.phone = toUpdate.phone;
         this.ticket.exp_by_date = toUpdate.exp_by_date;
         this.ticket.exp_at = toUpdate.exp_at;
         this.ticket.exp_by_visit = toUpdate.exp_by_visit;
         this.ticket.exp_after = toUpdate.exp_after;
         this.ticket.created_at = toUpdate .created_at;
         this.ticket.rq  = toUpdate.rq;
         this.ticket.exp  = toUpdate.exp;
         this.key = toUpdate.$key;
    }
  }
   
  ionViewDidLoad() {
    console.log('ionViewDidLoad TicketPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  create(){
    // get refs for endpoint
    let dbRef = this.af.database.object("users/"+this.user).$ref;
    // get key for new ticket
     let key = dbRef.child("tickets").push().key;
    // build QR
     const qr = new QR({ value: JSON.stringify({issued_by:this.user,id:key}),size:500 });

    // store QR image first
    this.fApp.storage().ref("/QR/"+this.user+"/"+key).putString(qr.toDataURL('image/jpeg'),"data_url").then(res =>{
      // add ticket
      this.ticket.rq = res.downloadURL; // set URL
      this.ticket.created_at = new Date(); // set created at

      let newTicket = {};
      newTicket["/tickets/"+key] = this.ticket;
      // add new ticket date 
      // TODO: then() catch()
      dbRef.update(newTicket).then(res =>{
          this.dismiss();
      });
    }).catch(err =>{
      // TODO: handle error 
        console.log(err)
      }); // push the data
  }

  update(){
    this.af.database.object("users/"+this.user+"/tickets/"+this.key+"/").update(this.ticket)
    .then(res =>{
      this.dismiss();
    })
    .catch(err =>{
      console.log(err);
    })
  }

  delete(){
     this.af.database.object("users/"+this.user+"/tickets/"+this.key).remove()
     .then(res =>{
       this.dismiss();
     })
     .catch(err =>{
     console.log(err)});
  }

 
  
}

export class Ticket {
  public to:string;
  public email:string;
  public phone:string;
  public exp_by_date:boolean = false;
  public exp_at:Date;
  public exp_by_visit:boolean = false;
  public exp_after:number;
  public created_at:Date;
  public rq;
  public exp:boolean = false;
  public $key
}
