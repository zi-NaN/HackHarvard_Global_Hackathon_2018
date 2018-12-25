import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ProfilePage } from '../profile/profile';
import { ChatPage } from '../chat/chat';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ChatPage;
  tab2Root = AboutPage;
  tab3Root = ProfilePage;

  constructor() {

  }
}
