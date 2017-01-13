import {Component, ViewChild, ElementRef} from '@angular/core';

import {NavParams, ViewController} from 'ionic-angular';
import {NativeService} from "../../../providers/NativeService";

declare var AMap;

@Component({
  selector: 'page-navigation-modal',
  templateUrl: 'navigation-modal.html'
})
export class NavigationModalPage {
  @ViewChild('panel') panel: ElementRef;
  navigationType;
  navigationIsReady: boolean = false;
  map;
  marker;
  startPoint;
  endPoint;

  constructor(private viewCtrl: ViewController,
              private nativeService: NativeService,
              private navParams: NavParams) {
    this.navigationType = navParams.get("navigationType");
    this.marker = navParams.get("marker");
    this.map = window['HomeAMap'];
  }

  ngOnInit() {
    let type = this.navigationType, options = {city: '广州市', panel: this.panel.nativeElement, map: this.map};
    if (type === 1) {
      AMap.service('AMap.Driving', () => {
        this.doSearch(type, new AMap.Driving(options));
      });
    } else if (type === 2) {
      AMap.service('AMap.Transfer', () => {
        this.doSearch(type, new AMap.Transfer(options));
      });
    } else if (type === 3) {
      AMap.service('AMap.Walking', () => {
        this.doSearch(type, new AMap.Walking(options));
      });
    }
  }

  doSearch(navigationType, navigationService) {
    this.nativeService.getUserLocation().then(location => {
      this.map.clearMap();
      this.startPoint = location;
      this.endPoint = {'longitude': this.marker.location.lng, 'latitude': this.marker.location.lat};
      navigationService.search([location['longitude'], location['latitude']], [this.endPoint.longitude, this.endPoint.latitude], (status, result) => {
        if (navigationType === 1) {
          this.navigationIsReady = true;
        }
      });
    });
  }

  doNavigation(type) {// 0实时导航,1模拟导航
    this.nativeService.navigation(this.startPoint, this.endPoint, type).then(message => {
      debugger;
    });
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
