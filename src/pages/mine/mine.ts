import {Component} from "@angular/core";
import {Storage} from "@ionic/storage";
import {Platform, NavController, ModalController, AlertController} from "ionic-angular";
import {MineEditPage} from "./mine-edit/mine-edit";
import {MineEditAvatarModalPage} from "./mine-edit-avatar-modal/mine-edit-avatar-modal";
import {UserInfo} from "../../model/UserInfo";
import {AboutPage} from "./about/about";
import {LoginPage} from "../login/login";
import {Helper} from "../../providers/Helper";
import {DEFAULT_AVATAR} from "../../providers/Constants";
import {WorkMapPage} from "./work-map/work-map";
import {SettingPage} from "./setting/setting";
import {NativeService} from "../../providers/NativeService";
import {FileCachePage} from "../../shared/file-cache/file-cache";

@Component({
  selector: 'page-mine',
  templateUrl: 'mine.html'
})
export class MinePage {
  userInfo: UserInfo;
  avatarPath: String = DEFAULT_AVATAR;

  constructor(private navCtrl: NavController,
              private platform: Platform,
              private storage: Storage,
              private helper: Helper,
              private modalCtrl: ModalController,
              private nativeService: NativeService,
              private alertCtrl: AlertController) {

  }

  ionViewWillEnter() {
    this.storage.get('LoginInfo').then(loginInfo => {
      let userInfo = loginInfo.user;
      if (userInfo) {
        this.userInfo = userInfo;
        this.avatarPath = userInfo.avatarPath;
      }
    });
  }

  edit() {
    this.navCtrl.push(MineEditPage, {'userInfo': this.userInfo, 'avatarPath': this.avatarPath});
  }

  setting() {
    this.navCtrl.push(SettingPage);
  }

  loginOut() {
    this.alertCtrl.create({
      title: '确认重新登录？',
      buttons: [{text: '取消'},
        {
          text: '确定',
          handler: () => {
            let modal = this.modalCtrl.create(LoginPage);
            modal.present();
            modal.onDidDismiss(userInfo => {
              if (userInfo) {
                this.userInfo = userInfo;
                this.helper.loadAvatarPath(userInfo.avatarId).subscribe(avatarPath => {//获取头像路径
                  this.avatarPath = avatarPath
                });
              }
            });
          }
        }
      ]
    }).present();
  }

  //工作地图
  map() {
    this.navCtrl.push(WorkMapPage);
  }

  fileCache(){
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
    let modal = this.modalCtrl.create(MineEditAvatarModalPage, {avatarPath: this.avatarPath});
    modal.present();
    modal.onDidDismiss(data => {
      data && (this.avatarPath = data.avatarPath)
    });
  }

  notice(){
    this.nativeService.alert('开发中...');
  }

}
