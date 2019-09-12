import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ConversationPageModule } from '../pages/conversation/conversation.module';
import { LoginPageModule } from '../pages/login/login.module';
import { ProfilePageModule } from '../pages/profile/profile.module';
import { AboutPageModule } from '../pages/about/about.module';
import { ServicesUserProvider } from '../providers/services-user/services-user';
import { SearchPipe } from '../pipes/search';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { ServicesAuthProvider } from '../providers/services-user/services-auth';
import { AlertCustom } from '../shortcuts/alert';


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
    ServicesUserProvider,
    ServicesAuthProvider,
    AlertCustom
  ]
})
export class AppModule {}
