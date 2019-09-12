import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController } from 'ionic-angular';
import { AuthService } from '../../services/auth.service';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public authService: AuthService, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  loginFacebook() {
    this.authService.loginWithFacebook().then((response) => {
      const loginExito = this.alertCtrl.create({
        title: 'Login con Facebook',
        message: 'Ingresaste a la Aplicacion Por Medio de Facebook',
        buttons: [
          {
            text: 'Aceptar',
            handler: () => {
              console.log('Ingresaste con Facebook!!');
            }
          }
        ]
      });
      loginExito.present();
      this.viewCtrl.dismiss();
      localStorage.setItem('loginData', JSON.stringify(response));
      // Este Ultimo es para el manejo de usuarios que ingresan a la aplicacion.
    });
  }
  cancelarLogin() {
    this.viewCtrl.dismiss(); // Esto es para cerrar el modal.
  }


}
