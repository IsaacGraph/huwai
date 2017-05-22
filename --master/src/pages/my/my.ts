import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';

import { MyDetailPage } from './my-page/my-page';
import { LoginPage } from './login/login';

@Component({
  selector: 'my-page',
  templateUrl: 'my.html'
})
export class MyPage {

  rootPage: any;

  constructor(public navCtrl: NavController, private nativeStorage: NativeStorage) {
    //   if (!this.nativeStorage.getItem('userInfo').then()){
    //     this.rootPage = LoginPage;
    //     // this.rootPage = MyDetailPage;
    //   }

        this.nativeStorage.getItem('userInfo')
        .then(
            (data) => {
                this.rootPage = MyDetailPage;
            },
            (err) => {
                alert(err);
                console.log(err);
                this.rootPage = LoginPage;
            }
        );

        // if (this.nativeStorage.getItem('userInfo')){
        //     this.rootPage = MyDetailPage;
        // } else {
        //     this.rootPage = LoginPage;
        // }
  }

 register () {

 }

 login () {

 }

 getUser () {
     return false;
 }

}
