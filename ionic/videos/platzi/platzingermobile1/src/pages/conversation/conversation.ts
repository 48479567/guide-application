import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../interfaces/user';
import { ServicesUserProvider } from '../../providers/services-user/services-user';

/**
 * Generated class for the ConversationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-conversation',
  templateUrl: 'conversation.html',
})
export class ConversationPage {
  today: any = Date.now();
  price: number = 78.8234738;
  userId: any;
  users: User[];
  user: User;
  constructor(public navCtrl: NavController, public navParams: NavParams, userService: ServicesUserProvider) {
    // this.userId = this.navParams.get('uid');
    // this.user = this.users.find((record) => {
    //   return record.uid == this.userId;
    // });
    // console.log(this.user);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ConversationPage');
  }

  goToBack() {
    this.navCtrl.pop();
  }
}
