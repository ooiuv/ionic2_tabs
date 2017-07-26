import {Component} from '@angular/core';
import {ViewController} from 'ionic-angular';
import {FormBuilder} from "@angular/forms";
import {Validators} from "../../../providers/Validators";
import {NativeService} from "../../../providers/NativeService";
import {MineService} from "../MineService";

/**
 * Generated class for the ChangePasswordPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-change-password',
  templateUrl: 'change-password.html',
})
export class ChangePasswordPage {
  form: any;
  verifyMessages = {
    'oldPsw': {
      'errorMsg': '',
      'required': '旧密码为必填项'
    },
    'newPsw': {
      'errorMsg': '',
      'required': '旧密码为必填项'
    },
    'newPsw2': {
      'errorMsg': '',
      'required': '请重复输入新密码'
    }
  };

  constructor(private viewCtrl: ViewController,
              private formBuilder: FormBuilder,
              private mineService: MineService,
              private nativeService: NativeService) {
    this.form = this.formBuilder.group({
      oldPsw: ['', [Validators.required]],
      newPsw: ['', [Validators.required]],
      newPsw2: ['', [Validators.required]]
    });
    this.form.valueChanges
      .subscribe(data => {
        const verifyMessages = this.verifyMessages;
        for (const field in verifyMessages) {
          verifyMessages[field].errorMsg = '';
          const control = this.form.get(field);
          if (control && control.dirty && !control.valid) {
            const messages = verifyMessages[field];
            for (const key in control.errors) {
              messages[key] && (verifyMessages[field].errorMsg += messages[key] + ' ');
            }
          }
        }
      });
  }

  onSubmit() {
    let oldPsw = this.form.value.oldPsw;
    let newPsw = this.form.value.newPsw;
    let newPsw2 = this.form.value.newPsw2;
    if (newPsw2 != newPsw) {
      this.nativeService.alert('新密码两次输入不一致');
      return;
    }
    this.mineService.updateUserPassword(oldPsw, newPsw).subscribe(res => {
      this.nativeService.showToast('保存成功');
      this.dismiss();
    });
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  /**
   * 密码强度
   * @param pwd
   * @returns {number}
   */
  private checkPass(pwd) {
    let m = 0;
    if (pwd.length < 6) {
      return m; //密码长度小于6
    }
    if (/\d/.test(pwd)) {
      m++; //纯数字密码
    }
    if (/[a-z]/.test(pwd)) {
      m++; //密码包含小写字母
    }
    if (/[A-Z]/.test(pwd)) {
      m++; //密码包含大写字母
    }
    if (/\W/.test(pwd)) {
      m++; //密码包含特殊字符
    }
    if (pwd.length > 15) {
      m = 4;  //密码长度大于15
    }
    return m;
  }
}
