import {Component} from '@angular/core';

import {NavController, ModalController} from 'ionic-angular';
import {Page1Page} from "../page1/page1";
import {Page2Page} from "../page2/page2";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }

  nextPage() {
    this.navCtrl.push(Page1Page);
  }

  modalPage() {
    let profileModal = this.modalCtrl.create(Page2Page);
    profileModal.present();
  }

}
