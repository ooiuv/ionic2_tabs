import {Component} from '@angular/core';
import {NavParams} from 'ionic-angular';

@Component({
  selector: 'page-update-log',
  templateUrl: 'update-log.html'
})
export class UpdateLogPage {

  versions = [];

  constructor(public navParams: NavParams) {
    this.versions = this.navParams.get('versions');
  }


}
