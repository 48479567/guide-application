import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ConversationPage } from '../conversation/conversation';
import { LoginPage } from '../login/login'
import { User } from '../../interfaces/user';
import { ServicesUserProvider } from '../../providers/services-user/services-user';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  query: string = '';
  users: User[];
  c: any = console.log;
  constructor(public navCtrl: NavController, public userService: ServicesUserProvider) {
    this.userService.getUsers().valueChanges().subscribe((data: User[]) => { this.users = data }, (error) => { this.c(error); }); 
  }
  goToConversation(user) {
    this.navCtrl.push(ConversationPage, {uid: user.uid});
  }
  goToLogin() {
    this.navCtrl.push(LoginPage);
  }
  getIconByStatus(status) {
    let icon = '';
    switch (status) {
      case 'Online':
        icon = 'logo_live_online.png';
        break;
      case 'Offline':
        icon = 'logo_live_offline.png';
        break;
      case 'Busy':
        icon = 'logo_live_busy.png';
        break;
      case 'AppearOffline':
        icon = 'logo_live_appear_offline.png';
        break;
      case 'Away':
        icon = 'logo_live_away.png';
        break;
    }
    return icon;
  }
}
