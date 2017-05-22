import { Component } from '@angular/core';
@Component({
    selector: 'news-page',
    templateUrl: 'config.html'
})
export class Config {
    title = '校园新闻';
    contents: any;
    loadingFlag: any;
    pageSize = 5;
    canScroll = true;
    constructor () {

    }


    getAdmin () {
        return 'mzhe';
    }

}
