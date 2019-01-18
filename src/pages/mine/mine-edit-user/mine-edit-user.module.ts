import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MineEditUserPage } from './mine-edit-user';
import { DirectivesModule } from '../../../directives/directives.module';

@NgModule({
  declarations: [
    MineEditUserPage,
  ],
  imports: [
    IonicPageModule.forChild(MineEditUserPage), DirectivesModule
  ],
})
export class MineEditUserPageModule {
}
