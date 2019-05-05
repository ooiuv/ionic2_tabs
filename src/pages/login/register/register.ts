import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { NativeService } from '../../../providers/NativeService';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(public navCtrl: NavController,
              public viewCtrl: ViewController,
              public navParams: NavParams,
              public nativeService: NativeService) {
  }

  model = {
    realname: '张三',
    username: 'test',
    password: '123456',
    newPassword: '123456'
  };

  formSubmit() {
    this.nativeService.alert('注册失败', '未找到注册接口', () => {
      this.dismiss();
    });
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
