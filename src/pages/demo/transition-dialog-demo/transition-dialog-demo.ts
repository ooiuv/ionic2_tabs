import { Component } from '@angular/core';

@Component({
  selector: 'page-transition-dialog-demo',
  templateUrl: 'transition-dialog-demo.html',
})
export class TransitionDialogDemoPage {

  isShow = false;
  isOpen = false;

  show() {
    this.isShow = !this.isShow;
  }

  open() {
    this.isOpen = !this.isOpen;
  }

}
