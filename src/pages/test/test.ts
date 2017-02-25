import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Http, Response} from "@angular/http";
import {HttpService} from "../../providers/HttpService";
import 'rxjs/add/operator/map';
/*
 Generated class for the Test page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-test',
  templateUrl: 'test.html'
})
export class TestPage {

  constructor(private http: Http, public navCtrl: NavController, public navParams: NavParams, public httpService: HttpService) {
  }

  click() {
    // this.http.get('../../assets/data/test.json').subscribe((res:Response) => console.log(res.json()));
    this.http.get('http://localhost:8080/ywtgweb/app/bugRepair/test').map((res: Response) => res.json()).subscribe(res=>{
      debugger;
    })
  }


}
