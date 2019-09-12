import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SearchPipe } from '../pipes/search';
import { LoginPageModule } from '../pages/login/login.module';
import { ConversationPageModule } from '../pages/conversation/conversation.module';
import { ProfilePageModule } from '../pages/profile/profile.module';
import { AboutPageModule } from '../pages/about/about.module';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { UserServices } from '../services/user.services';
import { AuthServices } from '../services/auth.services';
import { AlertCustom } from '../customs/alert.customs';
import { ToastCustom } from '../customs/toast.custom';
import { AngularFireModule } from 'angularfire2';


export const firebaseConfig = {
  apiKey: "AIzaSyD-LAkvEvqjlOjIPrvMZhrdRbvoxypHba0",
  authDomain: "platzinger-b3092.firebaseapp.com",
  databaseURL: "https://platzinger-b3092.firebaseio.com",
  projectId: "platzinger-b3092",
  storageBucket: "platzinger-b3092.appspot.com",
  messagingSenderId: "753452567366"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    LoginPageModule,
    ConversationPageModule,
    ProfilePageModule,
    AboutPageModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserServices,
    AuthServices,
    AlertCustom,
    ToastCustom
  ]
})
export class AppModule {}
