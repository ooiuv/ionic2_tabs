import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { NativeService } from '../../../providers/NativeService';
import { FileService } from '../../../providers/FileService';
import { MineService } from '../MineService';
import { GlobalData } from '../../../providers/GlobalData';
import { Camera } from '@ionic-native/camera';

@Component({
  selector: 'page-mine-edit-avatar-modal',
  templateUrl: 'mine-edit-avatar-modal.html'
})
export class MineEditAvatarModalPage {
  userInfo;

  constructor(private viewCtrl: ViewController,
              private fileService: FileService,
              private nativeService: NativeService,
              private camera: Camera,
              private mineService: MineService,
              private globalData: GlobalData) {
    this.userInfo = this.globalData.user;
  }

  getPicture(type) {
    if (type == 0) { // 从相册选一张
      let options = {
        sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
        destinationType: this.camera.DestinationType.FILE_URI,
        targetWidth: 400,
        targetHeight: 400
      };
      this.nativeService.getPicture(options).subscribe(fileUrl => {
        this.getPictureSuccess(fileUrl);
      });
    }
    if (type == 1) { // 拍一张照片
      let options = {
        sourceType: this.camera.PictureSourceType.CAMERA,
        destinationType: this.camera.DestinationType.FILE_URI,
        allowEdit: true,
        targetWidth: 400,
        targetHeight: 400
      };
      this.nativeService.getPicture(options).subscribe(fileUrl => {
        this.getPictureSuccess(fileUrl);
      });
    }
    if (type == 2) { // 从相册选一张,不裁剪
      let options: any = {
        sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
        destinationType: this.camera.DestinationType.DATA_URL,
        allowEdit: true,
        targetWidth: 400,
        targetHeight: 400
      };
      this.nativeService.getPicture(options).subscribe(base64 => {
        this.saveAvatar(base64);
      });
    }
  }

  private getPictureSuccess(fileUrl) {
    this.nativeService.convertImgToBase64(fileUrl).subscribe(base64 => {
      this.saveAvatar(base64);
    });
  }

  saveAvatar(base64) {
    const fileObj = {'base64': base64};
    this.fileService.uploadByBase64(fileObj).subscribe(fileObj => { // 上传头像图片到文件服务器
      const avatarId = fileObj.id;
      const avatarPath = fileObj.origPath;
      this.mineService.updateUserAvatarId(avatarId).subscribe(res => { // 保存avatar字段到用户表
        this.globalData.user.avatarId = avatarId;
        this.globalData.user.avatarPath = avatarPath;
        this.viewCtrl.dismiss();
      });
    });
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
