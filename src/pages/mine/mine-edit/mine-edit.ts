import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { MineEditModalPage } from '../mine-edit-modal/mine-edit-modal';
import { GlobalData } from '../../../providers/GlobalData';
import { MineEditAvatarPage } from '../mine-edit-avatar/mine-edit-avatar';

@Component({
  selector: 'page-mine-edit',
  templateUrl: 'mine-edit.html'
})
export class MineEditPage {
  userInfo;

  constructor(public navCtrl: NavController,
              private modalCtrl: ModalController,
              private globalData: GlobalData) {
    this.userInfo = this.globalData.user;
  }

  viewAvatar() {
    this.navCtrl.push(MineEditAvatarPage);
  }

  openModal() {
    const modal = this.modalCtrl.create(MineEditModalPage);
    modal.present();
    modal.onDidDismiss(userInfo => {
      userInfo && (this.userInfo = userInfo);
    });
  }

}
