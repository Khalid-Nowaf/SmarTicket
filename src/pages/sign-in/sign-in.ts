import { Component,Inject } from '@angular/core';
import {ToastController,LoadingController,ModalController,AlertController} from 'ionic-angular';
import { AngularFire, AuthProviders, AuthMethods,FirebaseApp} from 'angularfire2';
import * as fb from 'firebase';

import { SignUpPage } from '../sign-up/sign-up';


/*
  Generated class for the SignIn page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html'
})

export class SignInPage {
  private password: string;
  private email: string;
  private loader: any;

  constructor(private af:AngularFire,public toastCtrl: ToastController,
             @Inject(FirebaseApp) private fApp: any,// Auth native from firebase SDK
              private modalCtrl:ModalController,private alertCtrl:AlertController,
              private loadingCtrl:LoadingController) {
    this.email = "";
    this.password = "";
    this.loader = this.loadingCtrl.create({
      content: "Please wait...",
      dismissOnPageChange:true
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignInPage');
  }

  signIn(){
   
    this.loader.present();

    this.af.auth.login({
        email: this.email,
        password: this.password,
    },
    {
      provider: AuthProviders.Password,
      method: AuthMethods.Password,
    }).catch((err) => {
       let toast = this.toastCtrl.create({
                      message: err.message,
                      showCloseButton: true,
                      dismissOnPageChange:true
                    });
       this.loader.dismissAll();
       toast.present();
  });
}

signUp(){
  this.modalCtrl.create(SignUpPage,{ params: '...'},{showBackdrop: true, enableBackdropDismiss: true}).present();
}
  keeper(){
    this.loader.present();
    this.af.auth.login({
      provider: AuthProviders.Anonymous,
      method: AuthMethods.Anonymous,
});
  }

  reset(){

    let prompt = this.alertCtrl.create({
      title: 'Reset Password',
      message: "Enter your Email Address ..",
      inputs: [
        {
          name: 'Email',
          placeholder: 'example@example.com'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Reset',
          handler: data => {
            console.log(data);
            this.fApp.auth().sendPasswordResetEmail(data['Email']).then((res) => {
              this.toastCtrl.create({
                message: "A reset password link has been sent to " + data['Email'],
                showCloseButton: true,
                dismissOnPageChange: true
              }).present();
            }).catch((err) => {
              this.toastCtrl.create({
                message: err.message,
                showCloseButton: true,
                dismissOnPageChange: true
              }).present();
            });
          }
        }
      ]
    });
    prompt.present();
    

  }

}
