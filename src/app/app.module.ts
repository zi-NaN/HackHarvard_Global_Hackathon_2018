// ../src/app/app.module.ts

import { NgModule, ErrorHandler, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { SQLite } from '@ionic-native/sqlite';

import { AboutPage } from '../pages/about/about';
import { EmotionTrend } from '../pages/about/emotionLineChart/trend';
import { EmotionSuggestion } from '../pages/about/emotionSuggestion/suggestion';
import { ProfilePage } from '../pages/profile/profile';
import { ChatPage } from '../pages/chat/chat';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage';

// import { SpeechRecognition } from '@ionic-native/speech-recognition';

import { ChatService, ChatMessage } from '../providers/chat-service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AboutService } from '../pages/about/about.service';
import { DatabaseService } from '../services/database';
import { EmojiProvider } from '../providers/emoji';
import { PusherServiceProvider } from '../providers/pusher-service/pusher-service';
import { ChatbotServiceProvider } from '../providers/chatbot-service/chatbot-service';



@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    EmotionTrend,
    EmotionSuggestion,
    ProfilePage,
    ChatPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpClientModule,
    FormsModule,
    NgxEchartsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ProfilePage,
    ChatPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    // SpeechRecognition,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ChatMessage,
    ChatService,
    AboutService,
    SQLite,
    DatabaseService,
    EmojiProvider,
    PusherServiceProvider,
    ChatbotServiceProvider
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule {}