import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {CalendarController} from "ion2-calendar";
import {NativeService} from "../../../providers/NativeService";
import {Utils} from "../../../providers/Utils";

/**
 * Generated class for the CalendarDemoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-calendar-demo',
  templateUrl: 'calendar-demo.html',
})
export class CalendarDemoPage {
  dateRangeStr = '';

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private nativeService: NativeService,
              public calendarCtrl: CalendarController) {
  }

  calendar() {
    this.calendarCtrl.openCalendar({
      isRadio: false,//是否单选,默认true
      canBackwardsSelected: true,//能否选择今天以前的日期
      title: '请选择日期',
      monthTitle: ' yyyy 年 MM 月 ',
      weekdaysTitle: ["天", "一", "二", "三", "四", "五", "六"],
      closeLabel: '取消',
      cssClass: 'color'
    }).then(res => {
      this.dateRangeStr = Utils.dateFormat(new Date(res.from.time)) + '~' + Utils.dateFormat(new Date(res.to.time));
      console.log(res);
    }).catch(() => {
    });
  }

  details(url) {
    this.nativeService.openUrlByBrowser(url);
  }
}
