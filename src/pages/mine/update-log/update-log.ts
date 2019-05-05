import { Component } from '@angular/core';
import { VersionService } from '../../../providers/VersionService';
import { NativeService } from '../../../providers/NativeService';

@Component({
  selector: 'page-update-log',
  templateUrl: 'update-log.html'
})
export class UpdateLogPage {

  versions = [];

  constructor(public nativeService: NativeService, public versionService: VersionService) {
    if (!this.nativeService.isMobile()) {
      this.nativeService.alert('请使用真机调试');
      return;
    }
    this.versionService.getVersionList().subscribe(versions => {
      this.versions = versions;
    });
  }


}
