import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {LoginInfo} from "../../model/UserInfo";

@Injectable()
export class LoginService {
  constructor() {
  }


  login(user): Observable<(LoginInfo)> {
    /* let param = {
     'client_id': 'app',
     'username': user.username,
     'password': user.password
     };
     return this.httpService.post('/authenticate', param).map((res: Response) => res.json());*/
    let loginInfo = {
      access_token: 'test_test_test_test_test_test_test',
      user: {
        id: 1,
        username: user.username,
        fullName: '小军',
        email: 'yanxiaojun617@163.com',
        phone: '18688498342',
        avatarId: '',
        description: '这个人很懒，什么都没有留下'
      }
    };
    return Observable.create((observer) => {
      observer.next(loginInfo);
    });
  }

}
