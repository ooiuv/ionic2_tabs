import { Component, Input } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { animate, style, transition, trigger } from '@angular/animations';
import 'web-animations-js/web-animations.min';

@IonicPage()
@Component({
  selector: 'page-modal-dialog-animation',
  templateUrl: 'modal-dialog-animation.html',
  animations: [
    // 离场动画
    trigger('leaveAnimation', [
      transition(':leave', [
        animate(300, style({opacity: 0}))
      ])
    ]),
    // 进场动画1
    trigger('animation1', [
      transition(':enter', [
        style({opacity: 0.5, transform: 'scale(0.6,0.6)'}),
        animate(300)
      ])
    ]),
    // 进场动画2
    trigger('animation2', [
      transition(':enter', [
        style({transform: 'translateX(-100%) scale(0.6,0.6)'}),
        animate(300)
      ])
    ])
  ]
})
export class ModalDialogAnimationPage {

  @Input() isShow = false;

}
