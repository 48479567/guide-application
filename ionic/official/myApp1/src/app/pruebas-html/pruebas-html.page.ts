import { Component, OnInit } from '@angular/core';
import { AlertCustom } from 'src/customs/alert.custom';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-pruebas-html',
  templateUrl: './pruebas-html.page.html',
  styleUrls: ['./pruebas-html.page.scss'],
})
export class PruebasHtmlPage implements OnInit {

  constructor(
    public alertCustom: AlertCustom,
    public alertCtrl: AlertController
  ) { }

  ngOnInit() {
  }

  async mostrar() {
    return await this.alertCustom.AlertAcept(
      'Muestra',
      'Muestra Subheader',
      'Mensaje Muestra',
      []
    );

  }

}
