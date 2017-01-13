import {Component, ViewChild} from '@angular/core';

import {HomePage} from '../home/home';
import {ContactPage} from '../contact/contact';
import {MinePage} from '../mine/mine';
import {Tabs} from "ionic-angular";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  @ViewChild('mainTabs') tabs: Tabs;
  homeRoot: any = HomePage;
  contactRoot: any = ContactPage;
  mineRoot: any = MinePage;

  constructor() {

  }
}
