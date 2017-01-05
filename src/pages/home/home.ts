import {Component} from '@angular/core';
import {NavController, ModalController} from 'ionic-angular';
import {Page1Page} from "../page1/page1";
import {Page2Page} from "../page2/page2";
import {HomeService} from "./HomeService";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [HomeService]
})
export class HomePage {
  userInfo;

  constructor(public navCtrl: NavController,
              public modalCtrl: ModalController,
              public homeService: HomeService) {

  }

  getUser() {
    this.homeService.getUser().then(res => {
      this.userInfo = res.data;
    })
  }

  nextPage() {
    this.navCtrl.push(Page1Page);
  }

  modalPage() {
    let profileModal = this.modalCtrl.create(Page2Page);
    profileModal.present();
  }

  getPicture() {
    let modal = this.modalCtrl.create(Page2Page);
    modal.present();
    modal.onDidDismiss(data => {
      console.log(data);
    });
  }


}
