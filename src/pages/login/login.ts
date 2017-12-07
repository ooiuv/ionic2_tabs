import {Component} from '@angular/core';
import {ModalController, ViewController, Platform, AlertController, Events} from 'ionic-angular';
import {Storage} from '@ionic/storage';
import {FormBuilder, Validators} from '@angular/forms';
import {FindPasswordPage} from './find-password/find-password';
import {RegisterPage} from './register/register';
import {GlobalData} from "../../providers/GlobalData";
import {CommonService} from "../../service/CommonService";
import {Helper} from "../../providers/Helper";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  submitted: boolean = false;
  loginForm: any;

  constructor(public viewCtrl: ViewController,
              public formBuilder: FormBuilder,
              public storage: Storage,
              public events: Events,
              public globalData: GlobalData,
              public modalCtrl: ModalController,
              public platform: Platform,
              public alertCtrl: AlertController,
              public helper: Helper,
              public commonService: CommonService) {
    this.loginForm = this.formBuilder.group({
      username: [this.globalData.username || 'admin', [Validators.required, Validators.minLength(4)]],// 第一个参数是默认值
      password: ['qqqq1111', [Validators.required, Validators.minLength(4)]]
    });
  }

  login(user) {
    this.submitted = true;
    this.commonService.getToken(user.username, user.password).subscribe(token => {
      this.globalData.token = token;
      this.storage.set('token', token);
      this.commonService.getUserInfo().subscribe(userInfo => {
        this.submitted = false;
        this.helper.loginSuccessHandle(userInfo);
        this.viewCtrl.dismiss(userInfo);
      }, () => {
        this.submitted = false;
      });
    }, () => {
      this.submitted = false;
    });
  }

  ionViewWillEnter() {
    this.events.subscribe('android:backButtonAction',()=>{ //订阅安卓返回按钮事件
      if(!this.globalData.user.id){ //如果没有登录,弹出是否确定退出软件
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
    })
  }

  toRegister() {
    let modal = this.modalCtrl.create(RegisterPage);
    modal.present();
  }

  findPassword() {
    let modal = this.modalCtrl.create(FindPasswordPage);
    modal.present();
  }

}
