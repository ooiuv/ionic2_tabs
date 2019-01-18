import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { GlobalData } from '../../../providers/GlobalData';
import { NativeService } from '../../../providers/NativeService';
import { CommonService } from '../../../service/CommonService';

@IonicPage()
@Component({
  selector: 'page-mine-edit-user',
  templateUrl: 'mine-edit-user.html',
})
export class MineEditUserPage {
  userInfo = {
    mobileNumber: '',
    realname: '',
    email: ''
  };

  constructor(public navCtrl: NavController,
              public globalData: GlobalData,
              public commonService: CommonService,
              public nativeService: NativeService) {
    this.userInfo = {...this.globalData.user}; // 复制用户信息
  }

  formSubmit() {
    let data = {...this.globalData.user, ...this.userInfo}; // 组合最新用户信息用于保存
    this.commonService.updateUser(data).subscribe(() => {
      this.globalData.realname = this.userInfo.realname;
      Object.assign(this.globalData.user, this.userInfo); // 修改全局的user
      this.nativeService.showToast('保存成功');
      this.navCtrl.pop();
    });
  }
}
