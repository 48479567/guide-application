import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController } from 'ionic-angular';
import { LugarPage } from '../lugar/lugar';
import { LugaresService } from '../../services/lugares.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  lugares: any = [];

  constructor(public navCtrl: NavController, public lugaresService: LugaresService, public alertCtrl: AlertController, public loadingCtrl: LoadingController) {
    this.lugaresService.getLugares().valueChanges().subscribe((lugaresFB) => { this.lugares = lugaresFB;})
  }

  goToExistingDetailView(lugar) {
    this.navCtrl.push(LugarPage, {lugar: lugar});
  }
  goToDetailView() {
    this.navCtrl.push(LugarPage, {lugar: {}});
  }
  // deleteLugar(lugar) {
  //   if (confirm('¿Desea Eliminar este Lugar?')) {
  //     this.lugaresService.deleteLugar(lugar).then(() => {alert('Se Elimino el Lugar');})
  //   }
  // }
  deleteLugar(lugar) {
    const confirm = this.alertCtrl.create({
      title: 'Eliminar Lugar',
      message: '¿Estas Seguro de Querer Eliminar este Lugar?',
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
            console.log('Eliminación Cancelada!!');
          }
        },
        {
          text: 'Continuar',
          handler: () => {
            console.log('Procediendo con la Eliminación!!');
            this.lugaresService.deleteLugar(lugar).then(() => {
              this.presentLoading();
            });
          }
        }
      ]
    });
    confirm.present();
  }
  
  presentLoading() {
    const loader = this.loadingCtrl.create({
      content: "Por Favor, espera...",
      duration: 1000
    });
    loader.present();
  }
 //1
}

 // navegarALugar(name) {
  //   this.navCtrl.push(LugarPage, {name: name});// Esto agrega una vista a nuestro stack de navegacion
  // }