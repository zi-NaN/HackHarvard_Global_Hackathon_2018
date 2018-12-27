import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { EmotionTrend } from '../pages/about/emotionLineChart/trend';
import { EmotionSuggestion } from '../pages/about/emotionSuggestion/suggestion';
import { ProfilePage } from '../pages/profile/profile';
import { ChatPage } from '../pages/chat/chat';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { NgxEchartsModule } from 'ngx-echarts';

import { AboutService } from '../pages/about/about.service';

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
    NgxEchartsModule,
    IonicModule.forRoot(MyApp)
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
    AboutService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
