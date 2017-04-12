// Angular
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule }   from '@angular/forms';  //added
import { CommonModule } from '@angular/common'; // added
//Ioinc
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { AngularFireModule } from 'angularfire2';
import { MyApp } from './app.component';
// Plugins
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SocialSharing } from '@ionic-native/social-sharing'; // added
import { BarcodeScanner } from '@ionic-native/barcode-scanner'; // added
import { Firebase } from '@ionic-native/firebase';
//Pages
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { SignInPage } from '../pages/sign-in/sign-in';
import { SignUpPage } from '../pages/sign-up/sign-up';
import { GateKeeperPage } from '../pages/gate-keeper/gate-keeper';
import { TicketsPage } from '../pages/tickets/tickets';
import { TicketPage } from '../pages/ticket/ticket';
import { LogPage } from '../pages/log/log';
//Comp
import { TicketBox } from '../pages/tickets/ticket-comp';

export const firebaseConfig = {
    apiKey: "AIzaSyALGdlZibn9j-i8un9gKaCAxIk1_9fjeBA",
    authDomain: "smarticket-627ee.firebaseapp.com",
    databaseURL: "https://smarticket-627ee.firebaseio.com",
    projectId: "smarticket-627ee",
    storageBucket: "smarticket-627ee.appspot.com",
    messagingSenderId: "171791695450"
};


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    SignInPage,
    SignUpPage,
    GateKeeperPage,
    TicketsPage,
    TicketPage,
    TicketBox,
    LogPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    FormsModule,
    CommonModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    SignInPage,
    SignUpPage,
    GateKeeperPage,
    TicketsPage,
    TicketPage,
    LogPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SocialSharing,
    BarcodeScanner,
    Firebase,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
