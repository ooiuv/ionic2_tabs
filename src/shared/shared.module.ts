import {NgModule} from '@angular/core';
import {IonicModule} from 'ionic-angular';
import {MyApp} from "../app/app.component";
import {PaginationPage} from "./pagination-component/pagination";


@NgModule({
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  declarations: [PaginationPage],
  exports: [PaginationPage],
  providers: []
})
export class SharedModule {
}
