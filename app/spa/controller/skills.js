/**
 * Created by jianghe on 2017/12/22.
 */

'use strict';

import $jh from 'lib/spa/spa';
import 'style/skills.css';
import $ from 'jquery';
import skillsTemp from 'template/skillsTemp';
import 'lib/swiper/css/swiper.css';
import Swiper from 'lib/swiper/js/swiper3';

class Ccontroller extends $jh.SpaController {

    constructor() {
        super();
        this.rootDom = null;
    }

    onCreate(nowPage, lastPage) {
        this.render(nowPage, lastPage)
    }

    render(nowPage, lastPage) {
        var that = this;
        that.rootDom = $jh.parseDom(skillsTemp.html)[0];
        nowPage.dom.appendChild(this.rootDom);

        $(this.rootDom).ready(function () {
            new Swiper('.skills_swiper', {
                autoplay: 5000,//可选选项，自动滑动
                loop: true,
                pagination: '.swiper-pagination',
                autoplayDisableOnInteraction: false,//操作后继续执行autoplay
            });
        });
    }

    onBack() {
        console.log('关闭webview');
    }
}

$jh.addController('/skills', Ccontroller);
