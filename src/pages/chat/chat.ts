import { Component } from '@angular/core';
// import { IonicPage } from 'ionic-angular';

@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html'
})
export class ChatPage {
  
  toUser : {toUserId: string, toUserName: string};

  constructor() {
    this.toUser = {
      toUserId:'210000198410281948',
      toUserName:'chatbot'
    }
  }

}
