import { Component } from '@angular/core';
import { TestService } from './TestService';
import { FileObj } from '../../model/FileObj';
import { NativeService } from '../../providers/NativeService';
import { FormDemoPage } from '../demo/form-demo/form-demo';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})
export class TestPage {

  fileObjList: FileObj[] = [];

  constructor(private navCtrl: NavController, public testService: TestService, public nativeService: NativeService) {
  }

  getFileData() {
    this.testService.getFileData().subscribe(res => {
      this.fileObjList = res;
    });
  }

  formDemo() {
    this.navCtrl.push(FormDemoPage);
  }
}
