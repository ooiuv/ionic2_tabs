import {Component, ViewChild, ElementRef} from '@angular/core';

import {ModalController} from 'ionic-angular';
import {NativeService} from "../../providers/NativeService";
import {NavigationModalPage} from "./navigation-modal/navigation-modal";
import {LocationSearchModalPage} from "./location-search-modal/location-search-modal";

declare var AMap;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('map_container') map_container: ElementRef;
  mapIsComplete: boolean = false;
  showIonFab: boolean = false;
  map: any;
  marker: any;//地图坐标点信息

  constructor(private modalCtrl: ModalController,
              private nativeService: NativeService) {

  }

  ngOnInit() {
    setTimeout(() => this.loadMap(), 1000);//1秒后加载地图
    let loadNum = 0;
    let interval = setInterval(() => {//10秒后检测地图是否加载成功
      if (!this.map && loadNum < 5) {
        this.loadMap();
      } else {
        clearInterval(interval);
      }
    }, 10000);
  }

  loadMap() {
    let that = this;
    try {
      that.map = new AMap.Map(this.map_container.nativeElement, {
        view: new AMap.View2D({//创建地图二维视口
          zoom: 11, //设置地图缩放级别
          rotateEnable: true,
          showBuildingBlock: true
        })
      });

      that.map.on('complete', function () {
        that.mapIsComplete = true;
        AMap.plugin(['AMap.ToolBar', 'AMap.Scale'], function () {//添加工具条和比例尺
          that.map.addControl(new AMap.ToolBar());
          that.map.addControl(new AMap.Scale());
        });

        that.map.plugin('AMap.Geolocation', function () {//添加javascript定位插件
          let geolocation = new AMap.Geolocation({  //更多api详情:http://lbs.amap.com/api/javascript-api/reference/location/
            timeout: 20000,                          //超过10秒后停止定位，默认：无穷大
            buttonOffset: new AMap.Pixel(3, 45),    //定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
            zoomToAccuracy: true,                   //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
            useNative: true                         //是否使用安卓定位sdk用来进行定位，默认：false
          });
          that.map.addControl(geolocation);
          AMap.event.addListener(geolocation, 'complete', result => {
            console.log('定位来源:' + result.location_type + ', 坐标:' + result.position.lng + ',' + result.position.lat);
          });
          AMap.event.addListener(geolocation, 'error', error => {
            alert('定位失败');
          });
        });
      });
      window['HomeAMap'] = this.map;
    } catch (err) {
      that.mapIsComplete = false;
      that.nativeService.showToast('地图加载失败,请检查网络或稍后再试.')
    }

  }

  ionFocus() {
    if (this.mapIsComplete) {
      let that = this;
      let modal = this.modalCtrl.create(LocationSearchModalPage);
      modal.present();
      modal.onDidDismiss(marker => {
        if (marker) {
          that.marker = marker;
          that.showIonFab = true;
          that.map.clearMap();
          new AMap.Marker({
            map: that.map,
            id: marker.id,
            position: new AMap.LngLat(marker.location.lng, marker.location.lat),
            extData: marker,
            title: marker.name
          });
          that.map.setFitView();
          that.map.setZoom(16);
        }
      });
    } else {
      this.loadMap();
    }
  }

  getLocation() {
    this.nativeService.getUserLocation().then(position => {
      debugger;
    });
  }

  mapNavigation(navigationType) {//1驾车,2公交,3步行
    let modal = this.modalCtrl.create(NavigationModalPage, {'navigationType': navigationType, 'marker': this.marker});
    modal.present();
    modal.onDidDismiss(marker => {
      if (marker) {
      }
    });
  }

}
