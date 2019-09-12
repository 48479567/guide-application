import { AlertController } from "ionic-angular";
import { Injectable } from "@angular/core";

@Injectable()
export class AlertCustom {
  constructor(private alertCtrl: AlertController) {
  }
  alertAcept(title: string, message: string, functAcept: any) {
    const acept = this.alertCtrl.create({
      title,
      message,
      buttons: [
        {
          text: 'Aceptar',
          handler: () => {
            functAcept();
          }
        }
      ]
    });
    acept.present();
  }

  alertConfirm(title: string, message: string, functAcept: any, functCancel: any) {
    const confirm = this.alertCtrl.create({
      title,
      message,
      buttons: [
        {
          text: 'Continuar',
          handler: () => {
            functAcept();
          }
        },
        {
          text: 'Cancelar',
          handler: () => {
            functCancel();
          }
        }
      ]
    });
    confirm.present();
  }
}