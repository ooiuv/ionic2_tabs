import {Injectable} from '@angular/core';
import {HttpService} from "../../providers/HttpService";

@Injectable()
export class LoginService {
  constructor(private httpService: HttpService) {
  }

  login(user) {
    //return this.httpService.post(APP_SERVE_URL + '/app/bugRepair/login', user);
    let data = {
      success: true,
      msg: '查询成功',
      data: {
        id: 1,
        username: 'yanxiaojun617',
        name: '小军',
        email: 'yanxiaojun617@163.com',
        phone: '18688498342',
        avatarId: '',
        description: '有图有真相，一本正经的胡说八道。'
      }
    };
    return new Promise((resolve) => {
      resolve(data);
    });
  }

}
