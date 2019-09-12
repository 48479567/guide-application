import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServices } from '../../services/auth.services';
import { AlertCustom } from '../../customs/alert.customs';
import { UserServices } from '../../services/user.services';
import { HomePage } from '../home/home';
import { Status, User } from '../../interfaces/user';
import { ToastCustom } from '../../customs/toast.custom';
import { c } from '@angular/core/src/render3';

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
  //General
  c: any =  console.log;
  clog: any;
  
  //Authentication
  email: string = '';
  password: string = '';
  repassword: string = '';
  status: Status;
  name: string = '';
  operation: string = 'login';
  constructor( 
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public authService: AuthServices, 
    public userService: UserServices, 
    public alertCustom: AlertCustom,
    public toastCustom: ToastCustom
    ) {
  }

  ionViewDidLoad() {
    this.c('ionViewDidLoad LoginPage');
  }

  registerWithEmail() {
    if(this.password != this.repassword) {
      this.clog = () => {
        this.c('Las Contraseñas no Coinciden');
      }
      this.alertCustom.alertAcept('Mal Ingreso', 'Las Contraseñas no Coinciden', this.clog);
      return;
    }
    this.authService.registerWithEmail(this.email, this.password)
      .then((data) => {
        const user: User = {
          name: this.name,
          active: true,
          status: this.status,
          uid: data.user.uid,
          email: this.email
        };
        this.userService.createUser(user)
          .then((data1) => {
            this.toastCustom.toastMain('Usuario Registrado!!!', 3000, 'bottom');
            this.operation = 'login';
            this.c(data);
          })
          .catch((error) => {
            this.clog = () => this.c(error);
            this.alertCustom.alertAcept('Error', 'Error en la Creacion de Usuario', this.clog);
          })
      })
      .catch((error) => {
        this.clog = () => this.c(error);
        this.alertCustom.alertAcept('Error', 'Error en el Registro de Cuentas de Firebase', this.clog);
      });
  }

  loginWithEmail() {
    this.authService.loginWithEmail(this.email, this.password)
      .then((data) => {
        this.c(data)
        this.toastCustom.toastMain('Bienvenido', 3000, 'bottom');
        this.navCtrl.setRoot(HomePage);
      })
      .catch((error) => {
        this.clog = () => this.c(error);
        this.alertCustom.alertAcept('Error', 'Error en el Login', this.clog);
      });
  }
}
