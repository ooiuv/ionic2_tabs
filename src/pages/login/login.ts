import { Component } from '@angular/core';
import { Events, NavController, Platform, ViewController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { FormBuilder, Validators } from '@angular/forms';
import { GlobalData } from '../../providers/GlobalData';
import { CommonService } from '../../service/CommonService';
import { Helper } from '../../providers/Helper';
import { UserInfo } from '../../model/UserInfo';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  submitted = false;
  loginForm: any;

  constructor(public navCtrl: NavController,
              public viewCtrl: ViewController,
              public formBuilder: FormBuilder,
              public storage: Storage,
              public events: Events,
              public globalData: GlobalData,
              public platform: Platform,
              public helper: Helper,
              public commonService: CommonService) {
    this.loginForm = this.formBuilder.group({
      username: [this.globalData.username || 'test', [Validators.required, Validators.minLength(2)]], // 第一个参数是默认值
      password: ['123456', [Validators.required, Validators.minLength(4)]]
    });
  }

  login(user) {
    this.submitted = true;
    this.commonService.getToken(user.username, user.password).mergeMap(token => {
      this.globalData.token = token;
      this.storage.set('token', token);
      return this.commonService.getUserInfo();
    }).subscribe((userInfo: UserInfo) => {
      this.submitted = false;
      this.helper.loginSuccessHandle(userInfo);
      // 登录页从其他页面进入，需要获取最顶层的导航，然后setRoot
      let topNavCtrl = (this.navCtrl.parent && this.navCtrl.parent.parent) || this.navCtrl.parent || this.navCtrl;
      topNavCtrl.setRoot(TabsPage); // 重新设置首页
    }, () => {
      this.submitted = false;
    });
  }

  toRegister() {
    this.navCtrl.push('RegisterPage');
  }

  findPassword() {
    this.navCtrl.push('FindPasswordPage');
  }

}
