import { Component } from '@angular/core';
import { ViewController, ToastController } from 'ionic-angular';
import { AngularFire } from "angularfire2";


@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html'
})
export class SignUpPage {
  email: string;
  password: string;
  fullName: string;
  constructor(private viewCtrl: ViewController, private af: AngularFire, private tostCtrl: ToastController) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }

  signUp() {
    // 1) Create User Account
    this.af.auth.createUser({ email: this.email, password: this.password })
      .then(status => {
        // USER Profile
        let userProfile = {
          info: {
            full_name: this.fullName,
            email: this.email
          }
        };

        // 2) Create USER Profile
        this.af.database.object('/users/' + status.uid).set(userProfile)
          .then(res => {
            this.dismiss()
          }).catch(err => {
            this.tostCtrl.create({
              message: err.message,
              showCloseButton: true,
              dismissOnPageChange: true
            }).present();
          }); // End of User profile 
        
      }).catch(err => {
        this.tostCtrl.create({
          message: err.message,
          showCloseButton: true,
          dismissOnPageChange: true
        }).present();
      })
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }

}
