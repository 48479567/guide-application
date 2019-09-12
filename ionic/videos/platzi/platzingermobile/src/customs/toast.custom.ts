import { Injectable } from "@angular/core";
import { ToastController } from "ionic-angular";


@Injectable()

export class ToastCustom {
  constructor(private toastCtrl: ToastController) {

  }

  toastMain(message: string, duration: number, position: string) {
    const toastMain = this.toastCtrl.create({
      message,
      duration,
      position
    });
    toastMain.present();
  }
}