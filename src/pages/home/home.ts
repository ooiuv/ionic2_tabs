import {Component} from '@angular/core';

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
  isIos: boolean;
  mapIsComplete: boolean = false;//地图是否加载完成
  showIonFab: boolean = false;//是否显示路线按钮
  isPositioning: boolean = false;//是否正在定位
  map: any;//地图对象
  marker: any;//地图坐标点信息

  constructor(private modalCtrl: ModalController,
              private nativeService: NativeService) {
    this.isIos = this.nativeService.isIos();

  }


  ngAfterContentInit(){
    this.loadMap();
    setTimeout(() => {
      if (!this.map) {
        this.loadMap();
      }
    }, 5000);
  }

  loadMap() {
    let that = this;
    try {
      that.map = new AMap.Map('map_container', {
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
      });
      window['HomeAMap'] = this.map;
    } catch (err) {
      that.mapIsComplete = false;
      that.nativeService.showToast('地图加载失败,请检查网络或稍后再试.')
    }

  }

  ionFocus() {
    let that = this;
    let modal = this.modalCtrl.create(LocationSearchModalPage);
    modal.present();
    modal.onDidDismiss(marker => {
      if (marker) {
        that.showIonFab = true;
        that.map.clearMap();
        that.marker = new AMap.Marker({
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
  }

  mapLocation() {
    let that = this;
    that.isPositioning = true;
    that.nativeService.getUserLocation().then(position => {
      that.map.clearMap();
      that.marker = new AMap.Marker({
        map: that.map,
        position: new AMap.LngLat(position['lng'], position['lat']),
      });
      that.map.setFitView();
      that.map.setZoom(16);
      that.isPositioning = false;
    }, () => {
      that.isPositioning = false;
    });
  }

  mapNavigation(navigationType) {//1驾车,2公交,3步行
    let markerData = this.marker.getExtData();
    if (!markerData || !markerData.location) {
      this.nativeService.showToast('请先搜索要去的地点');
      return;
    }
    let modal = this.modalCtrl.create(NavigationModalPage, {
      'navigationType': navigationType,
      'markerLocation': {'lng': markerData.location.lng, 'lat': markerData.location.lat}
    });
    modal.present();
    modal.onDidDismiss(marker => {
      if (marker) {
      }
    });
  }

}
