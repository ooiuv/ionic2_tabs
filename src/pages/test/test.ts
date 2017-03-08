import {Component} from '@angular/core';
import 'rxjs/add/operator/map';
import {TestService} from "./TestService";
import {Observable} from "rxjs";
import {AlertController} from "ionic-angular";
import {NativeService} from "../../providers/NativeService";

@Component({
  selector: 'page-test',
  templateUrl: 'test.html'
})
export class TestPage {

  constructor(private nativeService: NativeService,
              private alertCtrl: AlertController,
              public testService: TestService) {

  }

  ionViewDidEnter(){
    let button = document.querySelector('button');
    Observable.fromEvent(button, 'click')
      .scan(count => 10, 0)
      .subscribe(count => console.log(`Clicked ${count} times`));
  }

  click() {
    this.nativeService.downloadApkInBrowser();
   /* this.testService.getObj().subscribe(res => {
      console.log(res);
    });*/
  }
  doSearch(pageNum) {
    console.log(pageNum);
  }


}
