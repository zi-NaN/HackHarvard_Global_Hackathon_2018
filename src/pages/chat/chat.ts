import { Component } from '@angular/core';
<<<<<<< HEAD
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChatbotPage} from '../chatbot/chatbot';

import { ChatServiceProvider } from './../../providers/chat-service/chat-service';
import { IChat } from './../../models/chatModel';
/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@IonicPage(
)
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})

export class ChatPage {
  chats : IChat[] = [];
  message : string;
  sending : boolean;

  chatbotPage = ChatbotPage;
  constructor(public navCtrl: NavController, public navParams: NavParams, private _chat : ChatServiceProvider) {
  }

  public gotoChatbot(){
    this.navCtrl.push(ChatbotPage);
  }

  ionViewDidLoad() {
    // subscribe to pusher's event
    this._chat.getChannel().bind('chat', data => {
     if(data.type !== 'bot'){
       data.isMe = true;
     };
     this.chats.push(data);
   });
  }

  sendMessage() {
    this.sending = true;
    this._chat.sendMessage(this.message)
      .subscribe(resp => {
        this.message = '';
        this.sending = false;
      }, err => {
        this.sending = false;
      } );
=======
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html'
})
export class ChatPage {
  
  constructor(public navCtrl: NavController) {

>>>>>>> 7d2529b097f75d57b9e8768408af5bfc8a07bbb2
  }

}
