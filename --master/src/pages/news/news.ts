import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { NewsDetail } from '../news_detail/news_detail';
@Component({
    selector: 'news-page',
    templateUrl: 'news.html'
})
export class NewsPage {
    title = '志云户外';
    contents: any;
    loadingFlag: any;
    pageSize = 5;
    canScroll = true;
    constructor (public navCtrl: NavController, private navParams: NavParams, private http: Http, public loadingCtrl: LoadingController) {
        this.title = navParams.get('type') || '志云户外';
        this.contents = [1,2,3,4];
        // this.loadingFlag = this.loadingCtrl.create({
        //     spinner: 'dots',
        //     showBackdrop: false
        // });
        // this.loadingFlag.present();
        // this.fetchData(null);
    }
    fetchData (infiniteScroll) {
        this.http.get(`http://59.48.248.41:1020/iNUC/api/interface/GetPictureNews?pageSize=${this.pageSize}`)
                 .subscribe( res => {
                     res = res.json();
                     this.pageSize += 5;
                     this.asynList(res, infiniteScroll);
                 });
    }
    asynList (data, infiniteScroll) {
        // console.log(data);
        this.contents = data;
        this.loadingFlag.dismiss();
        setTimeout( ()=> {
            if (infiniteScroll) infiniteScroll.complete();
            this.canScroll = true;
        }, 2000);
    }
    toDetail (id) {
        this.navCtrl.push(NewsDetail, {
            id: id
        });
    }
    getCurrentTime (publishTime) {
        return new Date().toLocaleDateString().split('/').join('-') == publishTime ? '今天' : publishTime;
    }
    doInfinite (infiniteScroll) {
        if (!this.canScroll) return;
        this.canScroll = false;
        this.fetchData(infiniteScroll);
        // infiniteScroll.complete();
    }

}
