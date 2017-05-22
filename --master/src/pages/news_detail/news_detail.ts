import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

@Component({
    selector: 'news-detail',
    templateUrl: 'news_detail.html'
})

export class NewsDetail{
    loadingFlag: any;
    title: '新闻详情';
    id = '';
    publishTime = '';
    contents = '';
    constructor (public navCtrl: NavController, private navParams: NavParams, private http: Http, public loadingCtrl: LoadingController) {
        // this.loadingFlag = loadingCtrl.create({
        //     spinner: 'dots',
        //     showBackdrop: false
        // });
        // this.loadingFlag.present();
        // this.id = navParams.get('id');
        // this.fetchData();
        
    }
    fetchData () {
        this.http.get(`http://59.48.248.41:1020/iNUC/api/Interface/GetNewsContent/${this.id}`)
                 .subscribe( res => {
                     res = res.json();
                     this.asynContensts(res);
                 });
    }
    asynContensts (res) {
        this.title = res.Title;
        this.publishTime = res.PublishTime.split('T').join(' ');
        this.contents = res.Contents;
        this.loadingFlag.dismiss();
    }
}
