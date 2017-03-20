import {Component} from '@angular/core';
import {Storage} from '@ionic/storage';

import {Platform, NavController, ModalController, AlertController} from 'ionic-angular';
import {MineEditPage} from './mine-edit/mine-edit';
import {MineEditAvatarModalPage} from './mine-edit-avatar-modal/mine-edit-avatar-modal';
import {UserInfo} from "../../model/UserInfo";
import {Helper} from "../../providers/Helper";
import {DEFAULT_AVATAR} from "../../providers/Constants";
import {AboutPage} from "./about/about";
import {NativeService} from "../../providers/NativeService";


@Component({
  selector: 'page-mine',
  templateUrl: 'mine.html'
})
export class MinePage {
  userInfo: UserInfo;
  avatarPath: string = DEFAULT_AVATAR;
  isIos: boolean;

  constructor(private navCtrl: NavController,
              private platform: Platform,
              private nativeService: NativeService,
              private storage: Storage,
              private modalCtrl: ModalController,
              private alertCtrl: AlertController,
              private helper: Helper) {
    this.isIos = this.nativeService.isIos();
  }

  ionViewWillEnter() {
    this.storage.get('UserInfo').then(userInfo => {
      if (userInfo) {
        this.userInfo = userInfo;
        this.initPage();
      } else {
        this.helper.goLogin(userInfo => {
          this.userInfo = userInfo;
          this.initPage();
        });
      }
    });
  }

  private initPage() {
    //加载用户头像
    this.helper.getUserAvatar().then(avatarPath => {
      this.avatarPath = <string>avatarPath;
    });
  }

  edit() {
    this.navCtrl.push(MineEditPage, this.userInfo);
  }

  viewAvatar($event) {
    $event.stopPropagation();
    let modal = this.modalCtrl.create(MineEditAvatarModalPage, {avatarPath: this.avatarPath});
    modal.present();
    modal.onDidDismiss(data => {
      data && (this.avatarPath = data.avatarPath)
    });
  }


  loginOut() {
    this.alertCtrl.create({
      title: '确认重新登录？',
      buttons: [{text: '取消'},
        {
          text: '确定',
          handler: () => {
            this.helper.goLogin(userInfo => {
              this.userInfo = userInfo;
              this.initPage();
            });
          }
        }
      ]
    }).present();
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
}
