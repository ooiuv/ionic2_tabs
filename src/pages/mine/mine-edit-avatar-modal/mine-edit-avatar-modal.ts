import {Component} from '@angular/core';
import {Storage} from '@ionic/storage';
import {NavParams, ViewController} from 'ionic-angular';
import {NativeService} from '../../../providers/NativeService';
import {UserInfo} from "../../../model/UserInfo";
import {FileService} from "../../../providers/FileService";
import {FileObj} from "../../../model/FileObj";

@Component({
  selector: 'page-mine-edit-avatar-modal',
  templateUrl: 'mine-edit-avatar-modal.html'
})
export class MineEditAvatarModalPage {
  isChange: boolean = false;//头像是否改变标识
  avatarPath: string;
  imageBase64: string;
  userInfo: UserInfo;

  constructor(private params: NavParams,
              private viewCtrl: ViewController,
              private nativeService: NativeService,
              private storage: Storage,
              private fileService: FileService) {
    this.avatarPath = params.data.avatarPath;
    this.storage.get('UserInfo').then(userInfo => {
      this.userInfo =userInfo;
    });
  }

  getPicture(type) {//1拍照,0从图库选择
    let options = {
      targetWidth: 400,
      targetHeight: 400
    };
    if (type == 1) {
      this.nativeService.getPictureByCamera(options).then(imageBase64 => {
        this.getPictureSuccess(imageBase64);
      });
    } else {
      this.nativeService.getPictureByPhotoLibrary(options).then(imageBase64 => {
        this.getPictureSuccess(imageBase64);
      });
    }
  }

  private getPictureSuccess(imageBase64) {
    this.isChange = true;
    this.imageBase64 = <string>imageBase64;
    this.avatarPath = 'data:image/jpeg;base64,' + imageBase64;
  }

  saveAvatar() {
    if (this.isChange) {
      let fileObj = <FileObj>{'base64': this.imageBase64};
      this.fileService.uploadPicture(fileObj).then(result => {
        if (result.success) {
          this.userInfo.avatarId = result.data[0].id;
          let avatarKey = this.userInfo.id+ 'avatar';
          this.storage.set('UserInfo', this.userInfo);
          this.storage.set(avatarKey , this.avatarPath);
        }
      });
      this.viewCtrl.dismiss({avatarPath: this.avatarPath});
    } else {
      this.dismiss();
    }
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
