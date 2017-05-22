import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { Http } from '@angular/http';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'register-page',
  templateUrl: 'register.html'
})
export class RegisterPage {
  loadingFlag: any;
  username: any;
  password: any;
  password_again: any;
  intro: any;
  phone: any;
  img_src: any;
  constructor(private camera: Camera, private http: Http, public navCtrl: NavController, public loadingCtrl: LoadingController, public alertCtrl: AlertController) {
      this.img_src = 'http://localhost:3000/02.jpg';
  }

  register () {

      if (this.password !== this.password_again) {
          this.alert('两次密码输入不一致，请重新输入');
          return;
      }
      this.loadingFlag = this.loadingCtrl.create({
          spinner: 'dots',
          showBackdrop: false
      });
      this.loadingFlag.present();
      this.http.post('http://localhost:3000/register',
                     {
                         name: this.username,
                         password: this.password,
                         intro: this.intro,
                         avatar: this.img_src,
                         phone: this.phone
                     })
                     .subscribe((res) => {
                         this.loadingFlag.dismiss();
                         switch (res['_body'] ){
                             case '601': this.alert('用户已存在');break;
                             case '602': this.alert('注册失败，再试一次');break;
                             case '700': this.alert('注册成功');break;
                             default: ;break;
                         }
                         this.navCtrl.pop();
                     });
  }

  changeAvatar () {
        const options: CameraOptions = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        }

        this.camera.getPicture(options).then((imageData) => {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            let base64Image = 'data:image/jpeg;base64,' + imageData;
            this.img_src = base64Image;
        }, (err) => {
            alert(err);
        });
  }

  alert (info) {
      let alert = this.alertCtrl.create({
          subTitle: info,
          buttons: ['确定']
      });
      alert.present();
  }

}
