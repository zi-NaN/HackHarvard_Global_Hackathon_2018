// ../src/app/app.module.ts

import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { EmotionTrend } from '../pages/about/emotionLineChart/trend';
import { EmotionSuggestion } from '../pages/about/emotionSuggestion/suggestion';
import { ProfilePage } from '../pages/profile/profile';
import { ChatPage } from '../pages/chat/chat';
import { ChatbotPage } from '../pages/chatbot/chatbot';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage';

import { SpeechRecognition } from '@ionic-native/speech-recognition';
import { PusherServiceProvider } from '../providers/pusher-service/pusher-service';

import { ChatServiceProvider } from '../providers/chat-service/chat-service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    EmotionTrend,
    EmotionSuggestion,
    ProfilePage,
    ChatPage,
    ChatbotPage,
    TabsPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpClientModule,
    FormsModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ProfilePage,
    ChatPage,
    ChatbotPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SpeechRecognition,
    PusherServiceProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PusherServiceProvider,
    ChatServiceProvider
  ]
})
export class AppModule {}
