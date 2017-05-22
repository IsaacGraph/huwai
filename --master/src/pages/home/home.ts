import { Component, ViewChild} from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { NewsPage } from '../news/news';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    @ViewChild('mycontent') nav: NavController
    // 初始化展示的新闻页面
    rootPage = NewsPage;
    // 新闻选项
    items = ['志云户外','户外用品','经验分享'];
    constructor(public navCtrl: NavController, public menuController: MenuController) {
    }
    itemSelected(item) {
        console.log(item);
        this.nav.setRoot(NewsPage,{
            type: item
        });
        this.menuController.close();
    }
}
