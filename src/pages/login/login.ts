import {Component} from '@angular/core';
import {ModalController, ViewController, Platform, AlertController} from 'ionic-angular';
import {Storage} from '@ionic/storage';
import {FormBuilder, Validators} from '@angular/forms';

import {LoginService} from './LoginService';

import {FindPasswordPage} from './find-password/find-password';
import {RegisterPage} from './register/register';
import {UserInfo} from "../../model/UserInfo";


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [LoginService]
})
export class LoginPage {
  userInfo: UserInfo;
  submitted: boolean = false;
  canLeave: boolean = false;
  loginForm: any;

  constructor(private viewCtrl: ViewController,
              private formBuilder: FormBuilder,
              private storage: Storage,
              private modalCtrl: ModalController,
              private platform: Platform,
              private alertCtrl: AlertController,
              private loginService: LoginService) {
    this.loginForm = this.formBuilder.group({
      username: ['yanxiaojun617', [Validators.required, Validators.minLength(4)]],// 第一个参数是默认值
      password: ['123456', [Validators.required, Validators.minLength(4)]]
    });
  }

  ionViewWillEnter() {
    this.storage.get('UserInfo').then(userInfo => {
      this.userInfo = userInfo || null;
    });
  }

  ionViewCanLeave(): boolean {
    let bool = !!this.userInfo;
    if (this.canLeave || bool) {
      return true;
    } else {
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
      return false;
    }
  }

  login(user) {
    this.submitted = true;
    this.loginService.login(user)
      .then(result => {
        this.submitted = false;
        if (result['success']) {
          let data = result['data'];
          let userInfo = <UserInfo>data;
          this.userInfo = userInfo;
          this.storage.set('UserInfo', userInfo);
          this.viewCtrl.dismiss(userInfo);
        }
      });
  }


  toRegister() {
    this.canLeave = true;
    let modal = this.modalCtrl.create(RegisterPage);
    modal.present();
    this.canLeave = false;
  }

  findPassword() {
    this.canLeave = true;
    let modal = this.modalCtrl.create(FindPasswordPage);
    modal.present();
    this.canLeave = false
  }

}
