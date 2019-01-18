import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GlobalData } from '../../../providers/GlobalData';
import { MineEditAvatarPage } from '../mine-edit-avatar/mine-edit-avatar';

@Component({
  selector: 'page-mine-edit',
  templateUrl: 'mine-edit.html'
})
export class MineEditPage {
  userInfo;

  constructor(public navCtrl: NavController,
              private globalData: GlobalData) {
    this.userInfo = this.globalData.user;
  }

  viewAvatar() {
    this.navCtrl.push(MineEditAvatarPage);
  }

  edit() {
    this.navCtrl.push('MineEditUserPage');
  }

}
