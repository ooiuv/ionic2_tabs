import { Component } from '@angular/core';
import { ActionSheetController, Events, NavController } from 'ionic-angular';
import { GlobalData } from '../../../providers/GlobalData';
import { Helper } from '../../../providers/Helper';
import { NativeService } from '../../../providers/NativeService';
import { FileService } from '../../../providers/FileService';
import { MineService } from '../MineService';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'page-mine-edit-avatar',
  templateUrl: 'mine-edit-avatar.html',
})
export class MineEditAvatarPage {

  constructor(public navCtrl: NavController,
              public helper: Helper,
              public nativeService: NativeService,
              public fileService: FileService,
              public mineService: MineService,
              private camera: Camera,
              public events: Events,
              private actionSheetCtrl: ActionSheetController,
              public globalData: GlobalData) {
  }

  edit() {
    if (!this.nativeService.isMobile()) {
      this.nativeService.alert('请在真机上调试');
      return;
    }
    let options: CameraOptions = {
      destinationType: this.camera.DestinationType.FILE_URI,
      quality: 100
    };
    this.actionSheetCtrl.create({
      buttons: [
        {
          text: '从相册选择',
          handler: () => {
            options.sourceType = this.camera.PictureSourceType.PHOTOLIBRARY;
            this.nativeService.getPicture(options).subscribe(fileUrl => {
              this.cropAvatar(fileUrl);
            });
          }
        },
        {
          text: '拍照',
          handler: () => {
            options.sourceType = this.camera.PictureSourceType.CAMERA;
            this.nativeService.getPicture(options).subscribe(fileUrl => {
              this.cropAvatar(fileUrl);
            });
          }
        },
        {
          text: '取消',
          role: 'cancel'
        }
      ]
    }).present();
  }

  private cropAvatar(fileUrl) {
    this.navCtrl.push('CropImagePage', {imageSrc: fileUrl}).then(() => {
      this.events.subscribe('crop-image:result', imgBase64Str => {
        this.saveAvatar(imgBase64Str);
      });
    });

  }

  private saveAvatar(imgBase64Str) {
    this.fileService.uploadByBase64({'base64': imgBase64Str}).mergeMap(fileObj => {
      const avatarId = fileObj.id;
      const avatarPath = fileObj.origPath;
      this.globalData.user.avatarId = avatarId;
      this.globalData.avatarPath = avatarPath;
      return this.mineService.updateUserAvatarId(avatarId);  // 保存avatar字段到用户表
    }).subscribe(() => {
      this.nativeService.showToast('头像修改成功');
    }, err => {
      console.log(err, '修改用户头像操作失败');
    });
  }
}
