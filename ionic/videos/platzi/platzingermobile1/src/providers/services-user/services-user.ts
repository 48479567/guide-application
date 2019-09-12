import { Injectable } from '@angular/core';
import { User, Status } from '../../interfaces/user';
import { AngularFireDatabase } from 'angularfire2/database';

/*
  Generated class for the ServicesUserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServicesUserProvider {
  users: User[];
  status: Status;
  constructor(private angularFireDatabase: AngularFireDatabase) {
  }

  getUsers() {
    return this.angularFireDatabase.list('/users/');
  }
  getUserById(uid) {
    return this.angularFireDatabase.object(`/users/${uid}`);
  }
  createUser(user) {
    return this.angularFireDatabase.object(`/users/${user.uid}`).set(user);
  }
  editUser(user) {
    return this.angularFireDatabase.object(`/users/${user.uid}`).set(user);
  }
}
