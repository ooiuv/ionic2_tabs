import {Component} from "@angular/core";
import {NavController, AlertController} from "ionic-angular";
import {NativeService} from "../../../providers/NativeService";
import {UpdateLogPage} from "../update-log/update-log";
import {FeedBackPage} from "../feed-back/feed-back";
import {Helper} from "../../../providers/Helper";
import {GlobalData} from "../../../providers/GlobalData";
import {Utils} from "../../../providers/Utils";
import {APP_VERSION_SERVE_URL} from "../../../providers/Constants";
import {HttpService} from "../../../providers/HttpService";
import {Response} from "@angular/http";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  currentVersionNo: string = '0.0.1';
  latestVersionNo: string = '0.0.1';
  versionInfo: any = {};

  constructor(private navCtrl: NavController,
              private alertCtrl: AlertController,
              private helper: Helper,
              private globalData: GlobalData,
              private httpService: HttpService,
              private nativeService: NativeService) {
    if (this.nativeService.isMobile()) {
      this.nativeService.getVersionNumber().subscribe(value => {
        this.currentVersionNo = value;
      });
      this.nativeService.getPackageName().subscribe(packageName => {//获得app包名
        let appName = packageName.substring(packageName.lastIndexOf('.') + 1);
        let appType = this.nativeService.isAndroid() ? 'android' : 'ios';
        let url = Utils.formatUrl(`${APP_VERSION_SERVE_URL}/app/${appName}/${appType}/version/log`);
        //从后台查询app版本日志
        this.httpService.get(url).map((res: Response) => res.json()).subscribe(res => {
          if (res) {
            this.versionInfo = res;
            this.latestVersionNo = res.versions[0].version;
          }
        })
      })
    } else {
      // this.nativeService.alert('请使用真机调试');
      let url = Utils.formatUrl(`${APP_VERSION_SERVE_URL}/app/liveWork/android/version/log`);
      //从后台查询app版本日志
      this.httpService.get(url).map((res: Response) => res.json()).subscribe(res => {
        if (res) {
          this.versionInfo = res;
          this.latestVersionNo = res.versions[0].version;
        }
      })
    }
  }

  checkNewVersion() {
    if (this.globalData.updateProgress == -1 || this.globalData.updateProgress == 100) {
      this.helper.assertUpgrade().subscribe(res => {
        if (res.update) {
          this.nativeService.downloadApp();
        } else {
          res.msg && this.nativeService.alert(res.msg);
        }
      })
    } else {//正在更新
      let alert = this.alertCtrl.create({
        title: `下载进度：${this.globalData.updateProgress}%`,
        buttons: [{text: '确定'}
        ]
      });
      alert.present();
      let interval = setInterval(() => {
        alert.setTitle(`下载进度：${this.globalData.updateProgress}%`);
        if (this.globalData.updateProgress == 100) {
          clearInterval(interval);
          alert && alert.dismiss();
        }
      }, 1000);
    }
  }

  updateLog() {
    this.navCtrl.push(UpdateLogPage, {versions: this.versionInfo.versions});
  }

  features() {
    this.nativeService.alert(this.versionInfo.introduction);
  }

  feedBack() {
    this.navCtrl.push(FeedBackPage);
  }

}


