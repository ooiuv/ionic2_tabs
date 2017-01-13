import {Injectable} from '@angular/core';
import {HttpService} from "../../providers/HttpService";
import {APP_SERVE_URL} from '../../providers/Constants';

@Injectable()
export class LoginService {
  constructor(private httpService: HttpService) {
  }

  login(user) {
    return this.httpService.post(APP_SERVE_URL + '/app/bugRepair/login', user);
  }

}
