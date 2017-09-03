import {Component} from "@angular/core";
import {NavController, AlertController} from "ionic-angular";
import {NativeService} from "../../../providers/NativeService";
import {UpdateLogPage} from "../update-log/update-log";
import {FeedBackPage} from "../feed-back/feed-back";
import {Helper} from "../../../providers/Helper";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  versionNo: string = '0.0.1';
  update = {//更新进度
    progress: -1
  };

  constructor(private navCtrl: NavController,
              private alertCtrl: AlertController,
              private helper: Helper,
              private nativeService: NativeService) {
    if (this.nativeService.isMobile()) {
      this.nativeService.getVersionNumber().subscribe(value => {
        this.versionNo = value;
      });
    }
  }

  checkNewVersion() {
    if (!this.nativeService.isMobile()) {
      this.nativeService.alert('请使用真机调试');
      return;
    }
    if (this.update.progress == -1 || this.update.progress == 100) {
      this.helper.assertUpgrade().subscribe(isUpdate => {
        if (isUpdate) {
          this.nativeService.downloadApp(this.update);
        } else {
          this.nativeService.alert('已经是最新版本');
        }
      })
    } else {//正在更新
      let alert = this.alertCtrl.create({
        title: '下载进度：',
        buttons: [{text: '确定'}
        ]
      });
      alert.present();
      setInterval(() => {
        alert.setTitle(`下载进度：${this.update.progress}%`);
      }, 1000);
    }
  }

  updateLog() {
    this.navCtrl.push(UpdateLogPage);
  }

  features() {
    this.nativeService.showToast('正在完善...');
  }

  feedBack() {
    this.navCtrl.push(FeedBackPage);
  }

}


