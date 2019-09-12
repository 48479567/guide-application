import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LugarPage } from '../pages/lugar/lugar';
import { PerfilPage } from '../pages/perfil/perfil';
import { TabsPage } from '../pages/tabs/tabs';
import { AboutPage } from '../pages/about/about';
import { TerceraPage } from '../pages/tercera/tercera';

import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { LugaresService } from '../services/lugares.service';
import { LoginPage } from '../pages/login/login';
import { AuthService } from '../services/auth.service';

export const firebaseConfig = {
  apiKey: "AIzaSyA1sto17aQjvzHJcS0yBe-TjcM8_8GraEQ",
  authDomain: "ionicbasicplatzi-9ca95.firebaseapp.com",
  databaseURL: "https://ionicbasicplatzi-9ca95.firebaseio.com",
  projectId: "ionicbasicplatzi-9ca95",
  storageBucket: "ionicbasicplatzi-9ca95.appspot.com",
  messagingSenderId: "436746482486"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LugarPage,
    PerfilPage,
    TabsPage,
    AboutPage,
    TerceraPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LugarPage,
    PerfilPage,
    TabsPage,
    AboutPage,
    TerceraPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LugaresService,
    AuthService
  ]
})
export class AppModule {}
