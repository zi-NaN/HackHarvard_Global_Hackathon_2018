import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { Events, Content } from 'ionic-angular';
import { ChatService, ChatMessage, UserInfo } from "../../providers/chat-service";
//import { SpeechRecognition } from '@ionic-native/speech-recognition';

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chatbot.html',
})
export class ChatbotPage {

  // speech to text
  speech: string = '';

  @ViewChild(Content) content: Content;
  @ViewChild('chat_input') messageInput: ElementRef;
  msgList: ChatMessage[] = [];
  user: UserInfo;
  toUser: UserInfo;
  editorMsg = '';
  showEmojiPicker = false;

  
  constructor(navParams: NavParams,
    private chatService: ChatService,
    private events: Events) {
    // private speechRecognition: SpeechRecognition) {
    // Get the navParams toUserId parameter
    this.toUser = {
      id: navParams.get('toUserId'),
      name: navParams.get('toUserName')
    };
    // Get mock user information
    this.chatService.getUserInfo()
      .then((res) => {
        this.user = res
      });
  }
/** 
  // speech recongnition permissions
  //  Cordova not applicable for browser side. 
  // Hence the reason for Cordova_not_available

  ngOnInit() {

    this.speechRecognition.hasPermission()
      .then((hasPermission: boolean) => {

        if (!hasPermission) {
          this.speechRecognition.requestPermission()
            .then(
              () => console.log('Granted'),
              () => console.log('Denied')
            )
        }
      });
  }

  // start listening
  start() {

    this.speechRecognition.startListening()
      .subscribe(
        (matches: Array<string>) => {
          this.speech = matches[0];
        },
        (onerror) => console.log('error:', onerror)
      )
  }
*/

  ionViewWillLeave() {
    // unsubscribe
    this.events.unsubscribe('chat:received');
  }

  ionViewDidEnter() {
    //get message list
    this.getMsg();

    // Subscribe to received  new message events
    this.events.subscribe('chat:received', msg => {
      this.pushNewMsg(msg);
    })
  }

  onFocus() {
    this.showEmojiPicker = false;
    this.content.resize();
    this.scrollToBottom();
  }

  switchEmojiPicker() {
    this.showEmojiPicker = !this.showEmojiPicker;
    if (!this.showEmojiPicker) {
      this.focus();
    } else {
      this.setTextareaScroll();
    }
    this.content.resize();
    this.scrollToBottom();
  }

  /**
   * @name getMsg
   * @returns {Promise<ChatMessage[]>}
   */
  getMsg() {
    // Get mock message list
    return this.chatService
      .getMsgList()
      .subscribe(res => {
        this.msgList = res;
        this.scrollToBottom();
      });
  }

  /**
   * @name sendMsg
   */
  sendMsg() {
    if (!this.editorMsg.trim()) return;

    // Mock message
    const id = Date.now().toString();
    let newMsg: ChatMessage = {
      messageId: Date.now().toString(),
      userId: this.user.id,
      userName: this.user.name,
      userAvatar: this.user.avatar,
      toUserId: this.toUser.id,
      time: Date.now(),
      message: this.editorMsg,
      status: 'pending'
    };

    this.pushNewMsg(newMsg);
    this.editorMsg = '';

    if (!this.showEmojiPicker) {
      this.focus();
    }

    this.chatService.sendMsg(newMsg)
      .then(() => {
        let index = this.getMsgIndexById(id);
        if (index !== -1) {
          this.msgList[index].status = 'success';
        }
      })
  }

  /**
   * @name pushNewMsg
   * @param msg
   */
  pushNewMsg(msg: ChatMessage) {
    const userId = this.user.id,
      toUserId = this.toUser.id;
    // Verify user relationships
    if (msg.userId === userId && msg.toUserId === toUserId) {
      this.msgList.push(msg);
    } else if (msg.toUserId === userId && msg.userId === toUserId) {
      this.msgList.push(msg);
    }
    this.scrollToBottom();
  }

  getMsgIndexById(id: string) {
    return this.msgList.findIndex(e => e.messageId === id)
  }

  scrollToBottom() {
    setTimeout(() => {
      if (this.content.scrollToBottom) {
        this.content.scrollToBottom();
      }
    }, 400)
  }

  private focus() {
    if (this.messageInput && this.messageInput.nativeElement) {
      this.messageInput.nativeElement.focus();
    }
  }

  private setTextareaScroll() {
    const textarea = this.messageInput.nativeElement;
    textarea.scrollTop = textarea.scrollHeight;
  }
}
