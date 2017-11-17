import {Component} from '@angular/core';
import {NavController, NavParams, ModalController} from 'ionic-angular';
import {Utils} from "../../../providers/Utils";
import {ChangePasswordPage} from "../change-password/change-password";
import {NativeService} from "../../../providers/NativeService";

/**
 * Generated class for the SettingPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public nativeService: NativeService,
              private modalCtrl: ModalController) {
  }

  clearCache() {
    Utils.sessionStorageClear();//清除数据缓存
    this.nativeService.showToast('缓存清除成功');
    this.navCtrl.pop();
  }


  changePassword() {
    let modal = this.modalCtrl.create(ChangePasswordPage);
    modal.present();
    modal.onDidDismiss(data => {
    });
  }


}
