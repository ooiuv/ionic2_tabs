import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {FileObj} from "../../../model/FileObj";
import {HttpService} from "../../../providers/HttpService";
import {Response} from "@angular/http";
import {FileService} from "../../../providers/FileService";

@Component({
  selector: 'page-select-pic-demo',
  templateUrl: 'select-pic-demo.html'
})
export class SelectPicDemoPage {
  fileObjList: FileObj[] = [];

  constructor(public navCtrl: NavController,
              private fileService : FileService,
              private httpService: HttpService) {
    this.httpService.get('./assets/data/fileData.json').map((res: Response) => res.json()).subscribe(res => {
      if(res.success){
        for(let fileObj of res.data){
         this.fileObjList.push(<FileObj>{'thumbPath':fileObj.base64,'origPath':fileObj.base64,'base64':fileObj.base64});
        }
      }
    });
  }
  save(){
    debugger;
    this.fileService.uploadMultiByBase64(this.fileObjList).subscribe(res=>{
      debugger;
    })
  }
}
