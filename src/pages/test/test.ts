import {Component} from '@angular/core';
import 'rxjs/add/operator/map';
import {TestService} from "./TestService";
import {FileObj} from "../../model/FileObj";
// declare var $AC;

@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})
export class TestPage {
  fileObjList: FileObj[] = [];

  constructor(public testService: TestService) {

  }

  ngAfterViewInit(){
    // new $AC(".t", 100, 100, 0).ok(function(base64){
    //   alert(base64);
    // });
  }

  getFileData() {
    this.testService.getFileData().subscribe(res => {
      this.fileObjList = res;
    });
  }



}
