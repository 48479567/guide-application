import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServicesAuthProvider } from '../../providers/services-user/services-auth';
import { AlertCustom } from '../../shortcuts/alert';
import { ServicesUserProvider } from '../../providers/services-user/services-user';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  c: any =  console.log;
  clog: any;
  email: string = '';
  password: string = '';
  nick: string = '';
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public authService: ServicesAuthProvider, 
    public userService: ServicesUserProvider,
    public alertCustom: AlertCustom
    ) {
  }

  ionViewDidLoad() {
    this.c('ionViewDidLoad LoginPage');
  }

  goToBack() {
    this.navCtrl.pop();
  }  

  login() {
    this.authService.loginWithEmail(this.email, this.password)
      .then((data) => {
        this.clog = () => this.c(data);
        this.alertCustom.alertAcept('Exito', 'Ingreso Correcto', this.clog);
      })
      .catch((error) => {
        this.clog = () => this.c(error);
        this.alertCustom.alertAcept('Error', 'Error en el Login', this.clog);
      })
  }
  register() {
    this.authService.registerWithEmail(this.email, this.password).then((data) => {
      this.c(data);
      const user = {
        uid: data.user.uid,
        email: this.email,
        nick: this.nick
      };
      this.userService.createUser(user).then((data1) => {
          this.clog = () => this.c(data1);
          this.alertCustom.alertAcept('Éxito', 'Registro Correcto', this.clog);
        }).catch((error) => {
          this.clog = () => this.c(error);
          this.alertCustom.alertAcept('Error', 'Error en el Registro', this.clog);
        })
      }).catch((error) => {
        this.c(error);
    });
  }

  

}
