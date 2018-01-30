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
import iScroll from 'lib/iScroll/iscroll-probe';

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

            new iScroll('.main', {
                click: true,//false阻止事件冒泡
                disablePointer: true, //禁用指针
                disableTouch: false, //禁用触摸
                disableMouse: false, //禁用鼠标
                deceleration: 0.003 //滚动势能
            });

            that.initRange();
        });
    }

    onBack() {
        console.log('关闭webview');
    }

    //定义一个初始化滑动条的方法
    initRange() {
        var $input = $('input');
        $input.each(function (key, item) {
            //初始化进度条的渐变颜色
            $(item).css('background', 'linear-gradient(to right, #54c590, white ' + item.value + '%, white)');
            //进度条时间监听
            $(item).bind("input", function (e) {
                //根据value值修改进度颜色
                $(item).css('background', 'linear-gradient(to right, #54c590, white ' + item.value + '%, white)');
            });
        });
    }
}

$jh.addController('/skills', Ccontroller);
