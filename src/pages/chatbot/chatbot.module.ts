import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChatbotPage } from './chatbot';
import { ChatService } from "../../providers/chat-service";
import { EmojiPickerComponentModule } from "../../components/emoji-picker/emoji-picker.module";
import { EmojiProvider } from "../../providers/emoji";

@NgModule({
  declarations: [
    ChatbotPage,
  ],
  imports: [
    EmojiPickerComponentModule,
    IonicPageModule.forChild(ChatbotPage),
  ],
  exports: [
    ChatbotPage
  ],
  providers: [
    ChatService,
    EmojiProvider
  ]
})
export class ChatbotPageModule {}
