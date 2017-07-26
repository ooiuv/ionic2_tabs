import {Component} from '@angular/core';
import {Storage} from '@ionic/storage';
import {NavParams, ViewController} from 'ionic-angular';
import {NativeService} from '../../../providers/NativeService';
import {LoginInfo} from "../../../model/UserInfo";
import {FileService} from "../../../providers/FileService";
import {FileObj} from "../../../model/FileObj";
import {FILE_SERVE_URL} from "../../../providers/Constants";
import {MineService} from "../MineService";

@Component({
  selector: 'page-mine-edit-avatar-modal',
  templateUrl: 'mine-edit-avatar-modal.html'
})
export class MineEditAvatarModalPage {
  isChange: boolean = false;//头像是否改变标识
  avatarPath: string;

  constructor(private params: NavParams,
              private viewCtrl: ViewController,
              private fileService: FileService,
              private nativeService: NativeService,
              private mineService: MineService,
              private storage: Storage) {
    this.avatarPath = this.params.get('avatarPath');
  }

  getPicture(type) {//1拍照,0从图库选择
    let options = {
      targetWidth: 256,
      targetHeight: 256,
      quality: 100,
      allowEdit: true
    };
    if (type == 1) {
      this.nativeService.getPictureByCamera(options).subscribe(imageBase64 => {
        this.getPictureSuccess(imageBase64);
      });
    } else {
      this.nativeService.getPictureByPhotoLibrary(options).subscribe(imageBase64 => {
        this.getPictureSuccess(imageBase64);
      });
    }
  }

  private getPictureSuccess(imageBase64) {
    this.isChange = true;
    this.avatarPath = imageBase64;
  }

  saveAvatar() {
    if (this.isChange) {
      let fileObj = <FileObj>{'base64': this.avatarPath};
      this.fileService.uploadByBase64(fileObj).subscribe(result => {// 上传头像图片到文件服务器
        if (result.success) {
          let data = result.data[0], avatarId = data.id, avatarPath = FILE_SERVE_URL + data.origPath;
          this.mineService.updateUserAvatarId(avatarId).subscribe(res => {//保存avatar字段到用户表
            this.storage.get('LoginInfo').then((loginInfo: LoginInfo) => {
              loginInfo.user.avatarId = avatarId;
              loginInfo.user.avatarPath = avatarPath;
              this.storage.set('LoginInfo', loginInfo);
            });
            this.viewCtrl.dismiss({avatarPath: avatarPath});
          });
        }
      });
    } else {
      this.dismiss();
    }
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
