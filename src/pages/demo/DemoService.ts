import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs/Rx';
import { HttpService } from '../../providers/HttpService';
import { GlobalData } from '../../providers/GlobalData';

@Injectable()
export class DemoService {
  constructor(public http: Http, public httpService: HttpService, public globalData: GlobalData) {
  }


  geCityData() {
    return this.http.get('./assets/data/cityData.json').map((res: Response) => res.json());
  }

  getUserByName(value): Observable<ValidationErrors | null> {
    // todo 这里模拟后台操作
    /*return Observable.create(observer => {
      if (value === 'test') {
        observer.next(null); // 返回null表示验证通过
      } else {
        observer.next({'exist': value}); // 返回非null表示验证失败，其中'exist'可以作为验证失败的类型在页面上判断
      }
    });*/
    this.globalData.showLoading = false;
    const url = '/v1/user/view/getUserNumber';
    const paramMap = {username: value};
    return this.httpService.postFormData(url, paramMap).map(userNumber => {
      return userNumber === 0 ? null : {'exist': value};
    });
  }

}
