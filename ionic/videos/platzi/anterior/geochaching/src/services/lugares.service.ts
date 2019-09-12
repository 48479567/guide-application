import {AngularFireDatabase} from 'angularfire2/database';
import { Injectable } from '@angular/core';


//Modularidad Injectable
@Injectable()

export class LugaresService {
  
  constructor(public afDB: AngularFireDatabase) {

  }
  // El uso del return es porque se quiere obtener esos datos a parte de leerlos
  public getLugares() {
    return this.afDB.list('/lugares/');
  }
  public getLugar(id) {
    return this.afDB.object('/lugares/' + id);
  }
  public createLugar(lugar) {
    return this.afDB.database.ref('/lugares/' + lugar.id).set(lugar);
  }
  public editLugar(lugar) {
    return this.afDB.database.ref('/lugares/'+ lugar.id).set(lugar);
  }
  public deleteLugar(lugar) {
    return this.afDB.database.ref('/lugares/' +lugar.id).remove()
  }
}