import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { MinePage } from './mine';
import { MineEditPage } from './mine-edit/mine-edit';
import { FeedBackPage } from './feed-back/feed-back';
import { AboutPage } from './about/about';
import { UpdateLogPage } from './update-log/update-log';
import { SelectPicturePageModule } from '../../shared/select-picture/select-picture.module';
import { MineService } from './MineService';
import { WorkMapPage } from './work-map/work-map';
import { MapLocationModule } from '../../shared/map-component/map-location/map-location.module';
import { SettingPage } from './setting/setting';
import { ChangePasswordPage } from './change-password/change-password';
import { DirectivesModule } from '../../directives/directives.module';
import { FeedBackListPage } from './feed-back/feed-back-list';
import { PagingPageModule } from '../../shared/paging/paging.module';
import { FeedBackDetailPage } from './feed-back/feed-back-detail';
import { FileCachePageModule } from '../../shared/file-cache/file-cache.module';
import { MineEditAvatarPage } from './mine-edit-avatar/mine-edit-avatar';


@NgModule({
  imports: [IonicModule, SelectPicturePageModule, MapLocationModule, DirectivesModule, PagingPageModule, FileCachePageModule],
  declarations: [MinePage, MineEditPage, MineEditAvatarPage, FeedBackPage, AboutPage, UpdateLogPage, WorkMapPage, SettingPage, ChangePasswordPage, FeedBackListPage, FeedBackDetailPage],
  entryComponents: [MinePage, MineEditPage, MineEditAvatarPage, FeedBackPage, AboutPage, UpdateLogPage, WorkMapPage, SettingPage, ChangePasswordPage, FeedBackListPage, FeedBackDetailPage],
  providers: [MineService],
  exports: [IonicModule]
})
export class MineModule {
}
