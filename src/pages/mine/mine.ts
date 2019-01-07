import { Helper } from '../../providers/Helper';
import { Component } from '@angular/core';
import { MineEditPage } from './mine-edit/mine-edit';
import { AboutPage } from './about/about';
import { LoginPage } from '../login/login';
import { AlertController, ModalController, NavController, Platform } from 'ionic-angular';
import { SettingPage } from './setting/setting';
import { NativeService } from '../../providers/NativeService';
import { FileCachePage } from '../../shared/file-cache/file-cache';
import { GlobalData } from '../../providers/GlobalData';
import { MineEditAvatarPage } from './mine-edit-avatar/mine-edit-avatar';

@Component({
  selector: 'page-mine',
  templateUrl: 'mine.html'
})
export class MinePage {

  constructor(public navCtrl: NavController,
              public platform: Platform,
              public helper: Helper,
              public modalCtrl: ModalController,
              public nativeService: NativeService,
              public globalData: GlobalData,
              public alertCtrl: AlertController) {
  }

  edit() {
    this.navCtrl.push(MineEditPage);
  }

  setting() {
    this.navCtrl.push(SettingPage);
  }

  login() {
    this.modalCtrl.create(LoginPage).present();
  }

  // 工作地图
  map() {
    this.navCtrl.push('WorkMapPage');
  }

  fileCache() {
    this.navCtrl.push(FileCachePage);
  }

  exitSoftware() {
    this.alertCtrl.create({
      title: '确认退出软件？',
      buttons: [{text: '取消'},
        {
          text: '确定',
          handler: () => {
            this.platform.exitApp();
          }
        }
      ]
    }).present();
  }

  about() {
    this.navCtrl.push(AboutPage);
  }

  viewAvatar() {
    this.navCtrl.push(MineEditAvatarPage);
  }

  notice() {
    this.nativeService.alert('开发中...');
  }

}
