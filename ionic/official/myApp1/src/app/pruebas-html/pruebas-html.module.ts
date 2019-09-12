import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PruebasHtmlPage } from './pruebas-html.page';

const routes: Routes = [
  {
    path: '',
    component: PruebasHtmlPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PruebasHtmlPage]
})
export class PruebasHtmlPageModule {}
