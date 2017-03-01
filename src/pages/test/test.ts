import {Component} from '@angular/core';
import 'rxjs/add/operator/map';
import {TestService} from "./TestService";
import {Observable} from "rxjs";
import {NavController} from "ionic-angular";

@Component({
  selector: 'page-test',
  templateUrl: 'test.html'
})
export class TestPage {

  constructor(private navCtrl: NavController,public testService: TestService) {

  }

  ionViewDidEnter(){
    let button = document.querySelector('button');
    Observable.fromEvent(button, 'click')
      .scan(count => 10, 0)
      .subscribe(count => console.log(`Clicked ${count} times`));
  }

  click() {
    this.testService.getObj().subscribe(res => {
      console.log(res);
    });
  }
  doSearch(pageNum) {
    console.log(pageNum);
  }


}
