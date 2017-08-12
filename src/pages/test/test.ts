import {Component} from '@angular/core';
import 'rxjs/add/operator/map';
import {TestService} from "./TestService";
import {FileObj} from "../../model/FileObj";
import {Observable} from "rxjs";

@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})
export class TestPage {

  fileObjList: FileObj[] = [];

  constructor(public testService: TestService) {

  }

  getFileData() {
    console.log(1);
    debugger;
    console.log(2);
    console.log(3);
    console.log(4);
    console.log(5);
    console.log(6);
    console.log(7);
    console.log(8);
    this.testService.getFileData().subscribe(res => {
      this.fileObjList = res;
    });
  }


}
