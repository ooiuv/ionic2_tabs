import {Component} from '@angular/core';
import 'rxjs/add/operator/map';
import {TestService} from "./TestService";
import {FileObj} from "../../model/FileObj";
declare var AlloyCrop;

@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})
export class TestPage {
  fileObjList: FileObj[] = [];
  cropSrc = 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4256109538,834002284&fm=26&gp=0.jpg';

  constructor(public testService: TestService) {

  }

  ngAfterViewInit() {

  }

  getFileData() {
    this.testService.getFileData().subscribe(res => {
      this.fileObjList = res;
    });
  }

  crop() {
    new AlloyCrop({
      image_src: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4256109538,834002284&fm=26&gp=0.jpg',
      circle: true, // optional parameters , the default value is false
      width: 256, // crop width
      height: 256, // crop height
      output: 1, // output resolution --> 400*200
      ok: (base64, canvas)=>{
        this.cropSrc = base64;
      },
      cancel:()=>{},
      ok_text: "确定", // optional parameters , the default value is ok
      cancel_text: "取消" // optional parameters , the default value is cancel
    });
  }


}
