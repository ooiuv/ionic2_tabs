import {Component} from '@angular/core';
import 'rxjs/add/operator/map';
import {TestService} from "./TestService";

@Component({
  selector: 'page-test',
  templateUrl: 'test.html'
})
export class TestPage {

  constructor(public testService: TestService) {
  }


  click() {
    this.testService.getObj().subscribe(res => {
    });
  }


}
