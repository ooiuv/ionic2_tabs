import {Component} from '@angular/core';
import {Http, Response} from "@angular/http";
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-test',
  templateUrl: 'test.html'
})
export class TestPage {

  constructor(private http: Http) {
  }

  click() {
     this.http.get('../../assets/data/test.json').subscribe((res:Response) =>{

     });
   /* this.http.get('http://localhost:8080/ywtgweb/app/bugRepair/test').map((res: Response) => res.json()).subscribe(res => {
      debugger;
    });*/
  }


}
