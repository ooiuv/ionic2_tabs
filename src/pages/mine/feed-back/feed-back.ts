import { Component } from '@angular/core';
import {ActionSheetController} from 'ionic-angular';
import {FormBuilder} from '@angular/forms';
import {NativeService} from "../../../providers/NativeService";

@Component({
  selector: 'page-feed-back',
  templateUrl: 'feed-back.html'
})
export class FeedBackPage {
  feedBackForm: any;
  imagePaths=[];

  constructor(private formBuilder: FormBuilder,
              private actionSheetCtrl: ActionSheetController,
              private nativeService: NativeService
  ) {
    this.feedBackForm = this.formBuilder.group({
      description: [,]// 第一个参数是默认值
    });

  }
  addPicture(){
    let that=this;
    that.actionSheetCtrl.create({
      buttons: [
        {
          text: '相册',
          role: 'destructive',
          handler: () => {
            that.nativeService.getPictureByPhotoLibrary().then(imageBase64 => {
              that.getPictureSuccess(imageBase64);
            });
          }
        },
        {
          text: '拍照',
          handler: () => {
            that.nativeService.getPictureByCamera().then(imageBase64 => {
              that.getPictureSuccess(imageBase64);
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

  private getPictureSuccess(imageBase64) {
    this.imagePaths.push(imageBase64);
  }
}
