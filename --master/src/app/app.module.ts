import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';
import { Camera, CameraOptions } from '@ionic-native/camera';

import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { MyPage } from '../pages/my/my';
import { LoginPage } from '../pages/my/login/login';
import { MyDetailPage } from '../pages/my/my-page/my-page';
import { RegisterPage } from '../pages/my/register/register';

import { NewsPage } from '../pages/news/news';
import { NewsDetail } from '../pages/news_detail/news_detail';

import { Config } from '../pages/configqwe/config';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MyPage,
    LoginPage,
    MyDetailPage,
    RegisterPage,
    NewsPage,
    NewsDetail,
    Config
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MyPage,
    LoginPage,
    MyDetailPage,
    RegisterPage,
    NewsPage,
    NewsDetail,
    Config
  ],
  providers: [
      NativeStorage,
      Camera,
      {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
