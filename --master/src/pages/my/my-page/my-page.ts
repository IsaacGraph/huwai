import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';

@Component({
  selector: 'my-page',
  templateUrl: 'my-page.html'
})
export class MyDetailPage {
  info: any;
  constructor(public navCtrl: NavController, private nativeStorage: NativeStorage, private navParams: NavParams) {

     this.nativeStorage.getItem('userInfo').then(
          (data) => {
              console.log(data);
              this.info = JSON.parse(data);
          },
          (err) => {
              console.log(err);
              this.info = JSON.parse(this.navParams.get('info'));
          }
      )
    this.info = JSON.parse(this.navParams.get('info'));
    console.dir( JSON.parse(this.navParams.get('info')));
  }

  logout () {
      this.nativeStorage.remove('userInfo');
      this.navCtrl.pop();
  }

}
