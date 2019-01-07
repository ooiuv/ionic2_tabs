import { Component } from '@angular/core';
import { Events, IonicPage, NavController, NavParams } from 'ionic-angular';
import { NativeService } from '../../../providers/NativeService';

declare var AlloyCrop;

/**
 * Generated class for the CropImageDemoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-crop-image-demo',
  templateUrl: 'crop-image-demo.html',
})
export class CropImageDemoPage {

  originalSrc = './assets/img/demo/crop-image.jpg'; // 原图
  newSrc = '';

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public events: Events,
              private nativeService: NativeService) {
  }

  crop() {
    new AlloyCrop({ // api:https://github.com/AlloyTeam/AlloyCrop
      image_src: this.originalSrc,
      className: 'alloy-crop-box', // 添加自定义的css,覆盖ionic默认的样式
      circle: false, // 是否使用圆形截图区域
      width: 140, // 截取宽
      height: 140, // 截取高
      output: 2, // 输入倍数，如果截取宽高是200*200，这里设置2，则最终输出400*400大小的图片
      ok: (base64, canvas) => {
        this.newSrc = base64;
      },
      cancel: () => {
        console.log('AlloyCrop cancel');
      },
      ok_text: '确定', // 默认是 ok
      cancel_text: '取消' // 默认是 cancel
    });
  }

  details(url) {
    this.nativeService.openUrlByBrowser(url);
  }

  crop2() {
    this.navCtrl.push('CropImagePage', {imageSrc: this.originalSrc}).then(() => {
      this.events.subscribe('crop-image:result', imgBase64Str => {
        this.newSrc = imgBase64Str;
      });
    });
  }
}
