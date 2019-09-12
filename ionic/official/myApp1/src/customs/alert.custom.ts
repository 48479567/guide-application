import { Injectable } from "@angular/core";
import { AlertController } from "@ionic/angular";

@Injectable()

export class AlertCustom {
  constructor(
    private alertCtrl: AlertController
  ) {}

  async AlertAcept(
    header?: string,
    subHeader?: string,
    message?: string,
    buttons?: any[]
    ) {
    const acept = await this.alertCtrl.create({
      header,
      subHeader,
      message,
      buttons
    });
    return await acept.present();
  }
}