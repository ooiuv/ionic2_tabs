import {Component} from '@angular/core';
import {Storage} from '@ionic/storage';

import {Validators, FormBuilder} from '@angular/forms';
import {NavParams, ViewController} from 'ionic-angular';
import {NativeService} from '../../../providers/NativeService';
import {UserInfo} from "../../../model/UserInfo";

@Component({
  selector: 'page-mine-edit-modal',
  templateUrl: 'mine-edit-modal.html'
})
export class MineEditModalPage {
  userInfo: UserInfo;
  editForm: any;

  constructor(private params: NavParams,
              private viewCtrl: ViewController,
              private storage: Storage,
              private formBuilder: FormBuilder,
              private nativeService: NativeService) {
    this.userInfo = params.get('userInfo');
    this.editForm = this.formBuilder.group({
      name: [this.userInfo.name, [Validators.required, Validators.minLength(2), Validators.pattern('[(\u4e00-\u9fa5)0-9a-zA-Z\_\s@]+')]],
      phone: [this.userInfo.phone, [Validators.required, Validators.pattern('1[0-9]{10,10}')]],
      email: [this.userInfo.email, [Validators.required, Validators.pattern('([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+')]]
    });
  }

  onSubmit() {
    Object.assign(this.userInfo, this.editForm.value);
    this.storage.set('UserInfo', this.userInfo);
    this.nativeService.showToast('保存成功');
    this.viewCtrl.dismiss(this.userInfo);
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
