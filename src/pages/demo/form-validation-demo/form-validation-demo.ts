import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-form-validation-demo',
  templateUrl: 'form-validation-demo.html',
})
export class FormValidationDemoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  model = {
    username: 'username',
    loginName: 'loginName',
    testName: '',
    callNum: '18688498342',
    password: '12345678',
    password2: '12345678'
  };

}
