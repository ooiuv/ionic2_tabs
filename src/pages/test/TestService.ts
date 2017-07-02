import {Injectable} from '@angular/core';
import {Response, Http} from "@angular/http";
import 'rxjs/add/operator/map';
import {Observable} from "rxjs";
import {TestObj} from "./TestObj";
import {HttpService} from "../../providers/HttpService";
import {Result} from "../../model/Result";

@Injectable()
export class TestService {
  constructor(public http: Http,public httpService: HttpService) {
  }

  getJson() {
    return this.httpService.get('./assets/data/test.json').map((res: Response) => res.json());
  }

  getObj(): Observable<TestObj> {
    return this.httpService.get('./assets/data/test.json').map((res: Response) => res.json());
  }

  getList(): Observable<TestObj[]> {
    return this.httpService.get('./assets/data/testList.json').map((res: Response) => res.json());
  }

  getFileData(): Observable<Result> {
    return this.http.get('./assets/data/fileData.json').map((res: Response) => res.json());
  }

}
