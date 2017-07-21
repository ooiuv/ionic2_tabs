import {Injectable} from '@angular/core';
import {Response} from "@angular/http";
import 'rxjs/add/operator/map';
import {HttpService} from "../../providers/HttpService";

@Injectable()
export class MineService {
  constructor(public httpService: HttpService) {
  }

  updateUserAvatarId(avatarId: string) {
   return this.httpService.post(`/user/avatar/${avatarId}`).map((res: Response) => res.json());
  }

}
