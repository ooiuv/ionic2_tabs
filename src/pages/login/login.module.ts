import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { LoginPage } from './login';

@NgModule({
  imports: [IonicModule],
  declarations: [LoginPage],
  entryComponents: [LoginPage],
  providers: [],
  exports: [IonicModule]
})
export class LoginModule {
}
