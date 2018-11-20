import { Component } from '@angular/core';
import { NativeService } from '../../../providers/NativeService';

@Component({
  selector: 'page-transition-dialog-demo',
  templateUrl: 'transition-dialog-demo.html',
})
export class TransitionDialogDemoPage {

  isShow = false;
  isOpen = false;

  constructor(private nativeService: NativeService) {
  }

  details(url) {
    this.nativeService.openUrlByBrowser(url);
  }
}
