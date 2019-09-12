import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { LugaresService } from '../../services/lugares.service';
//1

/**
 * Generated class for the LugarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lugar',
  templateUrl: 'lugar.html',
})
export class LugarPage {
  lugar: any = {};
  botonString: string = '';
  mensajeGuardado: string = '';
  constructor(public navCtrl: NavController, public navParams: NavParams, public lugaresService: LugaresService, public alertCtrl: AlertController) {
    this.lugar = navParams.get('lugar');
      if (this.lugar.id) {
        this.botonString = 'Actualizar Lugar';
        this.mensajeGuardado = 'Se Actualizó el Lugar con Éxito!!';
      } else {
        this.botonString = 'Guardar Lugar';
        this.mensajeGuardado = 'Se Guardó el Lugar con Éxito!!';
      }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LugarPage');
  }

  guardarLugar() {
    
    this.lugar.id = this.lugar.id || Date.now();
    console.log(this.lugar);
    this.lugaresService.createLugar(this.lugar);
    this.navCtrl.pop();
    const alertExito = this.alertCtrl.create({
      title: 'Operación Exitosa',
      message: this.mensajeGuardado + '!!!',
      buttons: [
        {
          text: 'Aceptar',
          handler: () => {
            console.log(this.mensajeGuardado + '!!!');
          }
        }
      ]
    });
    alertExito.present();
  }
//

}
  // 1..import { TerceraPage } from '../tercera/tercera';
  // 2..navigationBack() {
  //   this.navCtrl.pop();
  // }
  // navigationToThird() {
  //   this.navCtrl.push(TerceraPage);
  // }