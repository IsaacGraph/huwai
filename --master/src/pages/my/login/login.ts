import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController} from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';
import { Http } from '@angular/http';

import { RegisterPage } from '../register/register';
import { MyDetailPage } from '../my-page/my-page';

// import { Config } from '../../configqwe/config';

@Component({
  selector: 'login-page',
  templateUrl: 'login.html'
})
export class LoginPage {
  username: String;
  password: String;
  loadingFlag: any;
  constructor(public navCtrl: NavController, private nativeStorage: NativeStorage, private http: Http, public loadingCtrl: LoadingController, public alertCtrl: AlertController) {

  }

  login () {
      this.loadingFlag = this.loadingCtrl.create({
          spinner: 'dots',
          showBackdrop: false
      });
      this.loadingFlag.present();
      this.http.post('http://localhost:3000/login',
                     {name: this.username, password: this.password})
                     .subscribe((res) => {
                         this.loadingFlag.dismiss();
                         switch (res['_body'] ){
                             case '601': this.alert('用户不存在');break;
                             case '602': this.alert('密码错误');break;
                             default: this.routeSelfPage(res['_body']);break;
                         }

                     });
  }

  alert (info) {
      let alert = this.alertCtrl.create({
          subTitle: info,
          buttons: ['确定']
      });
      alert.present();
  }

  routeSelfPage (info) {
      // 将登录信息储存进nativeStorage
      this.nativeStorage.setItem('userInfo', JSON.parse(info))
      .then(
            () => {
                console.log('Stored item!');
            },
            error => {
                console.error('Error storing item', error);
            }
      );

      // 跳转至用户详情页
      this.navCtrl.push(MyDetailPage, {info: info});
  }

  gotoRegister () {
      this.navCtrl.push(RegisterPage);
  }

}
