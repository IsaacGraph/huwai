import { Component } from '@angular/core';
import { NavController, ActionSheetController, AlertController  } from 'ionic-angular';

// import { ContactPage } from '../contact/contact'

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController, public actionSheetCtrl: ActionSheetController, private alertCtrl: AlertController) {

  }
  openOnePage () {

  }
  presentActionSheet () {
      let actionSheet = this.actionSheetCtrl.create({
          title: '宣志户外电话',
          buttons: [
              {
                  text: 'one',
                  role: 'destructive',
                  handler: () => {
                      this.alert('18435185936');
                  }
              },
              {
                  text: 'two',
                  handler: () => {
                      this.alert('18435185936');
                  }
              },
              {
                  text: 'four',
                  handler: () => {
                      this.alert('18435185936');
                  }
              },
              {
                  text: 'three',
                  role: 'cancel',
                  handler: () => {
                      this.alert('18435185936');
                  }
              }
          ]
      });
      actionSheet.present();
  }

    alert (info) {
        let alert = this.alertCtrl.create({
            subTitle: info,
            buttons: ['确定']
        });
        alert.present();
    }
}
